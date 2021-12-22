import React from 'react';
import { Grid } from '@chakra-ui/react';
import { YinYang } from './YinYang';
import { CenterLogo } from './CenterLogo';
import { motion } from 'framer-motion';
import { useGameboardStore } from './hooks/useGameboardStore';
import { Trigram } from '../trigram/Trigram';

const AnimatedGrid = motion(Grid);

export const DrawBoard = React.memo(() => {
  const currentTrigrams = useGameboardStore((state) =>
    state.getCurrentTrigrams(),
  );
  const onDraw = useGameboardStore(
    (state) => (x: Trigram) => () => state.onDraw(x),
  );

  return (
    <AnimatedGrid
      initial={{ scale: 0, opacity: 0, rotate: -180 }}
      exit={{ scale: 0, opacity: 0, rotate: -180 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      templateColumns="repeat(3, 1fr)"
      gap={{ base: 6, md: 8 }}
      transition={{
        duration: 0.8,
      }}
    >
      <YinYang onClick={onDraw(currentTrigrams[4])} />
      <YinYang onClick={onDraw(currentTrigrams[5])} />
      <YinYang onClick={onDraw(currentTrigrams[6])} />

      <YinYang onClick={onDraw(currentTrigrams[3])} />
      <CenterLogo />
      <YinYang onClick={onDraw(currentTrigrams[7])} />

      <YinYang onClick={onDraw(currentTrigrams[2])} />
      <YinYang onClick={onDraw(currentTrigrams[1])} />
      <YinYang onClick={onDraw(currentTrigrams[0])} />
    </AnimatedGrid>
  );
});
