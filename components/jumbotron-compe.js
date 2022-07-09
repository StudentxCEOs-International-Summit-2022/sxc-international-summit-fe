import {
  Box,
  Text,
  Flex,
  useMediaQuery,
  Container,
  Button,
  Link,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Jumbotron = () => {
  return (
    <Box position="relative" px={{ base: "5%", md: "10%" }}>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="left"
        w="100%"
        h="100%"
      >
        <Flex mt={{ base: "150px", md: "344px" }}>
          <Text
            className="primaryFont"
            fontSize={{ base: "14px", md: "25px", lg: "32px" }}
            fontWeight="800"
            color="white"
            lineHeight="120%"
            textAlign="center"
            textShadow="0px 4px 16px rgba(0, 0, 0, 0.4);"
          >
            SxC International Summit
          </Text>
        </Flex>
        <Container maxWidth={{ base: "100%", md: "100%" }}>
          <Text
            className="gradientText"
            fontSize={{ base: "32px", md: "48px", lg: "64px" }}
            fontWeight="700"
            color="white"
            lineHeight="120%"
            textAlign="left"
            pt="24px"
            pb="24px"
          >
            Business Case Competition
          </Text>
        </Container>
        <Text
          className="primaryFont"
          w="124%"
          h="100%"
          fontSize={{ base: "12px", md: "18px", lg: "24px" }}
          fontWeight="500"
          color="white"
          lineHeight="150%"
          textAlign="left"
          mx={{ base: "14px", md: "0px" }}
        >
          Challenge and embrace your critical thinking, problem-solving,
          teamwork, and collaboration skills by joining our exclusive case-based
          competition.
        </Text>
      </Flex>
      <Flex>
        <Button
          w={{ base: "100%", md: "auto" }}
          bgColor="#5D11AB"
          color="white"
          variant="solid"
          mt="24px"
          mb={{ base: "250px", sm: "125px", md: "250px" }}
          p="10px 24px"
          borderRadius="4px"
          fontSize={{ base: "16px", md: "20px", lg: "16px" }}
          boxShadow="0px 4px 20px rgba(0, 0, 0, 0.25)"
          _hover={{ bgColor: "#5D11AB" }}
          lineHeight="150%"
        >
          Register Now
        </Button>
        <Link
          href="https://chakra-ui.com"
          isExternal
          textColor="white"
          fontSize="16px"
          mt="24px"
          mb={{ base: "250px", sm: "125px", md: "250px" }}
          p="10px 24px"
        >
          Read Guidebook <ExternalLinkIcon mx="2px" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Jumbotron;
