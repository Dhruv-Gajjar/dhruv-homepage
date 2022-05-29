import Head from "next/head";
import Navbar from "../Navbar";
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="description" content="Dhruv's homepage" />
                <meta name="author" content="Dhruv Gajjar" />
                <title>Dhruv Gajjar - Homepage</title>
            </Head>

            <Navbar />

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    );
};

export default Main;
