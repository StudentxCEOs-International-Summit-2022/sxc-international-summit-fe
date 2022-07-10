import { Box, Text, Button, Flex, Icon } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
const Exploreourevent = () => {
  return (
    <Box
      px={{ base: "12px", md: "auto" }}
      mt={{ base: "110px", md: "171px", lg: "232px" }}
      position="relative"
      borderRadius="8px"
      backgroundSize="cover"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      pb={{ base: "30px", md: "70px" }}
      pt="90px"
      className="primaryFont"
      align="center"
      justify="center"
      backgroundImage="/Frame 13.svg"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
    >
      <Text
        mt={{ base: "60%", md: "auto" }}
        pb="16px"
        align="center"
        justify="center"
        w="100%"
        fontSize={{ base: "32px", md: "40px", lg: "48px" }}
        lineHeight={1.2}
        fontWeight={800}
        className="primaryFont"
        Color="white"
      >
        Curious about other events?
      </Text>
      <Text
        ml={{ base: "5px", md: "10px" }}
        fontWeight={500}
        fontSize={{ base: "16px", md: "16px" }}
        lineHeight={1.5}
        align="center"
        justify="center"
        className="primaryFont"
      >
        Let’s go back and explore our events!
      </Text>
      <Button
        w={{ base: "100%", md: "auto" }}
        bgColor="#5D11AB"
        color="white"
        variant="solid"
        mt="24px"
        mb={{ base: "250px", sm: "125px", md: "250px" }}
        p="24px 30px"
        borderRadius="5px"
        fontSize={{ base: "16px", lg: "16px" }}
        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.25)"
        _hover={{ bgColor: "#5D11AB" }}
        lineHeight="150%"
      >
        {" "}
        <Text>Explore our events</Text>
      </Button>
    </Box>
  );
};
export default Exploreourevent;
