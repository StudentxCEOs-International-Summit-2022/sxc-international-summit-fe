import {
  Box,
  Text,
  Flex,
  useMediaQuery,
  Container,
  Button,
} from "@chakra-ui/react";

const Jumbotron = () => {
  return (
    <Box 
    position="relative"
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="100%"
      >
        <Flex mt={{ base: "150px", md: "200px" }}>
          <Text
            className="primaryFont"
            fontSize={{ base: "14px", md: "25px", lg: "36px" }}
            fontWeight="700"
            color="white"
            lineHeight="120%"
            textAlign="center"
          >
            StudentsxCEOs International Summit
          </Text>
          <Text
            className="primaryFont"
            pl={{ base: "1", md: "2" }}
            fontSize={{ base: "14px", md: "25px", lg: "36px" }}
            fontWeight="700"
            color="#F8C800"
            lineHeight="120%"
            textAlign="center"
          >
            2022
          </Text>
        </Flex>
        <Container maxWidth={{ base: "100%", md: "65%" }}>
          <Text
            className="primaryFont"
            fontSize={{ base: "32px", md: "48px", lg: "64px" }}
            fontWeight="700"
            color="white"
            lineHeight="120%"
            textAlign="center"
            pt="24px"
            pb="24px"
          >
            Exceed Your Limit For A New Agile Era
          </Text>
        </Container>
        <Text
          className="primaryFont"
          fontSize={{ base: "12px", md: "18px", lg: "24px" }}
          fontWeight="500"
          color="white"
          lineHeight="150%"
          textAlign="center"
          mx={{ base: "14px", md: "0px" }}
        >
          Prepare yourself for a brand new era with SxC International Summit, a
          Grand Event organized by StudentsxCEOs Jakarta consisting of a
          sequence of enriching and groundbreaking events.
        </Text>
        <Button
          w={{ base: "100%", md: "auto" }}
          bgColor="#5D11AB"
          color="white"
          variant="solid"
          mt="24px"
          mb={{ base: "250px", sm: "125px", md: "250px" }}
          p="12px 30px"
          borderRadius="5px"
          fontSize={{ base: "16px", md: "20px", lg: "24px" }}
          boxShadow="0px 4px 20px rgba(0, 0, 0, 0.25)"
          _hover={{ bgColor: "#5D11AB" }}
          lineHeight="150%"
        >
          Explore our events
        </Button>
      </Flex>
    </Box>
  );
};

export default Jumbotron;
