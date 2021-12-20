import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameboardStore } from './hooks/useGameboardStore';
import { useModalStore } from '../app-layout/hooks/useModalStore';
import { ActionButton } from './ActionButton';
import { IChingCard } from './IChingCard';
import { IChingCardModal } from './IChingCardModal';

export const DrawResult = React.memo(() => {
  const containerRef = React.useRef(null);
  const navigate = useNavigate();

  const drawedHexagram = useGameboardStore((state) =>
    state.getDrawedHexagram(),
  );

  const openModal = useModalStore(
    (state) => () => state.onOpen('IChingCardModal'),
  );

  const retry = useGameboardStore((state) => state.retry);

  const goToExplainPage = React.useCallback(() => {
    if (!drawedHexagram) {
      return;
    }

    navigate(`/${drawedHexagram.value}`);
  }, [navigate, drawedHexagram]);

  if (!drawedHexagram) {
    return null;
  }

  return (
    <Flex
      ref={containerRef}
      p={4}
      width={{ base: 300, md: 350 }}
      flexDirection="column"
      alignItems="center"
    >
      <IChingCardModal hexagram={drawedHexagram} finalFocusRef={containerRef} />
      <IChingCard onClick={openModal} hexagram={drawedHexagram} />
      <Text
        mt={{ base: 2, md: 4 }}
        fontWeight="bold"
        fontSize={{ base: '3xl', md: '4xl' }}
        color="orange.300"
      >
        {drawedHexagram.symbol} {drawedHexagram.fullname}
      </Text>
      <ActionButton
        mt={{ base: 2, md: 4 }}
        width="full"
        onClick={goToExplainPage}
      >
        解卦
      </ActionButton>
      <ActionButton onClick={retry} mt={4} mb={14} width="full">
        重新鳩卜
      </ActionButton>
    </Flex>
  );
});
