import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const AnimatedButton = motion(Button);

export const ActionButton = React.memo((props: ButtonProps) => {
  return (
    <AnimatedButton
      whileTap={{ scale: 0.9 }}
      _focus={{ borderColor: 'none' }}
      _active={{ borderColor: 'none' }}
      {...props}
    />
  );
});
