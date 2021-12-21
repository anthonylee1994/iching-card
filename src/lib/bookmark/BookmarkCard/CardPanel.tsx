import React from 'react';
import { Flex } from '@chakra-ui/react';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const CardPanel = React.memo(({ title, children }: Props) => {
  return (
    <Flex width="100%" flexDirection="column" mb={{ base: 4, md: 6 }}>
      <Flex
        borderTopLeftRadius="md"
        borderTopRightRadius="md"
        fontWeight="bold"
        bgColor="gray.500"
        pl={{ base: 2, md: 3 }}
        pr={{ base: 2, md: 3 }}
        pt={{ base: 1, md: 1.5 }}
        pb={{ base: 1, md: 1.5 }}
        fontSize={{ base: 'md', md: 'lg' }}
      >
        {title}
      </Flex>
      <Flex
        p={{ base: 2, md: 3 }}
        borderBottomLeftRadius="md"
        borderBottomRightRadius="md"
        color="gray.300"
        bgColor="gray.700"
        whiteSpace="break-spaces"
        wordBreak="break-all"
        fontSize={{ base: 'md', md: 'lg' }}
      >
        {children}
      </Flex>
    </Flex>
  );
});
