import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Hexagram } from '../hexagram/Hexagram';

const AnimatedFlex = motion(Flex);

interface Props {
  noAnimate?: boolean;
  small?: boolean;
  hexagram: Hexagram;
  onClick?: () => void;
}

export const IChingCard = React.memo(
  ({ small, hexagram, noAnimate, onClick }: Props) => {
    return (
      <AnimatedFlex
        onClick={onClick}
        cursor={onClick ? 'pointer' : undefined}
        initial={
          noAnimate
            ? { opacity: 1, rotate: 0, scale: 1 }
            : { opacity: 0, rotate: -90, scale: 0 }
        }
        animate={noAnimate ? undefined : { opacity: 1, rotate: 0, scale: 1 }}
        whileTap={onClick ? { scale: 0.8 } : undefined}
      >
        <Image
          src={hexagram.cardImage}
          height={small ? { base: 200, md: 300 } : { base: 200, md: 300 }}
          borderRadius="md"
        />
      </AnimatedFlex>
    );
  },
);
