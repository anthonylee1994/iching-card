import React from 'react';
import { Button, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const AnimatedButton = motion(Button);

interface Props {
  onClick: () => void;
}

export const ExplainButton = React.memo(({ onClick }: Props) => {
  const size = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <AnimatedButton
      size={size}
      color="orange.900"
      bgColor="orange.300"
      _focus={{ bgColor: 'orange.300' }}
      _active={{ bgColor: 'orange.300' }}
      _hover={{ bgColor: 'orange.300' }}
      whileTap={{ scale: 0.8 }}
      onClick={() => {
        window?.navigator?.vibrate?.(10);
        onClick();
      }}
    >
      解卦
    </AnimatedButton>
  );
});
