import {
  Box,
  Image,
  Center,
  Text,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const faq = () => {
  return (
    <Box mt={{ base: "100px", md: "145px", lg: "64px" }}>
      <Box
        position="relative"
        className="layout"
        bgColor="#020234"
        w="100%"
        borderRadius="20px"
        boxShadow="inset 0px 4px 4px #5D11AB"
        pt={{ base: "35px", md: "62px" }}
        px={{ base: "20px", md: "76px" }}
        mb="200px"
      >
        <Text
          mb="45px"
          textAlign="center"
          textColor="white"
          fontclassName="primaryFont"
          fontWeight="700"
          fontSize={{ base: "32px", md: "64px" }}
          lineHeight={1.3}
          opacity={{ base: "1", md: "0.7" }}
        >
          Frequently Asked Question
        </Text>
        <Divider orientation="horizontal" />
        <Box w="full">
          <Accordion mt="60px" mx={{ base: "0", md: "75px" }} allowMultiple>
            <AccordionItem
              textColor="white"
              border="2px solid #5910A6;"
              borderRadius="8px"
              gap="10px"
              p="10px"
              mb="20px"
            >
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="primaryFont"
                    fontWeight="700"
                    fontSize={{ base: "16px", md: "24px" }}
                  >
                    Who can enroll in this competition?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="secondaryFont">
                {
                  "The competition is open to the public for all bachelor students from the first-year-final year and including D3 & D4 students"
                }
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              textColor="white"
              border="2px solid #5910A6;"
              borderRadius="8px"
              gap="10px"
              p="10px"
              mb="20px"
            >
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="primaryFont"
                    fontWeight="700"
                    fontSize={{ base: "16px", md: "24px" }}
                  >
                    What are the group provisions?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="secondaryFont">
                The group consists of 3-4 people.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              textColor="white"
              border="2px solid #5910A6;"
              borderRadius="8px"
              gap="10px"
              p="10px"
              mb="20px"
            >
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="primaryFont"
                    fontWeight="700"
                    fontSize={{ base: "16px", md: "24px" }}
                  >
                    Does the group primarily can be from different
                    institutions/universities?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="secondaryFont">
                {"Of course, it's okay to be ignored by just 1 university."}
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              textColor="white"
              border="2px solid #5910A6;"
              borderRadius="8px"
              gap="10px"
              p="10px"
              mb="20px"
            >
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="primaryFont"
                    fontWeight="700"
                    fontSize={{ base: "16px", md: "24px" }}
                  >
                    If participants register as individuals, will they compete
                    individually?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="secondaryFont">
                {
                  "No, they will be paired in a group with other participants who register individually as well, so you don't bother worrying if for example, you want to register but only alone."
                }
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              textColor="white"
              border="2px solid #5910A6;"
              borderRadius="8px"
              gap="10px"
              p="10px"
              mb="20px"
            >
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="primaryFont"
                    fontWeight="700"
                    fontSize={{ base: "16px", md: "24px" }}
                  >
                    What are the benefits that we can receive if we participate
                    in the BCC competition?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                className="secondaryFont"
                fontWeight="500"
                fontSize={{ base: "12px", md: "16px" }}
              >
                Here are certain benefits that can be obtained by participants
                such as adding experience, networking, improving communication
                skills, critical thinking, problem-solving, and teamwork. But
                also you can also get a free 3 coaching clinic, including in
                takeover from students who have often won the bcc competition
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Center
            color="white"
            className="primaryFont"
            fontSize={{ base: "16px", md: "24px" }}
            fontWeight="700"
            lineHeight="150%"
            pt="28px"
            pb="26px"
            textAlign="center"
          >
            If you require any further information, please contact:
          </Center>

          <Center
            color="white"
            className="primaryFont"
            fontSize={{ base: "16px", md: "24px" }}
            fontWeight="500"
            lineHeight="150%"
            textAlign="center"
            pb="26px"
          >
            {" "}
            <Image
              w="36px"
              h="36px"
              src={"/dashicons_whatsapp.svg"}
              mr="17.5px"
            />
            <Text> Bima - +62 85731710570 (bimadwidr)</Text>
          </Center>

          <Center
            color="white"
            className="primaryFont"
            fontSize={{ base: "16px", md: "24px" }}
            fontWeight="500"
            lineHeight="150%"
            textAlign="center"
            pb="147px"
          >
            {" "}
            <Image
              w="36px"
              h="36px"
              src={"/dashicons_whatsapp.svg"}
              mr={{ base: "20px", md: "17.5px" }}
            />
            Fauzan - +62 85735509685 (fauuzaann)
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

export default faq;
