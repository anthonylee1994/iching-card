import React from 'react';
import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { useModalStore } from '../../hooks/useModalStore';
import { Hexagram } from '../hexagram/Hexagram';
import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface Props {
  hexagram: Hexagram;
  finalFocusRef: React.RefObject<HTMLDivElement>;
}

const AnimatedContent = motion(ModalContent);

export const IChingCardModal = React.memo(
  ({ finalFocusRef, hexagram }: Props) => {
    const isOpen = useModalStore((state) => state.isOpen('IChingCardModal'));
    const onClose = useModalStore(
      (state) => () => state.onClose('IChingCardModal'),
    );

    return (
      <Modal
        size="full"
        isCentered
        finalFocusRef={finalFocusRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <AnimatedContent
          bgColor="transparent"
          padding={4}
          initial={{ scale: 0, rotateY: -360, filter: 'blur(4px)' }}
          animate={{ scale: 1, rotateY: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            width="full"
            borderRadius="md"
            onClick={onClose}
            src={hexagram.cardImage}
          />
        </AnimatedContent>
      </Modal>
    );
  },
);
