import Faq from "../../components/faq";
import Layout from "../../components/Layout";
import { Box, Text, Divider, Flex, Grid, GridItem, Circle } from "@chakra-ui/react";
import { useState } from "react";
import subtheme from "../../public/subtheme-competition.png"
import trophy from "../../public/trophy.png"
import Image from "next/image";
import styles from "../../styles/ourevents.module.scss";
import { useWindowSize } from "../../hooks/useWindowSize";
import timelineCompetition from "../../public/timeline-competition.svg";
import earlyBird from "../../public/competition/earlyBird.svg";
import pencil from "../../public/competition/pencil.svg";
import group from "../../public/competition/group.svg";
import book from "../../public/competition/book.svg";
import school from "../../public/competition/school.svg";
import bag from "../../public/competition/bag.svg";
import speaker from "../../public/competition/speaker.svg";
import Exploreourevent from "../../components/Exploreourevent";

export default function Competition() {
  const [isOnCaseCollaborator, setIsOnCaseCollaborator] = useState(false)
  const { width } = useWindowSize()
  const isMobile = width < 768
  const isTablet = width < 1024

  const timelines = [
    {
      heading: "Early Bird Registration",
      date: "11 Juli 2022 - 24 July 2022",
      btn_icon: earlyBird,
      isActive: true
    },
    {
      heading: "Normal Registration",
      date: "25 July 2022 - 7 August",
      btn_icon: pencil,
      isActive: false
    },
    {
      heading: "IG Takeover",
      date: "23 July 2022",
      btn_icon: group,
      isActive: false
    },
    {
      heading: "Coaching Clinic 1",
      date: "3 September 2022",
      btn_icon: book,
      isActive: false
    },
    {
      heading: "Coaching Clinic 2",
      date: "10 September 2022",
      btn_icon: school,
      isActive: false
    },
    {
      heading: "Coaching Clinic 3",
      additional_text: "(For Top 10 Winners)",
      date: "11 October 2022",
      btn_icon: bag,
      isActive: false
    },
    {
      heading: "Presentation Day",
      date: "29 October 2022",
      btn_icon: speaker,
      isActive: false
    },
  ];




  return (
    <Layout hasNavbar hasFooter currentPage="competition">
      <Box maxW="1144px" mx="auto" >
        <Text className="gradientTextRed primaryFont"
          fontSize={{ base: "32px", md: "48px", lg: "64px" }}
          lineHeight={1.2}
          fontWeight="800"
          textAlign="center"
        >
          {'“Sustainability Roadmaps towards Industry 4.0 & Society 5.0”'}
        </Text>
        <Text className="primaryFont"
          mt={{ base: "16px", md: "8px", lg: "0px" }}
          fontWeight={800}
          fontSize={{ base: "20px", md: "26px", lg: "32px" }}
          color="white"
          lineHeight={1.2}
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
          <Flex w="full" justify={{ base: "auto", md: "center" }} color="white" gap="20px" overflowX="auto">
            <Box my="36px"
              ml="0"
              className="primaryFont"
              bgColor={isOnCaseCollaborator ? "transparent" : "#5D11AB"}
              border="3px solid #A170FD"
              borderRadius="30px"
              p="12px 20px"
              cursor={"pointer"}
              onClick={() => setIsOnCaseCollaborator(false)}
              fontWeight={600}
              fontSize="20px"
              lineHeight={1.5} minW="fit-content">
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
              lineHeight={1.5} minW="fit-content">
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
                <Text mt="52px" className="primaryFont" fontWeight="500" fontSize={{ base: "16px", md: "24px" }} lineHeight={1.5} textAlign={{ base: "center", md: "justify" }}>
                  Bukalapak is and Indonesian e-commerce company with a mission to create a fair economy for all. It was founded in 2010 as an online marketplace to enable small and medium enterprises to expand online and has now also grown to support smaller traditional family-owned businesses (warungs). Through its online and offline platforms, Bukalapak provides opportunities and choices for everyone to achieve a better life.
                </Text>
              </Box>
            </Box> : <Flex flexDirection={{ base: "column", md: "row" }} align="center" p="36px 42px" gap="52px">
              <Box w={{ base: "100%", md: "35%" }}>
                <Image src={subtheme} alt="" />
              </Box>
              <Box w={{ base: "100%", md: "65%" }} className="primaryFont" fontWeight="500" fontSize={{ base: "16px", md: "24px" }} lineHeight={1.5} textAlign={{ base: "center", md: "justify" }}>
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
        <Flex gap="20px" mt={{ base: "100px", sm: "150px", lg: "200px" }} align="center" flexDirection={{ base: "column", sm: "row" }}>
          <Box w={{ base: "100%", sm: "75%" }}>
            <Box>
              <Text textAlign={{ base: "center", sm: "left" }} className="primaryFont gradientTextRed" fontWeight="800" fontSize={{ base: "32px", sm: "48px", lg: "64px" }} lineHeight={1.2}>
                What Are You Waiting For?
              </Text>
              <Text textAlign={{ base: "center", sm: "left" }} alignSelf="baseline" mt="12px" className="primaryFont" fontWeight={800} fontSize={{ base: "20px", sm: "26px", lg: "32px" }}
                mx={{ base: "24px", sm: "0" }} lineHeight={1.2}>
                {"Let's get ready to win our special prize!"}
              </Text>
            </Box>

            <Box w="60%" mx="20%" mt="32px" display={{ base: "block", sm: "none" }}>
              <Image src={trophy} alt="" />
            </Box>

            <Flex
              transform={{ base: "translateX(-10%)", sm: "translateX(0px)" }}
              gap={{ base: "36px", sm: "20px" }}
              mt={{ base: "32px", sm: "80px" }}
              flexDirection={{ base: "column", sm: "row" }}
              align={{ base: "flex-start", sm: "flex-end" }}>
              <Box>
                <Flex
                  align="center"
                  flexDirection={{ base: "row-reverse", sm: "column" }}>
                  <Box ml={{ base: "16px", sm: "0" }}>
                    <Text
                      className="primaryFont"
                      textAlign="center"
                      fontWeight={800}
                      fontSize={{ base: "32px", sm: "24px", md: "32px" }}
                      lineHeight={1.2}
                      color="#F8C800">
                      1<sup>st</sup> Place
                    </Text>
                    <Text
                      className="primaryFont"
                      textAlign="center"
                      fontWeight={500}
                      fontSize={{ base: "24px", sm: "16px", md: "24px" }}
                      lineHeight={1.5}>
                      Rp6.500.000
                    </Text>
                  </Box>
                  <Box
                    mt="12px"
                    w={{ base: "172px", sm: "150px", md: "200px" }}
                    h={{ base: "128px", sm: "160px", md: "160px" }}
                    border={isMobile ? "2px solid #F8C800" : "2px solid #FF6941"}
                    borderBottom={{ base: "auto", sm: "none" }}
                    background="linear-gradient(to bottom, #000000, transparent)"
                    borderRadius={{ base: "0px 20px 20px 0px", sm: "20px 20px 0px 0px" }} p="2px 2px 0px 2px"
                  >
                  </Box>
                </Flex>
              </Box>

              <Box>
                <Flex
                  align="center"
                  flexDirection={{ base: "row-reverse", sm: "column" }}>
                  <Box ml={{ base: "16px", sm: "0" }}>
                    <Text
                      className="primaryFont"
                      textAlign="center"
                      fontWeight={800}
                      fontSize={{ base: "32px", sm: "24px", md: "32px" }}
                      lineHeight={1.2}
                      color="#F8C800">
                      2<sup>nd</sup> Place
                    </Text>
                    <Text
                      className="primaryFont"
                      textAlign="center"
                      fontWeight={500}
                      fontSize={{ base: "24px", sm: "16px", md: "24px" }}
                      lineHeight={1.5}>
                      Rp3.500.000
                    </Text>
                  </Box>
                  <Box
                    mt="12px"
                    w={{ base: "126px", sm: "150px", md: "200px" }}
                    h={{ base: "128px", sm: "100px" }}
                    border={isMobile ? "2px solid #F8C800" : "2px solid #FF6941"}
                    borderBottom={{ base: "auto", sm: "none" }}
                    background="linear-gradient(to bottom, #000000, transparent)"
                    borderRadius={{ base: "0px 20px 20px 0px", sm: "20px 20px 0px 0px" }} p="2px 2px 0px 2px"
                  >
                  </Box>
                </Flex>
              </Box>


              <Box>
                <Flex
                  align="center"
                  flexDirection={{ base: "row-reverse", sm: "column" }}>
                  <Box ml={{ base: "16px", sm: "0" }}>
                    <Text
                      className="primaryFont"
                      textAlign="center"
                      fontWeight={800}
                      fontSize={{ base: "32px", sm: "24px", md: "32px" }}
                      lineHeight={1.2}
                      color="#F8C800">
                      3<sup>rd</sup> Place
                    </Text>
                    <Text
                      className="primaryFont"
                      textAlign="center"
                      fontWeight={500}
                      fontSize={{ base: "24px", sm: "16px", md: "24px" }}
                      lineHeight={1.5}>
                      Rp2.000.000
                    </Text>
                  </Box>
                  <Box
                    mt="12px"
                    w={{ base: "80px", sm: "150px", md: "200px" }}
                    h={{ base: "128px", sm: "48px" }}
                    border={isMobile ? "2px solid #F8C800" : "2px solid #FF6941"}
                    borderBottom={{ base: "auto", sm: "none" }}
                    background="linear-gradient(to bottom, #000000, transparent)"
                    borderRadius={{ base: "0px 20px 20px 0px", sm: "20px 20px 0px 0px" }} p="2px 2px 0px 2px"
                  >
                  </Box>
                </Flex>
              </Box>
            </Flex>

          </Box>
          <Box w="25%" display={{ base: "none", lg: "block" }}>
            <Image src={trophy} alt="" />
          </Box>
        </Flex>
        <Text className="primaryFont" fontWeight={800} fontSize="32px" lineHeight={1.2} textAlign="center" mt="200px" mb="64px">{"Don't Miss Your Opportunity to Shine!"}</Text>
        <Box overflowX="auto">
          <Grid
            position="relative"
            minW='1630px'
            justify='space-between'
            templateColumns='repeat(7, 1fr)'
            justifyItems='center'
            alignItems='baseline'>
            {timelines.map((el, idx) => (
              <GridItem
                mt="16px"
                key={idx}>
                <Flex w='fit-content' align='center' flexDirection='column'>
                  <Circle
                    p="15px"
                    className={el.isActive ? styles.activebutton : styles.inactivebutton}>
                    <Image
                      src={el.btn_icon}
                      alt=""
                      className={el.isActive ? styles.activebuttonimg : styles.inactivebuttonimg} />
                  </Circle>
                  <Text mt={"70px"} className="primaryFont" textAlign="center" fontSize={['16px', '16px', '20px', '24px']} color='#ffffff'>{el.heading}</Text>
                  {el.additional_text && <Text className="primaryFont" textAlign="center" fontSize={['16px', '16px', '20px', '24px']} color='#ffffff'>{el.additional_text}</Text>}
                  <Text className="primaryFont" textAlign="center" fontSize={['12px', '12px', '12px', '16px']} color='#ffffff'>{el.date}</Text>
                </Flex>
              </GridItem>
            ))}
            <Box w="full" top={isTablet ? "135px" : "120px"} position="absolute">
              <Image width="1630px" height="24px" src={timelineCompetition} alt="" />
            </Box>

          </Grid>
        </Box>

      </Box>
      <Faq />
      <Exploreourevent />
    </Layout>
  );
}