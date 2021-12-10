import React from 'react';
import { Flex } from '@chakra-ui/react';
import { LoadingBird } from '../app-layout/LoadingBird';
import { Trigram } from '../trigram/Trigram';
import { DrawBoard } from './DrawBoard';
import { Title } from './Title';
import { TrigramDisplay } from './TrigramDisplay';
import { AnimatePresence } from 'framer-motion';
import { IChingCard } from './IChingCard';
import { Hexagram } from '../hexagram/Hexagram';

export const GameBoard = React.memo(() => {
  const [firstTrigrams, setFirstTrigrams] = React.useState<Trigram[]>([]);
  const [lastTrigrams, setLastTrigrams] = React.useState<Trigram[]>([]);
  const [selectedFirstTrigram, setSelectedFirstTrigram] =
    React.useState<Trigram | null>(null);

  const [selectedLastTrigram, setSelectedLastTrigram] =
    React.useState<Trigram | null>(null);

  const hasResult = selectedFirstTrigram && selectedLastTrigram;

  const [isCardVisible, setCardVisible] = React.useState(false);

  React.useEffect(() => {
    Promise.all([Trigram.getShuffledList(), Trigram.getShuffledList()]).then(
      ([f, l]) => {
        setFirstTrigrams(f);
        setLastTrigrams(l);
      },
    );
  }, []);

  console.log('selectedFirstTrigram', selectedFirstTrigram);
  console.log('selectedLastTrigram', selectedLastTrigram);

  const isLoading = firstTrigrams.length === 0 || lastTrigrams.length === 0;

  if (isLoading) {
    return <LoadingBird />;
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <AnimatePresence>
        {!hasResult && (
          <Title label={!selectedFirstTrigram ? '上卦' : '下卦'} />
        )}
      </AnimatePresence>
      <AnimatePresence onExitComplete={() => setCardVisible(true)}>
        {!hasResult && (
          <DrawBoard
            trigrams={selectedFirstTrigram ? lastTrigrams : firstTrigrams}
            onClick={(trigram) => {
              if (selectedFirstTrigram) {
                setSelectedLastTrigram(trigram);
              } else {
                setSelectedFirstTrigram(trigram);
              }
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isCardVisible && (
          <IChingCard
            hexagram={Hexagram.valueOf(
              selectedFirstTrigram!,
              selectedLastTrigram!,
            )}
          />
        )}
      </AnimatePresence>
      <TrigramDisplay
        firstTrigram={selectedFirstTrigram}
        lastTrigram={selectedLastTrigram}
      />
    </Flex>
  );
});
