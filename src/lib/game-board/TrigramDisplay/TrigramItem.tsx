import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { Trigram } from '../../trigram/Trigram';

interface Props {
  label: '上卦' | '下卦';
  trigram: Trigram;
}

const AnimatedFlex = motion(Flex);

export const TrigramItem = React.memo(({ trigram, label }: Props) => {
  return (
    <AnimatedFlex
      userSelect="none"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      lineHeight={0.8}
      p={1}
    >
      <Text fontSize={{ base: 'xs', md: 'sm' }} mb={{ base: 2, md: 0 }}>
        {label}
      </Text>
      <Text
        position="relative"
        color="orange.300"
        fontSize={{ base: '3xl', md: '7xl' }}
        mb={2}
      >
        {trigram.symbol}
      </Text>
      <Text fontSize={{ base: 'xs', md: 'md' }} color="orange.300">
        {trigram.fullname}
      </Text>
    </AnimatedFlex>
  );
});
