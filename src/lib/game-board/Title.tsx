import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const AnimatedFlex = motion(Flex);

interface Props {
  label: '上卦' | '下卦';
}

export const Title = React.memo(({ label }: Props) => {
  return (
    <AnimatedFlex
      initial={{ transform: `translateY(-20px)`, opacity: 0 }}
      animate={{ transform: `translateY(0px)`, opacity: 1 }}
      exit={{ transform: `translateY(20px)`, opacity: 0 }}
      justifyContent="center"
    >
      <Text lineHeight={2} fontSize="xl" mb={8}>
        而家開始默念您嘅問題
        <br />
        隨鳩點擊太極抽出
        <Text as="span" fontWeight="bold" color="orange.300">
          {label}
        </Text>
      </Text>
    </AnimatedFlex>
  );
});
