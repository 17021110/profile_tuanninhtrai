import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

import Logo from "./Logo";
import Button from "./Button";

const LinkItem = ({ href, path, target, children, ...props }: any) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props: any) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        textAlign="center"
        justifyItems="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
         

          <LinkItem
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100011789272335"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <BsFacebook />
          </LinkItem>

          <LinkItem
            target="_blank"
            href="https://www.linkedin.com/in/tu%E1%BA%A5n-tr%E1%BA%A7n-v%C4%83n-63184721b"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <BsLinkedin />
          </LinkItem>

          <LinkItem
            href="mailto:trantuan05011999@gmail.com"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <HiOutlineMail />
          </LinkItem>
         
        </Stack>

        <Box flex={1} textAlign="right">
          <Button />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>

                <MenuItem
                  as={Link}
                  href="https://www.facebook.com/profile.php?id=100011789272335"
                >
                  My Facebook{" "}
                </MenuItem>
                
                <MenuItem
                  as={Link}
                  href="https://www.linkedin.com/in/tu%E1%BA%A5n-tr%E1%BA%A7n-v%C4%83n-63184721b"
                >
                  My Linkedin{" "}
                </MenuItem>

                <MenuItem as={Link} href="mailto:trantuan05011999@gmail.com">
                  Mail me
                </MenuItem>

                
               
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;