import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Hexagram } from '../../hexagram/Hexagram';

interface Props {
  hexagram: Hexagram;
}

export const Title = React.memo(({ hexagram }: Props) => {
  return (
    <Flex
      justifyContent="center"
      fontWeight="bold"
      color="orange.300"
      fontSize={{ base: '3xl', md: '4xl' }}
      mb={1}
    >
      {hexagram.symbol} {hexagram.fullname}
    </Flex>
  );
});
