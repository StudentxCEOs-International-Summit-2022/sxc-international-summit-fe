import { Box, Image, Text, Divider } from "@chakra-ui/react";

const Partner = () => {
  return (
    <Box mt={{ base: "77px", md: "145px", lg: "213px" }}>
      <Box
        position="relative"
        className="layout"
        bgColor="#020234"
        w="100%"
        borderRadius="20px"
        boxShadow="inset 0px 4px 4px #5D11AB"
        pt={{ base: "35px", md: "62px" }}
        mb="200px"
      >
        <Text
          mb="45px"
          textAlign="center"
          color="white"
          className="primaryFont"
          fontWeight="700"
          fontSize={{ base: "32px", md: "70px" }}
          lineHeight={1.3}
          opacity="0.7"
        >
          Our Partner and Sponsors
        </Text>
        <Divider orientation="horizontal" />
        <Box w="full">
          <Image mx="auto" src="/Logo Medpar WEB Per 4 September.png" alt="" />{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default Partner;
