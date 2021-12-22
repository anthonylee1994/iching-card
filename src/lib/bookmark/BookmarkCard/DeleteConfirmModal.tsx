import React from 'react';
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from '@chakra-ui/react';
import { useModalStore } from '../../app-layout/hooks/useModalStore';
import { motion } from 'framer-motion';
import { useBookmarkStore } from '../hooks/useBookmarkStore';

const AnimatedButton = motion(Button);

export const DeleteConfirmModal = React.memo(() => {
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  const isOpen = useModalStore((state) =>
    state.isOpen('DeleteBookmarkConfirmModal'),
  );

  const onClose = useModalStore((state) => () => {
    window?.navigator?.vibrate?.(10);
    state.onClose('DeleteBookmarkConfirmModal');
  });

  const removeCurrentBookmark = useBookmarkStore(
    (state) => state.removeCurrentBookmark,
  );

  const onDelete = React.useCallback(() => {
    removeCurrentBookmark();
    onClose();
  }, [onClose, removeCurrentBookmark]);

  return (
    <AlertDialog
      isCentered
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            刪除鳩卜結果
          </AlertDialogHeader>

          <AlertDialogBody>
            您係咪決定要刪除此鳩卜結果？一經刪除，就冇辦法復原㗎啦！
          </AlertDialogBody>

          <AlertDialogFooter>
            <AnimatedButton
              whileTap={{ scale: 0.8 }}
              _focus={{ bgColor: 'gray.600' }}
              _active={{ bgColor: 'gray.600' }}
              _hover={{ bgColor: 'gray.600' }}
              ref={cancelRef}
              onClick={onClose}
            >
              取消
            </AnimatedButton>
            <AnimatedButton
              color="white"
              bgColor="red.500"
              _focus={{ bgColor: 'red.500' }}
              _active={{ bgColor: 'red.500' }}
              _hover={{ bgColor: 'red.500' }}
              whileTap={{ scale: 0.8 }}
              colorScheme="red"
              ml={3}
              onClick={onDelete}
            >
              刪除
            </AnimatedButton>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
});
