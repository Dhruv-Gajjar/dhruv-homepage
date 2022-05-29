import Image from "next/image";
import {
    Box,
    Container,
    Stack,
    Flex,
    Text,
    Icon,
    Grid,
    Heading,
    SimpleGrid,
} from "@chakra-ui/react";

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
                            <Box>
                                <Image
                                    src="/images/html.png"
                                    alt="html logo"
                                    width="64px"
                                    height="64px"
                                    objectFit="cover"
                                />
                            </Box>
                            <Box>
                                <Text size="lg" fontWeight="bold">
                                    HTML5
                                </Text>
                            </Box>
                        </SimpleGrid>
                        <SimpleGrid spacing={2}>
                            <Box>
                                <Image
                                    src="/images/css.png"
                                    alt="html logo"
                                    width="64px"
                                    height="64px"
                                    objectFit="cover"
                                />
                            </Box>
                            <Box>
                                <Text size="lg" fontWeight="bold">
                                    CSS3
                                </Text>
                            </Box>
                        </SimpleGrid>

                        <SimpleGrid spacing={2}>
                            <Box>
                                <Image
                                    src="/images/javascript.png"
                                    alt="html logo"
                                    width="64px"
                                    height="64px"
                                    objectFit="cover"
                                />
                            </Box>
                            <Box>
                                <Text size="lg" fontWeight="bold">
                                    JavaScript
                                </Text>
                            </Box>
                        </SimpleGrid>

                        <SimpleGrid spacing={2}>
                            <Box>
                                <Image
                                    src="/images/react.png"
                                    alt="html logo"
                                    width="64px"
                                    height="64px"
                                    objectFit="cover"
                                />
                            </Box>
                            <Box>
                                <Text size="lg" fontWeight="bold">
                                    ReactJs
                                </Text>
                            </Box>
                        </SimpleGrid>

                        <SimpleGrid spacing={2}>
                            <Box>
                                <Image
                                    src="/images/bootstrap.png"
                                    alt="html logo"
                                    width="64px"
                                    height="64px"
                                    objectFit="cover"
                                />
                            </Box>
                            <Box>
                                <Text size="lg" fontWeight="bold">
                                    Bootstrap
                                </Text>
                            </Box>
                        </SimpleGrid>

                        <SimpleGrid spacing={2}>
                            <Box>
                                <Image
                                    src="/images/tailwind.png"
                                    alt="html logo"
                                    width="64px"
                                    height="64px"
                                    objectFit="cover"
                                />
                            </Box>
                            <Box>
                                <Text size="lg" fontWeight="bold">
                                    TailwindCss
                                </Text>
                            </Box>
                        </SimpleGrid>

                        <SimpleGrid spacing={2}>
                            <Box>
                                <Image
                                    src="/images/github.png"
                                    alt="html logo"
                                    width="64px"
                                    height="64px"
                                    objectFit="cover"
                                />
                            </Box>
                            <Box>
                                <Text size="lg" fontWeight="bold">
                                    GitHub
                                </Text>
                            </Box>
                        </SimpleGrid>

                        <SimpleGrid spacing={2}>
                            <Box>
                                <Image
                                    src="/images/chakraui.png"
                                    alt="html logo"
                                    width="64px"
                                    height="64px"
                                    objectFit="cover"
                                />
                            </Box>
                            <Box>
                                <Text size="lg" fontWeight="bold">
                                    ChakraUI
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
