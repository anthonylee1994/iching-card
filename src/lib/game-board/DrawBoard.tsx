import React from 'react';
import { Grid } from '@chakra-ui/react';
import { YinYang } from './YinYang';
import { CenterLogo } from './CenterLogo';
import { motion } from 'framer-motion';
import { useGameboardStore } from './hooks/useGameboardStore';

const AnimatedGrid = motion(Grid);

export const DrawBoard = React.memo(() => {
  const currentTrigrams = useGameboardStore((state) =>
    state.getCurrentTrigrams(),
  );
  const onDraw = useGameboardStore((state) => state.onDraw);

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
      {currentTrigrams.slice(0, 4).map((trigram, index) => (
        <YinYang key={index} onClick={() => onDraw(trigram)} />
      ))}
      <CenterLogo />
      {currentTrigrams.slice(4, 8).map((trigram, index) => (
        <YinYang key={index} onClick={() => onDraw(trigram)} />
      ))}
    </AnimatedGrid>
  );
});
