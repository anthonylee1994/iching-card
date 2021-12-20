import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { IChingCard } from '../game-board/IChingCard';
import { Hexagram } from '../hexagram/Hexagram';
import { Bookmark } from './hooks/useBookmarkStore';

interface Props {
  bookmark: Bookmark;
}

export const BookmarkCard = React.memo(({ bookmark }: Props) => {
  const hexagram = Hexagram.fromValue(bookmark.value);

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      width="full"
      bgColor="gray.600"
      borderRadius="md"
      mb={2}
      pt={8}
    >
      <IChingCard noAnimate hexagram={hexagram} />

      <Flex width="full" flexDirection="column" p={2}>
        <Flex
          justifyContent="center"
          fontWeight="bold"
          color="orange.300"
          fontSize={{ base: '3xl', md: '4xl' }}
          mb={1}
        >
          {hexagram.symbol} {hexagram.fullname}
        </Flex>
        <Flex
          flex={1}
          overflowY="auto"
          fontSize={{ base: 'sm', md: 'md' }}
          p={1}
          flexDirection="column"
        >
          <Flex
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
            fontWeight="bold"
            bgColor="gray.500"
            pl={1}
            pr={1}
            pt={0.5}
            pb={0.5}
          >
            鳩卜事項
          </Flex>
          <Flex
            borderBottomLeftRadius="md"
            borderBottomRightRadius="md"
            color="gray.300"
            bgColor="gray.700"
            p={1}
          >
            {bookmark.title}
          </Flex>
          <Flex
            mt={2}
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
            fontWeight="bold"
            bgColor="gray.500"
            pl={1}
            pr={1}
            pt={0.5}
            pb={0.5}
          >
            註解
          </Flex>
          <Flex
            borderBottomRightRadius="md"
            borderBottomLeftRadius="md"
            bgColor="gray.700"
            whiteSpace="break-spaces"
            wordBreak="break-all"
            p={1}
          >
            {bookmark.description}
            {bookmark.description}
            {bookmark.description}
            {bookmark.description}
            {bookmark.description}
          </Flex>
        </Flex>
        <Flex justifyContent="space-between" pt={2}>
          <Button colorScheme="orange" size="sm">
            解卦
          </Button>
          <Button
            ml={2}
            bgColor="red.500"
            _focus={{ bgColor: 'red.500' }}
            _active={{ bgColor: 'red.600' }}
            _hover={{ bgColor: 'red.500' }}
            size="sm"
          >
            刪除
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
});
