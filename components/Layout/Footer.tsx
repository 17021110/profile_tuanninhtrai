import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} TuanXinhTrai All Rights Reserved.
      <Text as="div" fontSize="12px">
        (inspired by sureshmurali.github.io)
      </Text>
    </Box>
  );
};

export default Footer;