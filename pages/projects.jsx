import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    GridItem,
    Image,
    Flex,
    Button,
    Stack,
    Text,
} from "@chakra-ui/react";
import { BiCodeAlt } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";

const Projects = () => {
    return (
        <Box w="100%" pt={10} pb={6} id="projects">
            <Heading pb={6} as="h2" variant="section-title">
                Projects
            </Heading>

            <SimpleGrid pb={6} columns={{ base: 1, md: 1 }} spacing={8}>
                <GridItem>
                    <Text pb={4} fontSize="xl" fontWeight="bold">
                        Portfolio Website
                    </Text>

                    <Box boxShadow="lg">
                        <Image
                            src="/images/portfolio-website.png"
                            alt="Dhruv homepage"
                            objectFit="cover"
                            borderRadius="xl"
                        />
                    </Box>
                </GridItem>

                <GridItem>
                    <Flex>
                        <Box>
                            <Button
                                colorScheme="teal"
                                variant="outline"
                                size="sm"
                                cursor="default"
                                borderRadius="lg"
                                mr={6}
                            >
                                NextJs
                            </Button>
                        </Box>

                        <Box>
                            <Button
                                colorScheme="teal"
                                variant="outline"
                                size="sm"
                                cursor="default"
                                borderRadius="lg"
                            >
                                ChakraUI
                            </Button>
                        </Box>
                    </Flex>
                </GridItem>

                <GridItem pb={6}>
                    <a
                        href="https://github.com/Dhruv-Gajjar/dhruv-homepage"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            align="center"
                            leftIcon={<BiCodeAlt />}
                            variant="outline"
                            colorScheme="teal"
                            mr={8}
                        >
                            View Scource
                        </Button>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <Button
                            align="center"
                            leftIcon={<BsFillEyeFill />}
                            colorScheme="teal"
                        >
                            Live Demo
                        </Button>
                    </a>
                </GridItem>

                <GridItem>
                    <Text pb={4} fontSize="xl" fontWeight="bold">
                        Design Website
                    </Text>

                    <Box boxShadow="lg">
                        <Image
                            src="/images/design-website.png"
                            alt="Dhruv homepage"
                            objectFit="cover"
                            borderRadius="xl"
                        />
                    </Box>
                </GridItem>

                <GridItem>
                    <Flex>
                        <Box>
                            <Button
                                colorScheme="teal"
                                variant="outline"
                                size="sm"
                                cursor="default"
                                borderRadius="lg"
                                mr={6}
                            >
                                NextJs
                            </Button>
                        </Box>

                        <Box>
                            <Button
                                colorScheme="teal"
                                variant="outline"
                                size="sm"
                                cursor="default"
                                borderRadius="lg"
                            >
                                TailwindCss
                            </Button>
                        </Box>
                    </Flex>
                </GridItem>

                <GridItem pb={6}>
                    <a
                        href="https://github.com/Dhruv-Gajjar/design-website"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            align="center"
                            leftIcon={<BiCodeAlt />}
                            variant="outline"
                            colorScheme="teal"
                            mr={8}
                        >
                            View Scource
                        </Button>
                    </a>

                    <a
                        href="https://design-one.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            align="center"
                            leftIcon={<BsFillEyeFill />}
                            colorScheme="teal"
                        >
                            Live Demo
                        </Button>
                    </a>
                </GridItem>
            </SimpleGrid>
        </Box>
    );
};

export default Projects;
