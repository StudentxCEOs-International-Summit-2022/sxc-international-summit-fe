import { Box, Text, Button, Link, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
const Exploreourevent = () => {
  return (
    <Box
      px={{ base: "12px", md: "auto" }}
      my={{ base: "110px", md: "171px", lg: "232px" }}
      position="relative"
      borderRadius="8px"
      backgroundSize="cover"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      pb={{ base: "30px", md: "70px" }}
      pt="90px"
      className="primaryFont"
      align="center"
      justify="center"
      backgroundImage="/otherEvent.png"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
    >
      <Text
        pb="16px"
        align="center"
        justify="center"
        w="100%"
        fontSize={{ base: "32px", md: "40px", lg: "48px" }}
        lineHeight={1.2}
        fontWeight={800}
        className="primaryFont" color="#FFFFFF"
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
        color="#FFFFFF"
      >
        {"Let's go back and explore our events!"}
      </Text>
      <NextLink href="/#ourevents" passHref>
        <Link>
          <Button
            w={{ base: "100%", md: "auto" }}
            bgColor="#5D11AB"
            color="white"
            variant="solid"
            mt="24px"
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
        </Link>
      </NextLink>

    </Box>
  );
};
export default Exploreourevent;
