import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  return (
    <Box w="100%" pt={10} pb={6} id="skills">
      <Container w="100%" maxW="container.md">
        <Heading as="h1" variant="section-title" pb={3}>
          Skills
        </Heading>
        <Heading as="h3" size="lg" font="bold" pb={6}>
          Languages & Tools I Use
        </Heading>
        <Stack align="center" justify="center" wrap="wrap" pb={6}>
          <SimpleGrid
            justify="center"
            align="center"
            columns={{ base: 2, lg: 4 }}
            spacing={8}
            w="100%"
            h="auto"
          >
            <SimpleGrid spacing={2}>
              <Box fontSize="4xl" color="orange.500">
                <FaHtml5 />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  HTML5
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box fontSize="4xl" color="blue.500">
                <FaCss3Alt />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  CSS3
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box fontSize="4xl" color="yellow.500">
                <FaJsSquare />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  JavaScript
                </Text>
              </Box>
            </SimpleGrid>
            <SimpleGrid spacing={2}>
              <Box fontSize="4xl" color="blue.400">
                <SiTypescript />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  Typescript
                </Text>
              </Box>
            </SimpleGrid>
            <SimpleGrid spacing={2}>
              <Box fontSize="4xl" color="blue.400">
                <FaReact />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  ReactJs
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box fontSize="4xl" color="white">
                {/* <RiNextjsFill /> */}
                <SiNextdotjs />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  NextJs
                </Text>
              </Box>
            </SimpleGrid>
            <SimpleGrid spacing={2}>
              <Box fontSize="4xl" color="teal.500">
                <SiTailwindcss />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  TailwindCss
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box fontSize="4xl" color="gray.700">
                <FaGithub />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  GitHub
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box fontSize="4xl" color="green.400">
                <FaNodeJs />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  NodeJs
                </Text>
              </Box>
            </SimpleGrid>
            <SimpleGrid spacing={2}>
              <Box fontSize="4xl" color="white">
                <SiExpress />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  ExpressJS
                </Text>
              </Box>
            </SimpleGrid>
            <SimpleGrid spacing={2}>
              <Box fontSize="4xl" color="red.600">
                <SiNestjs />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  NestJs
                </Text>
              </Box>
            </SimpleGrid>
            <SimpleGrid spacing={2}>
              <Box fontSize="4xl" color="green.600">
                <SiMongodb />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  MongoDb
                </Text>
              </Box>
            </SimpleGrid>
            <SimpleGrid spacing={2}>
              <Box fontSize="4xl" color="blue.300">
                <SiPostgresql />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  PostgreSQL
                </Text>
              </Box>
            </SimpleGrid>
            <SimpleGrid spacing={2}>
              <Box fontSize="4xl" color="blue.400">
                <SiMysql />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  MySQL
                </Text>
              </Box>
            </SimpleGrid>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Skills;
