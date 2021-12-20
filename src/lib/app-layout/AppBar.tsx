import React from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { GiEgyptianBird } from 'react-icons/gi';

export const AppBar = React.memo(() => {
  return (
    <Flex
      userSelect="none"
      justifyContent="center"
      alignItems="center"
      height={{ base: '64px', md: '80px' }}
      position="fixed"
      width="full"
      fontSize={{ base: '3xl', md: '4xl' }}
      backdropFilter="blur(4px)"
      bgColor="rgb(26 32 44 / 60%)"
    >
      <Icon mr={2} as={GiEgyptianBird} />
      <Text fontWeight="bold">鳩卜</Text>
    </Flex>
  );
});
