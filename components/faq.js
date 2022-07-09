import {
  Box,
  Image,
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
          fontclassName="primaryFont"
          fontWeight="700"
          fontSize={{ base: "32px", md: "64px" }}
          lineHeight={1.3}
          opacity="0.7"
        >
          Frequently Asked Question
        </Text>
        <Divider orientation="horizontal" />
        <Box w="full">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem
              textColor="white"
              border="2px solid #5910A6;"
              borderRadius="8px"
              gap="10px"
              p="10px"
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
              <AccordionPanel pb={4}>
                The competition is open to the public for all bachelor students
                from the first-year-final year and including D3 & D4 students
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              textColor="white"
              border="2px solid #5910A6;"
              borderRadius="8px"
              gap="10px"
              p="10px"
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
              <AccordionPanel pb={4}>
                The group consists of 3-4 people.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              textColor="white"
              border="2px solid #5910A6;"
              borderRadius="8px"
              gap="10px"
              p="10px"
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
              <AccordionPanel pb={4}>
                Of course, it's okay to be ignored by just 1 university.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              textColor="white"
              border="2px solid #5910A6;"
              borderRadius="8px"
              gap="10px"
              p="10px"
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
              <AccordionPanel pb={4}>
                No, they will be paired in a group with other participants who
                register individually as well, so you don't bother worrying if
                for example, you want to register but only alone.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              textColor="white"
              border="2px solid #5910A6;"
              borderRadius="8px"
              gap="10px"
              p="10px"
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
              <AccordionPanel pb={4}>
                Here are certain benefits that can be obtained by participants
                such as adding experience, networking, improving communication
                skills, critical thinking, problem-solving, and teamwork. But
                also you can also get a free 3 coaching clinic, including in
                takeover from students who have often won the bcc competition
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default faq;
