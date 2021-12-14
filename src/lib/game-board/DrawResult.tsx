import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useGameboardStore } from '../../hooks/useGameboardStore';
import { useModalStore } from '../../hooks/useModalStore';
import { ActionButton } from './ActionButton';
import { IChingCard } from './IChingCard';
import { IChingCardModal } from './IChingCardModal';

export const DrawResult = React.memo(() => {
  const containerRef = React.useRef(null);

  const drawedHexagram = useGameboardStore((state) =>
    state.getDrawedHexagram(),
  );

  const openModal = useModalStore(
    (state) => () => state.onOpen('IChingCardModal'),
  );

  const retry = useGameboardStore((state) => state.retry);

  if (!drawedHexagram) {
    return null;
  }

  return (
    <Flex
      ref={containerRef}
      p={4}
      width={300}
      flexDirection="column"
      alignItems="center"
    >
      <IChingCardModal hexagram={drawedHexagram} finalFocusRef={containerRef} />
      <IChingCard onClick={openModal} hexagram={drawedHexagram} />
      <Text mt={2} fontWeight="bold" fontSize="3xl" color="orange.300">
        {drawedHexagram.fullname}
      </Text>
      <ActionButton mt={2} width="full">
        解卦
      </ActionButton>
      <ActionButton onClick={retry} mt={4} mb={14} width="full">
        重新鳩卜
      </ActionButton>
    </Flex>
  );
});
