import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Hexagram } from '../hexagram/Hexagram';

const AnimatedFlex = motion(Flex);

interface Props {
  hexagram: Hexagram;
  onClick?: () => void;
}

export const IChingCard = React.memo(({ hexagram, onClick }: Props) => {
  return (
    <AnimatedFlex
      onClick={onClick}
      cursor={onClick ? 'pointer' : undefined}
      initial={{ opacity: 0, rotate: -90, scale: 0 }}
      animate={{ opacity: 1, rotate: 0, scale: 1 }}
    >
      <Image src={hexagram.cardImage} height={300} borderRadius="md" />
    </AnimatedFlex>
  );
});
