import Layout from "../components/layout/article";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Layout>
      <Container>
        <VStack w="100%" h="80vh" align="center" justify="center">
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
            a creative fron-end developer
          </Box>
        </VStack>
      </Container>
    </Layout>
  );
};

export default Home;
