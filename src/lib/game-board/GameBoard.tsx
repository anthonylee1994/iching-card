import React from 'react';
import { Flex } from '@chakra-ui/react';
import { LoadingBird } from '../app-layout/LoadingBird';
import { DrawBoard } from './DrawBoard';
import { Title } from './Title';
import { TrigramDisplay } from './TrigramDisplay';
import { AnimatePresence } from 'framer-motion';
import { DrawResult } from './DrawResult';
import { useGameboardStore } from './hooks/useGameboardStore';

export const GameBoard = React.memo(() => {
  const isLoading = useGameboardStore((state) => state.isLoading());
  const hasResult = useGameboardStore((state) => state.hasResult());
  const shuffle = useGameboardStore((state) => state.shuffle);
  const showCard = useGameboardStore((state) => state.showCard);
  const isCardVisible = useGameboardStore((state) => state.isCardVisible);

  React.useEffect(shuffle, [shuffle]);

  if (isLoading) {
    return <LoadingBird />;
  }

  return (
    <Flex width="full" flexDirection="column" alignItems="center">
      <AnimatePresence>{!hasResult && <Title />}</AnimatePresence>
      <AnimatePresence onExitComplete={showCard}>
        {!hasResult && <DrawBoard />}
      </AnimatePresence>
      {isCardVisible && <DrawResult />}
      <TrigramDisplay />
    </Flex>
  );
});
