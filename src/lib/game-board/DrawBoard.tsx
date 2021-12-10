import React from 'react';
import { Grid } from '@chakra-ui/react';
import { YinYang } from './YinYang';
import { CenterLogo } from './CenterLogo';
import { motion } from 'framer-motion';
import { Trigram } from '../trigram/Trigram';

const AnimatedGrid = motion(Grid);

interface Props {
  trigrams: Trigram[];
  onClick: (trigram: Trigram) => void;
}

export const DrawBoard = React.memo(({ trigrams, onClick }: Props) => {
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
      {trigrams.slice(0, 4).map((trigram, index) => (
        <YinYang key={index} onClick={() => onClick(trigram)} />
      ))}
      <CenterLogo />
      {trigrams.slice(4, 8).map((trigram, index) => (
        <YinYang key={index} onClick={() => onClick(trigram)} />
      ))}
    </AnimatedGrid>
  );
});
