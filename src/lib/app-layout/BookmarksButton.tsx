import React from 'react';
import { MdHistory, MdSave } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useGameboardStore } from '../game-board/hooks/useGameboardStore';
import { SaveBookmarkModal } from '../bookmark/SaveBookmarkModal';
import { useModalStore } from './hooks/useModalStore';
import { BottomButtonBase } from './BottomButtonBase';

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
      <BottomButtonBase
        bottom={{ base: 6, md: 8 }}
        left={{ base: 6, md: 8 }}
        icon={hasResult && !isCardSaved ? MdSave : MdHistory}
        onClick={() => {
          window?.navigator?.vibrate?.(10);

          hasResult && !isCardSaved
            ? onOpenSaveModal()
            : navigate('/bookmarks');
        }}
      />
      <SaveBookmarkModal finalFocusRef={ref} />
    </React.Fragment>
  );
});
