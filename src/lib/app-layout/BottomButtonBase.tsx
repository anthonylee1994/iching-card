import React from 'react';
import { Flex, FlexProps, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const AnimatedFlex = motion(Flex);

interface Props extends FlexProps {
  icon: any;
}

export const BottomButtonBase = React.forwardRef<
  HTMLElement | SVGElement,
  Props
>(({ onClick, icon, ...otherProps }, ref) => {
  return (
    <AnimatedFlex
      ref={ref}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      cursor="pointer"
      whileTap={{ scale: 0.9, opacity: 0.5 }}
      position="fixed"
      onClick={onClick}
      {...otherProps}
    >
      <Icon fontSize={{ base: '4xl', md: '5xl' }} as={icon} />
    </AnimatedFlex>
  );
});
