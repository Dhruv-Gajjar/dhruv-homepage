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
        <Box w="100%" id="projects">
            <Container>
                <Heading pb={6} as="h2" variant="section-title">
                    Projects
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 1 }} spacing={8}>
                    <GridItem>
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
                        <Text pb={4} size="lg" fontWeight="bold">
                            Portfolio Website
                        </Text>

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

                    <GridItem>
                        <a
                            href="https://github.com/Dhruv-Gajjar/dhruv-homepage"
                            target="_blank"
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

                        <Button
                            align="center"
                            leftIcon={<BsFillEyeFill />}
                            colorScheme="teal"
                        >
                            Live Demo
                        </Button>
                    </GridItem>

                    <GridItem>
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
                        <Text pb={4} size="lg" fontWeight="bold">
                            Design Website
                        </Text>

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

                    <GridItem>
                        <a
                            href="https://github.com/Dhruv-Gajjar/design-website"
                            target="_blank"
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
            </Container>
        </Box>
    );
};

export default Projects;
