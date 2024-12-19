import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Layout from "../components/layout/article";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import Skills from "./skills";

const Home = () => {
  return (
    <Layout>
      <VStack
        w="100%"
        h="80vh"
        pt={10}
        align="center"
        justify="center"
        id="home"
      >
        <Box>
          <Heading as="h1" size={{ base: "3xl", md: "4xl" }}>
            Hi I&apos;m
          </Heading>
        </Box>

        <Box>
          <Heading
            mb={6}
            as="h1"
            color={useColorModeValue("blue.700", "blue.500")}
            size={{ base: "3xl", md: "4xl" }}
          >
            Dhruv Gajjar
          </Heading>
        </Box>

        <Box
          w="100%"
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
          textTransform="capitalize"
        >
          a creative full-stack developer
        </Box>

        <Box pt={4} align="left">
          <Text fontSize="lg">
            I&apos;m a full-stack developer focused on building exceptional
            digital experiences. Building web-apps with a responsive design
            layout. Currently working on progressive full-stack solutions.
          </Text>
        </Box>

        <Box pt={5} w="full" align="left">
          <NextLink href="#contact">
            <Button
              scale={1.2}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              size="md"
            >
              Contact Me
            </Button>
          </NextLink>
        </Box>
      </VStack>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
