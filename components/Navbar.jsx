// import NextLink from "next/link";
// import {
//     Box,
//     Container,
//     Heading,
//     Link,
//     Flex,
//     Stack,
//     IconButton,
//     Menu,
//     MenuButton,
//     MenuList,
//     MenuItem,
//     useColorModeValue,
// } from "@chakra-ui/react";
// import ToggleThemeButton from "./toggle-theme-button";
// import Logo from "./Logo";
// import { HamburgerIcon } from "@chakra-ui/icons";

// const LinkItem = ({ href, path, target, children, ...props }) => {
//     const active = path === href;
//     const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
//     return (
//         <NextLink href={href} scroll={true}>
//             <Link
//                 p={2}
//                 bg={active ? "glassTeal" : undefined}
//                 color={active ? "#202023" : inactiveColor}
//                 target={target}
//                 {...props}
//             >
//                 {children}
//             </Link>
//         </NextLink>
//     );
// };

// const Navbar = (props) => {
//     const { path } = props;

//     return (
//         <Box
//             as="nav"
//             w="100%"
//             position="fixed"
//             bg={useColorModeValue("#ffffff40", "#20202380")}
//             css={{ backdropFilter: "blur(10px)" }}
//             zIndex={1}
//         >
//             <Container
//                 maxW="container.md"
//                 p={2}
//                 display="flex"
//                 align="center"
//                 justify="space-between"
//                 wrap="wrap"
//             >
//                 <Flex mr={5} align="center">
//                     <Heading as="h1" size="lg" letterSpacing="tight">
//                         <NextLink href="#home">
//                             <Logo />
//                         </NextLink>
//                     </Heading>
//                 </Flex>

//                 <Stack
//                     display={{ base: "none", md: "flex" }}
//                     direction={{ base: "column", md: "row" }}
//                     width={{ base: "none", md: "auto" }}
//                     mt={{ base: 4, md: 1 }}
//                     align="center"
//                     flexGrow={1}
//                 >
//                     <LinkItem href="/#about" path={path}>
//                         About
//                     </LinkItem>
//                     <LinkItem href="/#skills" path={path}>
//                         Skills
//                     </LinkItem>
//                     <LinkItem href="/#projects" path={path}>
//                         Projects
//                     </LinkItem>
//                     <LinkItem href="/#contact" path={path}>
//                         Contact
//                     </LinkItem>
//                 </Stack>

//                 <Box flex={1} align="right">
//                     <ToggleThemeButton />
//                     <Box display={{ base: "inline-block", md: "none" }} ml={2}>
//                         <Menu isLazy id="navbar-menu">
//                             <MenuButton
//                                 as={IconButton}
//                                 icon={<HamburgerIcon />}
//                                 variant="outline"
//                             />
//                             <MenuList>
//                                 <NextLink href="/#about">
//                                     <MenuItem as={Link}>About</MenuItem>
//                                 </NextLink>
//                                 <NextLink href="/#skills">
//                                     <MenuItem as={Link}>Skills</MenuItem>
//                                 </NextLink>
//                                 <NextLink href="/#projects">
//                                     <MenuItem as={Link}>Projects</MenuItem>
//                                 </NextLink>
//                                 <NextLink href="/#contact">
//                                     <MenuItem as={Link}>Contact</MenuItem>
//                                 </NextLink>
//                             </MenuList>
//                         </Menu>
//                     </Box>
//                 </Box>
//             </Container>
//         </Box>
//     );
// };

// export default Navbar;

import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import ToggleThemeButton from "./toggle-theme-button";

const LinkItem = ({ href, path, children, ...props }) => {
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <ScrollLink
      to={href.replace("/#", "")}
      smooth={true}
      duration={500}
      offset={-50}
      {...props}
    >
      <Link p={2} color={path === href ? "#202023" : inactiveColor} {...props}>
        {children}
      </Link>
    </ScrollLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      as="nav"
      w="100%"
      position="fixed"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
      <Container
        maxW="container.md"
        p={2}
        display="flex"
        align="center"
        justify="space-between"
        wrap="wrap"
      >
        <Flex mr={5} align="center">
          <Heading as="h1" size="lg" letterSpacing="tight">
            <ScrollLink to="home" smooth={true} duration={500} offset={-50}>
              <Logo />
            </ScrollLink>
          </Heading>
        </Flex>

        <Stack
          display={{ base: "none", md: "flex" }}
          direction={{ base: "column", md: "row" }}
          width={{ base: "none", md: "auto" }}
          mt={{ base: 4, md: 1 }}
          align="center"
          flexGrow={1}
        >
          <LinkItem href="/#about" path={path}>
            About
          </LinkItem>
          <LinkItem href="/#skills" path={path}>
            Skills
          </LinkItem>
          <LinkItem href="/#projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/#contact" path={path}>
            Contact
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ToggleThemeButton />
          <Box display={{ base: "inline-block", md: "none" }} ml={2}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  <MenuItem as={Link}>About</MenuItem>
                </ScrollLink>
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  <MenuItem as={Link}>Skills</MenuItem>
                </ScrollLink>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  <MenuItem as={Link}>Projects</MenuItem>
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  <MenuItem as={Link}>Contact</MenuItem>
                </ScrollLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
