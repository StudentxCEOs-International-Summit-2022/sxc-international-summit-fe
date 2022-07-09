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

const JumbotronCompe = () => {
  return (
    <Box position="relative" mx="auto" maxW="1144px">
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
        <Box maxWidth={{ base: "100%", md: "100%" }}>
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
        </Box>
        <Text
          className="primaryFont"
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
        <Link href="#register">
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
        </Link>

        <Link
          href="https://chakra-ui.com"
          isExternal
          color="white"
          fontSize="16px"
          mt="24px"
          mb={{ base: "250px", sm: "125px", md: "250px" }}
          p="10px 24px"
        >
          <Flex>
            <Text fontWeight={700}>Read Guidebook</Text>
            <Image src="/bookIcon.svg" alt="" w="24px" h="24px" ml="2px" />
          </Flex>
        </Link>
      </Flex>
    </Box>
  );
};

export default JumbotronCompe;
