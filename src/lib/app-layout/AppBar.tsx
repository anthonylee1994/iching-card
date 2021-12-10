import React from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { GiEgyptianBird } from 'react-icons/gi';

export const AppBar = React.memo(() => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="72px"
      position="fixed"
      width="full"
      fontSize="3xl"
    >
      <Icon mr={2} as={GiEgyptianBird} />
      <Text fontWeight="bold">鳩卜</Text>
    </Flex>
  );
});
