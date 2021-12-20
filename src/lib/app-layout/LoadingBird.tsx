import { Flex, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { GiEgyptianBird } from 'react-icons/gi';

const AnimatedFlex = motion(Flex);

export const LoadingBird = React.memo(() => {
  return (
    <AnimatedFlex
      animate={{ scale: 1.2, rotate: 45, opacity: 0.5 }}
      transition={{
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 0.3,
      }}
    >
      <Icon fontSize={{ base: '6xl', md: '8xl' }} as={GiEgyptianBird} />
    </AnimatedFlex>
  );
});
