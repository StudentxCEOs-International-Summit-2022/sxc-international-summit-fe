import Faq from "../../components/faq";
import Layout from "../../components/Layout";
import { Box, Text, Divider, Flex, OrderedList, ListItem, Button, useDisclosure, Link } from "@chakra-ui/react";
import { useState } from "react";
import speaker1 from "../../public/preevent/speaker-1.jpg"
import speaker2 from "../../public/preevent/speaker-2.jpg"
import moderator from "../../public/preevent/moderator.jpeg"
import Image from "next/image";
import { useWindowSize } from "../../hooks/useWindowSize";
import Exploreourevent from "../../components/Exploreourevent";
import { useRouter } from "next/router";

export default function PreEvent() {

    const router = useRouter()

    const [isOnCaseCollaborator, setIsOnCaseCollaborator] = useState(false)
    const { width } = useWindowSize()
    const isMobile = width < 768
    const isTablet = width < 1024




    return (
        <Layout hasNavbar hasFooter currentPage="pre-event">
            <Box color="white" maxW="1144px" mx="auto" >
                <Text className="gradientTextRed primaryFont"
                    fontSize={{ base: "32px", md: "48px", lg: "64px" }}
                    lineHeight={1.2}
                    fontWeight="800"
                    textAlign="center"
                >
                    {'“Equipping Yourself with 21st Century Skills: What Does the Company Look on You?”'}
                </Text>
                <Text className="primaryFont"
                    mt={{ base: "16px", md: "8px" }}
                    fontWeight={800}
                    fontSize={{ base: "20px", md: "26px", lg: "32px" }}
                    color="white"
                    lineHeight={1.2}
                    textAlign="center"
                >
                    Get to know more about our event!
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
                    <Box my="36px"
                        ml="0"
                        className="primaryFont"
                        bgColor={isOnCaseCollaborator ? "transparent" : "#5D11AB"}
                        border="3px solid #A170FD"
                        borderRadius="100vw"
                        w="fit-content"
                        mx="auto"
                        p="12px 20px"
                        fontWeight={600}
                        fontSize="36px"
                        lineHeight={1.5} minW="fit-content">
                        Event Details
                    </Box>
                    <Divider orientation="horizontal" />
                    <Box p="36px 42px">
                        <Text
                            mb="24px"
                            className="primaryFont gradientText" textAlign="center"
                            fontWeight={800}
                            fontSize={{ base: "32px", md: "48px", lg: "64px" }}
                            lineHeight={1.2}
                            color="#FFFFFF"
                        >
                            Speakers
                        </Text>
                        <Flex justify="center" flexDirection={{ base: "column", md: "row" }} gap="48px">
                            <Box w="100%" display="flex" flexDirection="column" alignItems="center">
                                <Box overflow="hidden" w="200px" borderRadius="100%" border="3px solid #A170FD">
                                    <Image src={speaker1} alt="speaker 1" />
                                </Box>
                                <Text mt="16px" textAlign="center" className="primaryFont" fontWeight={800} fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2}>
                                    Rifqi Adhyasa
                                </Text>
                                <Text textAlign="center" className="primaryFont" fontWeight={700} fontSize={{ base: "12px", md: "16px", lg: "20px" }} lineHeight={1.5} color="#F8C800">
                                    Product Marketing Manager - Employer Branding at Traveloka
                                </Text>
                            </Box>
                            <Box w="100%" display="flex" flexDirection="column" alignItems="center">
                                <Box overflow="hidden" w="200px" borderRadius="100%" border="3px solid #A170FD">
                                    <Image src={speaker2} alt="speaker 2" />
                                </Box>
                                <Text textAlign="center" mt="16px" className="primaryFont" fontWeight={800} fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2}>
                                    Hanny Lovita Pandiani
                                </Text>
                                <Text textAlign="center" className="primaryFont" fontWeight={700} fontSize={{ base: "12px", md: "16px", lg: "20px" }} lineHeight={1.5} color="#F8C800">
                                    Employer Brand, Culture & Experience Manager at Ajaib Sekuritas
                                </Text>
                            </Box>
                        </Flex>
                        <Text
                            mt="48px"
                            mb="24px"
                            className="primaryFont gradientText" textAlign="center"
                            fontWeight={800}
                            fontSize={{ base: "32px", md: "48px", lg: "64px" }}
                            lineHeight={1.2}
                            color="#FFFFFF"
                        >
                            Moderator
                        </Text>
                        <Flex justify="center">
                            <Box w="100%" display="flex" flexDirection="column" alignItems="center">
                                <Box overflow="hidden" w="200px" borderRadius="100%" border="3px solid #A170FD">
                                    <Image src={moderator} alt="speaker 1" />
                                </Box>
                                <Text mt="16px" textAlign="center" className="primaryFont" fontWeight={800} fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2}>
                                    Fryadiva Meshia Sihabuddin
                                </Text>
                                <Text textAlign="center" className="primaryFont" fontWeight={700} fontSize={{ base: "12px", md: "16px", lg: "20px" }} lineHeight={1.5} color="#F8C800">
                                    External Affairs Manager of Selasar Community <br />
                                    Ex- National Partnership Manager Global Millennial Group <br />
                                    Ex-Marketing Communication and Strategic Partnership TNYI

                                </Text>
                            </Box>
                        </Flex>

                        <Box border="2px solid #F8C800" m={{ base: "24px 0px", md: "24px 50px" }}>
                            <Text
                                mt="48px"
                                mb="24px"
                                className="primaryFont gradientText" textAlign="center"
                                fontWeight={800}
                                fontSize={{ base: "32px", md: "48px", lg: "64px" }}
                                lineHeight={1.2}
                                color="#FFFFFF"
                                id="register"
                            >
                                Save the Date
                            </Text>
                            <Box mb="24px" textAlign="center">
                                <Text className="primaryFont" fontWeight={800} fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2}>
                                    13<sup>th</sup> August 2022
                                </Text>
                                <Text className="primaryFont" fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2} fontWeight={600}>at 13.00 - 15.40 via Zoom</Text>
                            </Box>
                        </Box>

                        <Box
                            border="1px solid #F8C800"
                            borderRadius="10px"
                            background="linear-gradient(180deg, #F8C800 0%, #FF6941 100%)"
                            w="full"
                            fontSize={{ base: "20px", md: "26px", lg: "32px" }}
                            lineHeight={1.2}
                            fontWeight={800}
                            textAlign="center"
                            py={{ base: "9px", md: "18px" }}
                            color="#FFFFFF"
                            className="primaryFont">
                            Benefits</Box>
                        <OrderedList mt={{ base: "28px", md: "32px", lg: "36px" }} className={isMobile ? "secondaryFont" : "primaryFont"} fontSize={{ base: "16px", md: "20px", lg: "24px" }} fontWeight={500} lineHeight={1.5} textAlign="justify">
                            <ListItem>E-certificate</ListItem>
                            <ListItem>
                                Mentoring Session with Speaker ( Limited! )
                            </ListItem>
                            <ListItem>
                                Free Merchandise ( For Lucky Participants )
                            </ListItem>
                            <ListItem>
                                Lucky participants will get a mentoring session with other interesting speakers and door prizes!
                            </ListItem>
                        </OrderedList>
                        <Flex justify="center" w="100%">
                            <Button w="fit-content" mx="auto" p="30px 72px" className="primaryFont" fontWeight={700} fontSize="32px" bgColor="#5D11AB" borderRadius="4px" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" lineHeight={1.5} mt="20px" onClick={() => router.push("/pre-event/register")}>Register</Button>
                        </Flex>
                    </Box>
                </Box>

            </Box>
            <Faq event="pre-event" />
            <Exploreourevent />
        </Layout>
    );
}
