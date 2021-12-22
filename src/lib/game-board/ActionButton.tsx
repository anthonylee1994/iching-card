import React from 'react';
import { Button, ButtonProps, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const AnimatedButton = motion(Button);

export const ActionButton = React.memo(
  ({ onClick, ...otherProps }: ButtonProps) => {
    const size = useBreakpointValue({ base: 'md', md: 'lg' });

    return (
      <AnimatedButton
        size={size}
        whileTap={{ scale: 0.9 }}
        _focus={{ borderColor: 'none' }}
        _active={{ borderColor: 'none' }}
        onClick={(e: any) => {
          window?.navigator?.vibrate?.(10);
          onClick?.(e);
        }}
        {...otherProps}
      />
    );
  },
);
