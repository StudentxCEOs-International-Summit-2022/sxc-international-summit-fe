import {
    Box,
    Text,
    Flex,
    Button,
    Link,
    Grid,
    GridItem,
    Image,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useWindowSize } from "../hooks/useWindowSize";

const JumbotronPreEvent = () => {
    const { width } = useWindowSize();
    const isMobile = width < 768;
    const isTablet = width < 1024;
    return (
        <Box position="relative" mx="auto" maxW="1144px">
            <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="left"
                w="100%"
                h="100%"
            >
                <Flex
                    mt={{ base: "150px", md: "344px" }}
                    justifyContent={{ base: "center", lg: "left" }}
                >
                    <Text
                        className="primaryFont"
                        fontSize={{ base: "16px", md: "25px", lg: "32px" }}
                        fontWeight="800"
                        color="white"
                        lineHeight="120%"
                        textAlign="center"
                        textShadow="0px 4px 16px rgba(0, 0, 0, 0.4);"
                    >
                        SxC International Summit
                    </Text>
                </Flex>
                <Box maxWidth={{ base: "100%", md: "100%" }}>
                    <Text
                        className="gradientText"
                        fontSize={{ base: "32px", md: "48px", lg: "64px" }}
                        fontWeight="700"
                        color="white"
                        lineHeight="120%"
                        textAlign={{ base: "center", lg: "left" }}
                        pt="24px"
                        pb="24px"
                    >
                        Pre Event
                    </Text>
                </Box>
                <Text
                    className="primaryFont"
                    h="100%"
                    fontSize={{ base: "12px", md: "18px", lg: "24px" }}
                    fontWeight="500"
                    color="white"
                    lineHeight="150%"
                    textAlign={{ base: "center", md: "left", lg: "left" }}
                    mx={{ base: "14px", md: "0px" }}
                >
                    A Talk Show session with the professional national speaker. After attending this event, participants are expected to know more about the skill requirement in the 21st century, how to improve productivity by learning basic office software and many more.

                </Text>
            </Flex>
            <Flex flexDirection={{ base: "column", lg: "row" }}>
                <NextLink href="#register" passHref>
                    <Link>
                        <Button
                            w={{ base: "100%", md: "auto" }}
                            className="primaryFont"
                            bgColor="#5D11AB"
                            color="white"
                            variant="solid"
                            mt="24px"
                            p={{ base: "10px 24px" }}
                            borderRadius="4px"
                            fontSize={{ base: "16px", md: "20px", lg: "16px" }}
                            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.25)"
                            _hover={{ bgColor: "#5D11AB" }}
                            lineHeight="150%"
                        >
                            Register Now
                        </Button>
                    </Link>
                </NextLink>
            </Flex>
        </Box>
    );
};

export default JumbotronPreEvent;