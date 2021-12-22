import React from 'react';
import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { useModalStore } from '../app-layout/hooks/useModalStore';
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
          maxWidth={350}
          justifyContent="center"
          boxShadow="none"
          bgColor="transparent"
          padding={4}
          initial={{ scale: 0, rotateY: -360, filter: 'blur(4px)' }}
          animate={{ scale: 1, rotateY: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            cursor="pointer"
            width="full"
            borderRadius={{ base: 'md', md: 'lg' }}
            onClick={onClose}
            src={hexagram.cardImage}
          />
        </AnimatedContent>
      </Modal>
    );
  },
);
