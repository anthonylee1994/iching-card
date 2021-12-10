import { Flex } from '@chakra-ui/react';
import React from 'react';
import { BookmarksButton } from '../lib/app-layout/BookmarksButton';
import { GameBoard } from '../lib/game-board/GameBoard';

export const Home = React.memo(() => {
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <GameBoard />
      <BookmarksButton />
    </Flex>
  );
});
