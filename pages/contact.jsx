import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    GridItem,
    Text,
    Image,
    Input,
    Textarea,
    Button,
    Flex,
} from "@chakra-ui/react";
import {
    AiFillGithub,
    AiTwotoneMail,
    AiFillTwitterCircle,
} from "react-icons/ai";

const Contact = () => {
    return (
        <Box w="100%" h="100%" pb={6} id="contact">
            <Heading pb={6} as="h2" variant="section-title">
                Contact Me
            </Heading>

            <SimpleGrid
                w="full"
                h="full"
                spacing={8}
                columns={{ base: 1, md: 6 }}
            >
                {/*left*/}
                <GridItem colSpan={3}>
                    <SimpleGrid w="full" h="full">
                        <GridItem pb={6}>
                            <Image
                                src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
                                alt="laptop image"
                                objectFit="cover"
                                borderRadius="xl"
                            />
                        </GridItem>

                        <GridItem>
                            <Text pb={4} fontWeight="bold" fontSize="2xl">
                                Contact Me With
                            </Text>

                            <Flex align="center" justify="space-between">
                                <a
                                    href="https://github.com/Dhruv-Gajjar"
                                    target="_blank"
                                >
                                    <AiFillGithub size={20} />
                                </a>
                                <a>
                                    <AiTwotoneMail size={20} />
                                </a>
                                <a
                                    href="https://twitter.com/DhruvGajjar_7"
                                    target="_blank"
                                >
                                    <AiFillTwitterCircle size={20} />
                                </a>
                            </Flex>
                        </GridItem>
                    </SimpleGrid>
                </GridItem>

                {/*right*/}
                <GridItem w="full" h="full" colSpan={3}>
                    <Flex align="center" justify="center" direction="column">
                        <Box pb={4}>
                            <Input placeholder="Enter your email..." />
                        </Box>
                        <Box pb={4}>
                            <Textarea placeholder="message me..." />
                        </Box>

                        <Box align="left">
                            <a>
                                <Button
                                    type="submit"
                                    size="sm"
                                    colorScheme="teal"
                                >
                                    Submit{" "}
                                </Button>
                            </a>
                        </Box>
                    </Flex>
                </GridItem>
            </SimpleGrid>
        </Box>
    );
};

export default Contact;
