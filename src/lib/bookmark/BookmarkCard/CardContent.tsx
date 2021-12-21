import React from 'react';
import { Flex } from '@chakra-ui/react';

export const CardContent = React.memo(({ children }) => {
  return (
    <Flex
      p={1}
      flex={1}
      overflowY="auto"
      fontSize={{ base: 'sm', md: 'md' }}
      flexDirection="column"
    >
      {children}
    </Flex>
  );
});
