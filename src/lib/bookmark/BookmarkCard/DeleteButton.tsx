import React from 'react';
import { Button, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const AnimatedButton = motion(Button);

interface Props {
  onClick: () => void;
}

export const DeleteButton = React.memo(({ onClick }: Props) => {
  const size = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <AnimatedButton
      ml={2}
      size={size}
      bgColor="red.500"
      _focus={{ bgColor: 'red.500' }}
      _active={{ bgColor: 'red.500' }}
      _hover={{ bgColor: 'red.500' }}
      whileTap={{ scale: 0.8 }}
      onClick={() => {
        window?.navigator?.vibrate?.([10, 100, 10]);
        onClick();
      }}
    >
      刪除
    </AnimatedButton>
  );
});
