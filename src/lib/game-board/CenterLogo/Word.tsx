import React from 'react';
import { Text } from '@chakra-ui/react';

export const Word = React.memo(({ children }) => {
  return (
    <Text
      fontSize={{ base: '2xl', md: '4xl' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Text>
  );
});
