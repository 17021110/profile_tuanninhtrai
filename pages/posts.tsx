import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
} from "@chakra-ui/react";
import type { NextPage } from "next";

const Posts: NextPage = () => {
  return (
    <Container p={4} maxW="container.sm" >
      <Box height="600px" display="flex" alignItems="center" justifyContent="center" >The function is not developed or under maintenance</Box>
    </Container>
  );
};

export default Posts;