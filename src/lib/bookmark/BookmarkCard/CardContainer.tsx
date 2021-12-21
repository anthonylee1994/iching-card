import React from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const AnimatedFlex = motion(Flex);

export const CardContainer = React.forwardRef<HTMLDivElement, FlexProps>(
  (props, ref) => {
    return (
      <AnimatedFlex
        ref={ref}
        width="full"
        alignItems="center"
        flexDirection="column"
        bgColor="gray.600"
        borderRadius="md"
        mb={4}
        pt={8}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        {...props}
      />
    );
  },
);
