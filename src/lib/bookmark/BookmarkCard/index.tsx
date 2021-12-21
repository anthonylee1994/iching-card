import React from 'react';
import { Flex } from '@chakra-ui/react';
import { IChingCard } from '../../game-board/IChingCard';
import { Hexagram } from '../../hexagram/Hexagram';
import { Bookmark, useBookmarkStore } from '../hooks/useBookmarkStore';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';
import { CardPanel } from './CardPanel';
import { CardContainer } from './CardContainer';
import { DeleteButton } from './DeleteButton';
import { ExplainButton } from './ExplainButton';
import { Title } from './Title';
import { useNavigate } from 'react-router-dom';
import { useModalStore } from '../../app-layout/hooks/useModalStore';

interface Props {
  index: number;
  bookmark: Bookmark;
}

export const BookmarkCard = React.memo(({ bookmark, index }: Props) => {
  const navigate = useNavigate();
  const hexagram = Hexagram.fromValue(bookmark.value);
  const setDeleteIndex = useBookmarkStore((state) => state.setDeleteIndex);
  const openDeleteConfirmModal = useModalStore(
    (state) => () => state.onOpen('DeleteBookmarkConfirmModal'),
  );

  const gotoExplainPage = React.useCallback(() => {
    navigate(`/${hexagram.value}`);
  }, [navigate, hexagram.value]);

  const onDelete = React.useCallback(() => {
    setDeleteIndex(index);
    openDeleteConfirmModal();
  }, [index, setDeleteIndex, openDeleteConfirmModal]);

  return (
    <CardContainer maxWidth="600px">
      <IChingCard noAnimate hexagram={hexagram} />

      <Flex width="full" flexDirection="column" p={3}>
        <Title hexagram={hexagram} />
        <CardContent>
          <CardPanel title="鳩卜事項">{bookmark.title}</CardPanel>
          {bookmark.description && (
            <CardPanel title="註解">{bookmark.description}</CardPanel>
          )}
        </CardContent>
        <CardFooter>
          <ExplainButton onClick={gotoExplainPage} />
          <DeleteButton onClick={onDelete} />
        </CardFooter>
      </Flex>
    </CardContainer>
  );
});
