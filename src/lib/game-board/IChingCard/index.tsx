import { Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { Hexagram } from '../../hexagram/Hexagram';

const AnimatedFlex = motion(Flex);

interface Props {
  hexagram: Hexagram;
}

export const IChingCard = React.memo(({ hexagram }: Props) => {
  console.log('hexagram.cardImage', hexagram.cardImage);

  return (
    <AnimatedFlex
      initial={{ opacity: 0, rotate: -90 }}
      animate={{ opacity: 1, rotate: 1 }}
    >
      <Image src={hexagram.cardImage} />
    </AnimatedFlex>
  );
});
