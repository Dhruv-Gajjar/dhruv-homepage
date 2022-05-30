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
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

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
                            <Text pb={4} fontWeight="bold" fontSize="xl">
                                Contact Me With
                            </Text>

                            <Flex align="center" justify="start">
                                <Box>
                                    <a
                                        href="https://github.com/Dhruv-Gajjar"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiFillGithub size={25} />
                                    </a>
                                </Box>

                                <Box ml={6}>
                                    <a
                                        href="https://twitter.com/DhruvGajjar_7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiFillTwitterCircle size={25} />
                                    </a>
                                </Box>
                            </Flex>
                        </GridItem>
                    </SimpleGrid>
                </GridItem>

                {/*right*/}
                <GridItem w="100%" h="full" colSpan={3}>
                    <Flex align="left" justify="center" direction="column">
                        <form name="contact" method="POST" data-netlify="true">
                            <Flex w="100%" align="left" justify="space-between">
                                <Box pb={4} pr={4}>
                                    <lable>
                                        Name
                                        <Input type="text" name="name" mt={3} />
                                    </lable>
                                </Box>

                                <Box pb={4}>
                                    <lable>
                                        Email
                                        <Input
                                            type="email"
                                            name="email"
                                            mt={3}
                                        />
                                    </lable>
                                </Box>
                            </Flex>
                            <Box pb={4}>
                                <lable>
                                    Message
                                    <Textarea name="message" mt={3} />
                                </lable>
                            </Box>

                            <Box align="left">
                                <a>
                                    <Button
                                        align="center"
                                        type="submit"
                                        colorScheme="teal"
                                    >
                                        Submit{" "}
                                    </Button>
                                </a>
                            </Box>
                        </form>
                    </Flex>
                </GridItem>
            </SimpleGrid>
        </Box>
    );
};

export default Contact;
