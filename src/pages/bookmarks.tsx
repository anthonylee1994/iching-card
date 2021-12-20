import React from 'react';
import { Flex } from '@chakra-ui/react';
import { BookmarkCard } from '../lib/bookmark/BookmarkCard';
import { useBookmarkStore } from '../lib/bookmark/hooks/useBookmarkStore';

export const Bookmarks = React.memo(() => {
  const containerRef = React.useRef(null);
  const bookmarks = useBookmarkStore((state) => state.bookmarks);

  console.log('bookmarks', bookmarks);

  return (
    <Flex
      ref={containerRef}
      width="full"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pt={{ base: 16, md: 24 }}
      pl={2}
      pr={2}
      pb={{ base: 20, md: '100px' }}
    >
      {bookmarks.map((bookmark, key) => (
        <BookmarkCard key={key} bookmark={bookmark} />
      ))}
    </Flex>
  );
});
