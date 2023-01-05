import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { useModalStore } from "../app-layout/hooks/useModalStore";
import { useGameboardStore } from "../game-board/hooks/useGameboardStore";
import { IChingCard } from "../game-board/IChingCard";
import { useBookmarkStore } from "./hooks/useBookmarkStore";

interface Props {
  finalFocusRef: React.RefObject<HTMLDivElement>;
}

export const SaveBookmarkModal = React.memo(({ finalFocusRef }: Props) => {
  const isOpen = useModalStore((state) => state.isOpen("SaveBookmarkModal"));
  const modalSize = useBreakpointValue({ base: "full", md: "md" });
  const onClose = useModalStore((state) => () => {
    window?.navigator?.vibrate?.(10);
    state.onClose("SaveBookmarkModal");
  });

  const setCardSaved = useGameboardStore((state) => state.setCardSaved);

  const addBookmark = useBookmarkStore((state) => state.addBookmark);

  const drawedHexagram = useGameboardStore((state) =>
    state.getDrawedHexagram()
  );

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const onSave = () => {
    if (!drawedHexagram) {
      return;
    }

    addBookmark({ value: drawedHexagram.value, title, description });
    setCardSaved(true);
    onClose();
  };

  if (!drawedHexagram) {
    return null;
  }

  return (
    <Modal
      size={modalSize}
      finalFocusRef={finalFocusRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent borderRadius={{ base: 0, md: "md" }} alignItems="center">
        <ModalCloseButton _focus={{ borderColor: "transparent" }} />
        <ModalHeader>儲存易卜結果</ModalHeader>
        <ModalBody
          d="flex"
          flexDirection="column"
          width="full"
          alignItems="center"
        >
          <IChingCard small hexagram={drawedHexagram} />

          <Text
            mt={{ base: 2, md: 4 }}
            fontWeight="bold"
            fontSize={{ base: "3xl", md: "4xl" }}
            color="orange.300"
          >
            {drawedHexagram.symbol} {drawedHexagram.fullname}
          </Text>

          <FormControl isRequired>
            <FormLabel>易卜事項</FormLabel>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              focusBorderColor="orange.300"
              _placeholder={{ color: "gray.400" }}
              width="full"
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>註解</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              focusBorderColor="orange.300"
              _placeholder={{ color: "gray.300" }}
              width="full"
              placeholder="無事不佔，不動不佔，不誠不占"
            />
          </FormControl>

          <Button
            m={4}
            disabled={!title}
            onClick={onSave}
            _focus={{ bgColor: "orange.300" }}
            _active={{ bgColor: "orange.400" }}
            _hover={{ bgColor: "orange.300" }}
            bgColor="orange.300"
            color="gray.700"
            width="full"
          >
            儲存
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
