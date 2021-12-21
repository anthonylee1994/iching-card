import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { Hexagram } from '../lib/hexagram/Hexagram';
import { HexagramMessageMap, HexagramType } from '../lib/hexagram/type';
import { IChingCard } from '../lib/game-board/IChingCard';
import { IChingCardModal } from '../lib/game-board/IChingCardModal';
import { useModalStore } from '../lib/app-layout/hooks/useModalStore';
import { ExplainCard } from '../lib/explain/ExplainCard';
import { FloatingBackButton } from '../lib/app-layout/FloatingBackButton';

export const CodeExplainationPage = React.memo(() => {
  const { code } = useParams<'code'>();
  const navigate = useNavigate();
  const hexagram = Hexagram.fromValue(code as HexagramType);
  const containerRef = React.useRef(null);
  const hexagramMessage = hexagram.message;

  const openModal = useModalStore(
    (state) => () => state.onOpen('IChingCardModal'),
  );

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  if (!hexagramMessage) {
    return null;
  }

  return (
    <Flex
      ref={containerRef}
      width="full"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pt={{ base: 20, md: 24 }}
      pl={2}
      pr={2}
      pb={{ base: 20, md: '100px' }}
    >
      <IChingCard hexagram={hexagram} onClick={openModal} />
      <IChingCardModal hexagram={hexagram} finalFocusRef={containerRef} />

      <Flex
        width="full"
        maxWidth={800}
        flexDirection="column"
        mt={{ base: 2, md: 4 }}
      >
        <Flex
          width="full"
          textAlign="center"
          fontSize={{ base: '3xl', md: '4xl' }}
          fontWeight="bold"
          color="orange.300"
          justifyContent="center"
          mt={1}
          mb={{ base: 2, md: 4 }}
        >
          {hexagram.symbol} {hexagram.fullname}
        </Flex>

        {(Object.keys(hexagramMessage) as (keyof HexagramMessageMap)[]).map(
          (key) => (
            <ExplainCard title={key} key={key}>
              {hexagramMessage[key]}
            </ExplainCard>
          ),
        )}
      </Flex>
      <FloatingBackButton onClick={() => navigate(-1)} />
    </Flex>
  );
});
