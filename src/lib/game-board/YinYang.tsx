import React from 'react';
import { Flex, FlexProps, Icon } from '@chakra-ui/react';
import { FaYinYang } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AnimatedFlex = motion(Flex);

export const YinYang = React.memo((props: FlexProps) => {
  return (
    <AnimatedFlex
      cursor="pointer"
      justifyContent="center"
      alignItems="center"
      whileTap={{ scale: 2, opacity: 0.5 }}
      {...props}
    >
      <AnimatedFlex
        justifyContent="center"
        alignItems="center"
        animate={{ rotate: 360 }}
        transition={{
          type: 'linear',
          repeat: Infinity,
          duration: 2,
          ease: 'linear',
        }}
      >
        <Icon fontSize={{ base: '6xl', md: '8xl' }} as={FaYinYang} />
      </AnimatedFlex>
    </AnimatedFlex>
  );
});
