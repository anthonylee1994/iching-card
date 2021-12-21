import React from 'react';
import { Flex } from '@chakra-ui/react';

export const CardFooter = React.memo(({ children }) => {
  return (
    <Flex
      justifyContent="space-between"
      pt={0}
      pl={{ base: 1, md: 2 }}
      pr={{ base: 1, md: 2 }}
      pb={{ base: 1, md: 2 }}
    >
      {children}
    </Flex>
  );
});
