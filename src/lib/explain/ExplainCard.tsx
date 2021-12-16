import React from 'react';
import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  children?: React.ReactNode;
}

const AnimatedFlex = motion(Flex);

export const ExplainCard = React.memo(({ title, children }: Props) => {
  return (
    <AnimatedFlex
      bgColor="gray.600"
      flexDirection="column"
      alignItems="center"
      m={2}
      borderRadius="md"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <Flex
        borderTopLeftRadius="md"
        borderTopRightRadius="md"
        p={1}
        bgColor="orange.300"
        width="full"
        justifyContent="center"
        fontWeight="bold"
        color="gray.700"
      >
        {title}
      </Flex>
      <Flex p={2}>{children}</Flex>
    </AnimatedFlex>
  );
});
