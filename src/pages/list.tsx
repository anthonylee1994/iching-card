import React from 'react';
import { Flex, Grid } from '@chakra-ui/react';
import { Hexagram } from '../lib/hexagram/Hexagram';
import { IChingCard } from '../lib/game-board/IChingCard';
import { useNavigate } from 'react-router-dom';
import { FloatingBackButton } from '../lib/app-layout/FloatingBackButton';

export const List = React.memo(() => {
  const navigate = useNavigate();

  return (
    <Flex
      width="full"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      pt={{ base: 16, md: 24 }}
      pl={4}
      pr={4}
      pb={{ base: 20, md: '100px' }}
    >
      <Grid
        templateColumns={{
          base: 'repeat(3, 1fr)',
          lg: 'repeat(6, 1fr)',
          xl: 'repeat(8, 1fr)',
        }}
        gap={2}
      >
        {Hexagram.getSequencedHexagrams().map((hexagram, index) => (
          <IChingCard
            key={index}
            hexagram={hexagram}
            onClick={() => navigate(`/${hexagram.value}`)}
          />
        ))}
      </Grid>
      <FloatingBackButton onClick={() => navigate(-1)} />
    </Flex>
  );
});
