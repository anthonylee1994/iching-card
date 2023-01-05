import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { GiEgyptianBird } from "react-icons/gi";
import { motion } from "framer-motion";

const AnimatedFlex = motion(Flex);

export const EmptyBookmark = React.memo(() => {
  return (
    <AnimatedFlex
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      flexDirection="column"
      alignItems="center"
    >
      <Icon
        color="gray.400"
        fontSize={{ base: "6xl", md: "8xl" }}
        as={GiEgyptianBird}
        mb={4}
      />

      <Text color="gray.400">暫無易卜結果</Text>
    </AnimatedFlex>
  );
});
