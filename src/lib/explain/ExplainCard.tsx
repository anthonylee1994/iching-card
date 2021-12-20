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
      m={2}
      bgColor="gray.600"
      flexDirection="column"
      alignItems="center"
      borderRadius="md"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <Flex
        p={1}
        borderTopLeftRadius="md"
        borderTopRightRadius="md"
        bgColor="orange.300"
        width="full"
        justifyContent="center"
        fontWeight="bold"
        color="gray.700"
        fontSize={{ base: 'md', md: 'lg' }}
      >
        {title}
      </Flex>
      <Flex fontSize={{ base: 'md', md: 'lg' }} p={{ base: 2, md: 4 }}>
        {children}
      </Flex>
    </AnimatedFlex>
  );
});
