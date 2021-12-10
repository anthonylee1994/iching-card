import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Trigram } from '../../trigram/Trigram';
import { TrigramItem } from './TrigramItem';

interface Props {
  firstTrigram: Trigram | null;
  lastTrigram: Trigram | null;
}

export const TrigramDisplay = React.memo(
  ({ firstTrigram, lastTrigram }: Props) => {
    return (
      <Flex
        position="fixed"
        alignItems="center"
        justifyContent="center"
        bottom={8}
      >
        {firstTrigram ? (
          <TrigramItem label="上卦" trigram={firstTrigram} />
        ) : null}
        {lastTrigram ? (
          <TrigramItem label="下卦" trigram={lastTrigram} />
        ) : null}
      </Flex>
    );
  },
);
