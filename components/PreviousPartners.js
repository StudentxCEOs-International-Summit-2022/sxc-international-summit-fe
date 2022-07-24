import { Box, Image, Text, Divider, Flex } from "@chakra-ui/react";

const PreviousPartner = () => {
  return (
    <Flex mt={{ base: "77px", md: "145px", lg: "213px" }} justifyContent="center"
      alignItems="center">
      <Box
        position="relative"
        className="layout"
        bgColor="#020234"
        w={{ base: "100%", md: "1200px" }}
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
          fontSize={{ base: "32px", md: "64px" }}
          lineHeight={1.3}
          opacity="0.7"
        >
          Our Previous Partner and Sponsors
        </Text>
        <Divider orientation="horizontal" />
        <Flex
          direction="row"
          align="center"
          flexWrap="wrap"
          mt={{ base: "30px", md: "75px" }}
          justifyContent="space-between"
          w={{ base: "90%", md: "80%" }}
          mx="auto"
        >
          <Box w="17%">
            <Flex justifyContent="space-between">
              <Image src="/sponsors/Prodia.png" alt="Prodia" w="55%" />
              <Image src="/sponsors/KopiSoe.png" alt="KopiSoe" w="35%" />
            </Flex>
            <Image
              src="/sponsors/LingoTalk.png"
              alt="LingoTalk"
              mt="20px"
              maxW="65%"
            />
          </Box>
          <Image src="/sponsors/Lokalate.png" alt="Lokalate" w="14.5%" />
          <Image src="/sponsors/Paragon.png" alt="Paragon" w="32%" />
          <Image src="/sponsors/Natur.png" alt="Natur" w="9.5%" />
          <Image src="/sponsors/Hangry.png" alt="Hangry" w="12%" />
        </Flex>

        <Box w="full">
          <Image mx="auto" src="/Logo Medpar WEB Per 4 September.png" alt="" />{" "}
        </Box>
        <Text
          mb="45px"
          pb="57px"
          textAlign="center"
          color="white"
          className="primaryFont"
          fontWeight="800"
          fontSize={{ base: "16px", md: "32px" }}
          lineHeight={1.3}
          opacity="0.7"
        >
          and many more!
        </Text>
      </Box>
    </Flex>
  );
};

export default PreviousPartner;
