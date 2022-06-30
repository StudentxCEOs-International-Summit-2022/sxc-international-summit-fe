import { Box, Image, Text, Divider } from "@chakra-ui/react";

const Partner = () => {
  return (
    <>
      <Box
        bgColor="#020234"
        w="100%"
        borderRadius="20px"
        boxShadow="inset 0px 4px 4px #5D11AB"
        pt={{ base: "35px", md: "62px" }}
      >
        <Text
          mb="45px"
          textAlign="center"
          color="white"
          fontclassName="primaryFont"
          fontWeight="700"
          fontSize={{ base: "32px", md: "70px" }}
          lineHeight={1.3}
          opacity="0.7"
        >
          Our Partner and Sponsors
        </Text>
        <Divider orientation="horizontal" />
        <Box>
          <Image src="/Logo Medpar WEB Per 4 September.png" alt="" />{" "}
        </Box>
      </Box>
    </>
  );
};

export default Partner;
