import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useGameboardStore } from '../../../hooks/useGameboardStore';
import { TrigramItem } from './TrigramItem';

export const TrigramDisplay = React.memo(() => {
  const selectedFirstTrigram = useGameboardStore(
    (state) => state.selectedFirstTrigram,
  );
  const selectedLastTrigram = useGameboardStore(
    (state) => state.selectedLastTrigram,
  );

  return (
    <Flex
      position="fixed"
      alignItems="center"
      justifyContent="center"
      bottom={8}
    >
      {selectedFirstTrigram ? (
        <TrigramItem label="上卦" trigram={selectedFirstTrigram} />
      ) : null}
      {selectedLastTrigram ? (
        <TrigramItem label="下卦" trigram={selectedLastTrigram} />
      ) : null}
    </Flex>
  );
});
