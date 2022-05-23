import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
// import Section from "../components/Sections";
import NextLink from "next/link";
import Section from "../components/Section";
// import { BioSection, BioYear } from "../components/Bio";

const Home: NextPage = () => {
  return (
    <Container p={4} maxW="container.sm">
      <Section delay="0.1">
        <Box
          borderRadius={"lg"}
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          textAlign="center"
          css={{ backdropFilter: "blur(10px)" }}
          userSelect="none"
        >
          Hello, Im a front-end developer based in VietNam!
        </Box>
      </Section>

      <Section delay="0.2">
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as={"h2"} mb={4} variant="page-title" userSelect="none">
              Tuấn Xinh Trai
            </Heading>
            <Text>Making weird things with web technologies.</Text>
            <Text fontSize="14px" fontStyle={"italic"}>
              (FE developer)
            </Text>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="125px"
              display="inline-block"
              borderRadius="full"
              alt="Profile Image"
              src="/user.jpeg"
            />
          </Box>
        </Box>
      </Section>

      {/* section1 */}
      <Section delay={"0.3"}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Box>
          I am 24 years old this year but people often say that I will forever be 18 years old. I am very handsome. I have more than 1 year experience in Reactjs and making web products for the Japanese market
          I graduated with a bachelor's degree from University of Technology - Hanoi National University
          My direction in the near future is to develop skills in Fontend. I'm also happy to learn more about some other Fontend languages ​​like vuejs, next js,...
        </Box>
          
        <Box justifyContent="center" display="flex" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      {/* bio */}
      <Section delay={"0.4"}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Box display="flex">
          <Box fontWeight={600} marginRight="20px">1999</Box>
          <Box>
            Born in Vụ bản, Nam Định, Việt Nam
           </Box>
        </Box>

        <Box display="flex">
          <Box fontWeight={600} marginRight="20px">2017</Box>
          <Box>
            I am a student at University of Technology - Hanoi National University
           </Box>
        </Box>

        <Box display="flex">
          <Box fontWeight={600} marginRight="20px">2020</Box>
          <Box>
            graduated with a bachelor's degree from the University of Technology - Hanoi National University
           </Box>
        </Box>

        <Box display="flex">
          <Box fontWeight={600} marginRight="20px">2020</Box>
          <Box>
            working at BUNBU (react js developer position)
           </Box>
        </Box>


       
      </Section>

      {/* love */}
      <Section delay={"0.5"}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
          Soccer, Gaming(lol,csgo,aoe,...)
      </Section>
    </Container>
  );
};

export default Home;