import { Flex, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { GiNotebook } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

const AnimatedFlex = motion(Flex);

export const BookmarksButton = React.memo(() => {
  const navigate = useNavigate();

  return (
    <AnimatedFlex
      whileTap={{ scale: 1.2, opacity: 0.5 }}
      position="fixed"
      bottom={6}
      left={6}
      onClick={() => navigate('/bookmarks')}
    >
      <Icon fontSize="4xl" as={GiNotebook} />
    </AnimatedFlex>
  );
});
