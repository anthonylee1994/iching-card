import React from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { MdHistory, MdSave } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useGameboardStore } from '../game-board/hooks/useGameboardStore';
import { SaveBookmarkModal } from '../bookmark/SaveBookmarkModal';
import { useModalStore } from './hooks/useModalStore';

const AnimatedFlex = motion(Flex);

export const BookmarksButton = React.memo(() => {
  const ref = React.useRef(null);
  const navigate = useNavigate();
  const hasResult = useGameboardStore((state) => state.hasResult());
  const isCardSaved = useGameboardStore((state) => state.isCardSaved);

  const onOpenSaveModal = useModalStore(
    (state) => () => state.onOpen('SaveBookmarkModal'),
  );

  return (
    <React.Fragment>
      <AnimatedFlex
        ref={ref}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        cursor="pointer"
        whileTap={{ scale: 0.9, opacity: 0.5 }}
        position="fixed"
        bottom={{ base: 6, md: 8 }}
        left={{ base: 6, md: 8 }}
        onClick={() =>
          hasResult && !isCardSaved ? onOpenSaveModal() : navigate('/bookmarks')
        }
      >
        <Icon
          fontSize={{ base: '4xl', md: '5xl' }}
          as={hasResult && !isCardSaved ? MdSave : MdHistory}
        />
      </AnimatedFlex>
      <SaveBookmarkModal finalFocusRef={ref} />
    </React.Fragment>
  );
});
