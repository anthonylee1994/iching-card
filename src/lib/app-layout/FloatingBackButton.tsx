import React from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AnimatedFlex = motion(Flex);

interface Props {
  onClick: () => void;
}

export const FloatingBackButton = React.memo(({ onClick }: Props) => {
  return (
    <AnimatedFlex
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      cursor="pointer"
      onClick={onClick}
      borderRadius="100%"
      bgColor="orange.400"
      p={{ base: 2, md: 4 }}
      position="fixed"
      bottom={6}
      boxShadow={`0 0 8px rgba(0,0,0,0.4)`}
      whileTap={{ scale: 0.9 }}
    >
      <Icon fontSize={{ base: '2xl', md: '3xl' }} as={FaArrowLeft} />
    </AnimatedFlex>
  );
});
