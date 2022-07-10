import Faq from "../../components/faq";
import Layout from "../../components/Layout";
import { Box, Text, Divider, Flex } from "@chakra-ui/react";
import { useState } from "react";
import subtheme from "../../public/subtheme-competition.png"
import trophy from "../../public/trophy.png"
import Image from "next/image";

export default function Competition() {
  const [isOnCaseCollaborator, setIsOnCaseCollaborator] = useState(false)
  return (
    <Layout hasNavbar hasFooter currentPage="competition">
      <Box id="register" maxW="1144px" mx="auto">
        <Text className="gradientTextRed primaryFont"
          fontSize="64px"
          lineHeight={1.2}
          fontWeight="800"
          textAlign="center"
        >
          {'“Sustainability Roadmaps towards Industry 4.0 & Society 5.0”'}
        </Text>
        <Text className="primaryFont"
          fontWeight={800}
          fontSize="32px"
          color="white"
          liineHeight={1.2}
          textAlign="center"
        >
          Get to know more about our competition!
        </Text>
        <Box
          mt="56px"
          position="relative"
          bgColor="#020234"
          w="100%"
          borderRadius="20px"
          border="2px solid #5D11AB"
          boxShadow="inset 0px 4px 4px #5D11AB"
        >
          <Flex w="full" justify="center" color="white" gap="20px">
            <Box my="36px"
              className="primaryFont"
              bgColor={isOnCaseCollaborator ? "transparent" : "#5D11AB"}
              border="3px solid #A170FD"
              borderRadius="30px"
              p="12px 20px"
              cursor={"pointer"}
              onClick={() => setIsOnCaseCollaborator(false)}
              fontWeight={600}
              fontSize="20px"
              lineHeight={1.5}>
              Our Subtheme
            </Box>
            <Box my="36px"
              className="primaryFont"
              bgColor={isOnCaseCollaborator ? "#5D11AB" : "transparent"}
              border="3px solid #A170FD"
              borderRadius="30px"
              p="12px 20px"
              fontWeight={600}
              fontSize="20px"
              cursor={"pointer"}
              onClick={() => setIsOnCaseCollaborator(true)}
              lineHeight={1.5}>
              Case Collaborator
            </Box>
          </Flex>
          <Divider orientation="horizontal" />
          {isOnCaseCollaborator ?
            <Box p="36px 42px">
              <Flex justify="center">
                <Image src={subtheme} alt="" />
              </Flex>
              <Box>
                <Text className="primaryFont" fontWeight="500" fontSize="24px" lineHeight={1.5} textAlign="justify">
                  Bukalapak is and Indonesian e-commerce company with a mission to create a fair economy for all. It was founded in 2010 as an online marketplace to enable small and medium enterprises to expand online and has now also grown to support smaller traditional family-owned businesses (warungs). Through its online and offline platforms, Bukalapak provides opportunities and choices for everyone to achieve a better life.
                </Text>
              </Box>
            </Box> : <Flex align="center" p="36px 42px" gap="52px">
              <Box w="35%">
                <Image src={subtheme} alt="" />
              </Box>
              <Box w="65%" className="primaryFont" fontWeight="500" fontSize="24px" lineHeight={1.5} textAlign="justify">
                <Text>
                  The StudentsxCEOs International Summit Competition is a case-based competition with two stages: proposal and pitching. Participants can anticipate engaging in extensive problem-solving for the case will put the branding issues to the forefront.
                </Text>
                <br />
                <Text>
                  Participants are challenged to engage in our subtheme, which revolves around the Triple Bottom Line of sustainability as an essential factor of business success  (People, Planet, Profit). In the 2030 agenda, the Triple Bottom Line then has been adjusted into 5P (People, Planet, Peace, Prosperity, and Partnership) for a more sustainable future.
                </Text>
              </Box>
            </Flex>}
        </Box>
        <Flex gap="20px" mt="200px">
          <Box w="75%">
            <Box>
              <Text className="primaryFont gradientTextRed" fontWeight="800" fontSize="64px" lineHeight={1.2}>
                What Are You Waiting For?
              </Text>
              <Text alignSelf="baseline" mt="12px" className="primaryFont" fontWeight={800} fontSize="32px" lineHeight={1.2}>
                {"Let's get ready to win our special prize!"}
              </Text>
            </Box>
            <Box>
              <Flex gap="20px" mt="80px" align="flex-end">
                <Box>
                  <Text className="primaryFont" textAlign="center"
                    fontWeight={800} fontSize="32px" lineHeight={1.2} color="#F8C800">
                    1<sup>st</sup> Place
                  </Text>
                  <Text className="primaryFont" textAlign="center" fontWeight={500} fontSize="24px" lineHeight={1.5}>
                    Rp6.500.000
                  </Text>
                  <Box
                    mt="12px"
                    w="200px" h="160px"
                    border="2px solid #FF6941"
                    borderBottom="none"
                    background="linear-gradient(to bottom, #000000, transparent)"
                    borderRadius="20px 20px 0px 0px" p="2px 2px 0px 2px"
                  >
                  </Box>
                </Box>

                <Box>
                  <Text className="primaryFont" textAlign="center"
                    fontWeight={800} fontSize="32px" lineHeight={1.2} color="#F8C800">
                    2<sup>nd</sup> Place
                  </Text>
                  <Text className="primaryFont" textAlign="center" fontWeight={500} fontSize="24px" lineHeight={1.5}>
                    Rp3.500.000
                  </Text>
                  <Box
                    mt="12px"
                    w="200px" h="86px"
                    border="2px solid #FF6941"
                    borderBottom="none"
                    background="linear-gradient(to bottom, #000000, transparent)"
                    borderRadius="20px 20px 0px 0px" p="2px 2px 0px 2px"
                  >
                  </Box>
                </Box>
                <Box>
                  <Text className="primaryFont" textAlign="center"
                    fontWeight={800} fontSize="32px" lineHeight={1.2} color="#F8C800">
                    3<sup>rd</sup> Place
                  </Text>
                  <Text className="primaryFont" textAlign="center" fontWeight={500} fontSize="24px" lineHeight={1.5}>
                    Rp2.000.000
                  </Text>
                  <Box
                    mt="12px"
                    w="200px" h="48px"
                    border="2px solid #FF6941"
                    borderBottom="none"
                    background="linear-gradient(to bottom, #000000, transparent)"
                    borderRadius="20px 20px 0px 0px" p="2px 2px 0px 2px"
                  >
                  </Box>
                </Box>
              </Flex>
            </Box>

          </Box>
          <Box w="25%">
            <Image src={trophy} alt="" />
          </Box>
        </Flex>
        what are you waiting for<br></br>
        dontmiss your opportunity to shine<br></br>
        rules and requirements<br></br>
      </Box>

      <Faq />
      curious about other events?<br></br>
    </Layout>
  );
}
