import React from 'react';
import { Flex } from '@chakra-ui/react';
import { BookmarkCard } from '../lib/bookmark/BookmarkCard';
import { useBookmarkStore } from '../lib/bookmark/hooks/useBookmarkStore';
import { FloatingBackButton } from '../lib/app-layout/FloatingBackButton';
import { useNavigate } from 'react-router-dom';
import { DeleteConfirmModal } from '../lib/bookmark/BookmarkCard/DeleteConfirmModal';
import { EmptyBookmark } from '../lib/bookmark/EmptyBookmark';

export const Bookmarks = React.memo(() => {
  const navigate = useNavigate();
  const containerRef = React.useRef(null);
  const bookmarks = useBookmarkStore((state) => state.bookmarks);

  return (
    <Flex
      ref={containerRef}
      width="full"
      minH="100vh"
      flexDirection="column-reverse"
      justifyContent="center"
      alignItems="center"
      pt={{ base: 16, md: 24 }}
      pl={4}
      pr={4}
      pb={{ base: 20, md: '100px' }}
    >
      {bookmarks.length > 0 ? (
        bookmarks.map((bookmark, index) => (
          <BookmarkCard key={index} bookmark={bookmark} index={index} />
        ))
      ) : (
        <EmptyBookmark />
      )}
      <FloatingBackButton onClick={() => navigate(-1)} />
      <DeleteConfirmModal />
    </Flex>
  );
});
