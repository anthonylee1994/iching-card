import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Text,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { useModalStore } from '../app-layout/hooks/useModalStore';
import { GiDogBowl } from 'react-icons/gi';
import { motion } from 'framer-motion';

interface Props {
  finalFocusRef: React.RefObject<HTMLDivElement>;
}

const AnimatedFlex = motion(Flex);
const AnimatedModalContent = motion(ModalContent);

export const DonationModal = React.memo<Props>(({ finalFocusRef }) => {
  const isOpen = useModalStore((state) => state.isOpen('DonationModal'));
  const onClose = useModalStore((state) => () => {
    window?.navigator?.vibrate?.(10);
    state.onClose('DonationModal');
  });

  return (
    <Modal
      isCentered
      size="xs"
      finalFocusRef={finalFocusRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <AnimatedModalContent
        alignItems="center"
        animate={{ rotate: [10, -10, 10, 0] }}
        transition={{ duration: 0.3 }}
      >
        <ModalCloseButton _focus={{ borderColor: 'transparent' }} />
        <ModalHeader userSelect="none">乞衣兜</ModalHeader>
        <ModalBody
          d="flex"
          flexDirection="column"
          width="full"
          alignItems="center"
          mb={4}
          textAlign="center"
        >
          <Text userSelect="none" mb={2}>
            如果各位有錢冇埞洗，可以按以下狗兜懲罰
            <Text fontWeight="bold" as="span" color="orange.300">
              際遇差窮三代IT狗
            </Text>
          </Text>
          <AnimatedFlex
            cursor="pointer"
            whileTap={{ scale: 0.8, rotate: -180 }}
            onTouchStart={() => {
              window?.navigator?.vibrate?.(9999);
            }}
            onTouchEnd={() => {
              window?.navigator?.vibrate?.(0);
            }}
            onClick={() => {
              onClose();
              window.open('https://www.buymeacoffee.com/chongsaulo');
            }}
          >
            <Icon fontSize="8xl" as={GiDogBowl} />
          </AnimatedFlex>
        </ModalBody>
      </AnimatedModalContent>
    </Modal>
  );
});
