import Faq from "../../components/faq";
import Layout from "../../components/Layout";
import { Box, Text, Divider, Flex, UnorderedList, ListItem, Button, useDisclosure, Link, Center } from "@chakra-ui/react";
import { useState } from "react";
import fmcg1 from "../../public/chambers/fmcg1.png"
import fmcg2 from "../../public/chambers/fmcg2.png"
import consulting1 from "../../public/chambers/consulting1.png"
import consulting2 from "../../public/chambers/consulting2.png"
import bumn1 from "../../public/chambers/bumn1.png"
import bumn2 from "../../public/chambers/bumn2.png"
import startup1 from "../../public/chambers/startup1.png"
import startup2 from "../../public/chambers/startup2.png"
import Image from "next/image";
import { useWindowSize } from "../../hooks/useWindowSize";
import Exploreourevent from "../../components/Exploreourevent";
import { useRouter } from "next/router";

export default function Chambers() {

    const router = useRouter()

    const [isOnCaseCollaborator, setIsOnCaseCollaborator] = useState(false)
    const { width } = useWindowSize()
    const isMobile = width < 768
    const isTablet = width < 1024




    return (
        <Layout hasNavbar hasFooter currentPage="chambers">
            <Box color="white" maxW="1144px" mx="auto" >
                <Text className="gradientTextRed primaryFont"
                    fontSize={{ base: "32px", md: "48px", lg: "64px" }}
                    lineHeight={1.2}
                    fontWeight="800"
                    textAlign="center"
                >
                    {'“What Do You Need to Prepareto Join Your Dream Company?”'}
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
                                    8<sup>th</sup> October 2022
                                </Text>
                                <Text className="primaryFont" fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2} fontWeight={600}>at 13.00 - 16.45 via Zoom</Text>
                            </Box>
                        </Box>

                        <Flex minH="max-content" gap="20px" id="register" flexDirection={{ base: "column", md: "row" }}>
                            <Box w="full" h="full">
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
                                    FMCG</Box>
                                <Box p={{ base: "30px", md: "35px", lg: "40px" }} mt={{ base: "10px", md: "15px", lg: "20px" }} border="1px solid #F8C800" borderRadius="10px">
                                    <Box className="primaryFont" fontWeight={800} fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2} color="#F8C800">
                                        <Text textAlign="center">“Enter a New World of Work: Adapt to Dynamic Work Culture”</Text>
                                    </Box>
                                    <Flex mt="16px" justify="center" flexDirection={{ base: "column", lg: "row" }} gap="48px">
                                        <Box display="flex" flexDirection="column" alignItems="center">
                                            <Box minW="200px">
                                                <Image src={fmcg1} alt="speaker 1" />
                                            </Box>
                                            <Text mt="16px" textAlign="center" className="primaryFont" fontWeight={800} fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2}>
                                                Andhika Widya Sena
                                            </Text>
                                            <Text textAlign="center" className="primaryFont" fontWeight={700} fontSize={{ base: "12px", md: "16px", lg: "20px" }} lineHeight={1.5} color="#F8C800">
                                                Human Resource Director at P&G
                                            </Text>
                                        </Box>
                                        <Box display="flex" flexDirection="column" alignItems="center">
                                            <Box minW="200px">
                                                <Image src={fmcg2} alt="speaker 2" />
                                            </Box>
                                            <Text textAlign="center" mt="16px" className="primaryFont" fontWeight={800} fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2}>
                                                Sheila Firdausa
                                            </Text>
                                            <Text textAlign="center" className="primaryFont" fontWeight={700} fontSize={{ base: "12px", md: "16px", lg: "20px" }} lineHeight={1.5} color="#F8C800">
                                                Head of Digital Innovation Lead at Paragon
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>


                            <Box w="full" h="full" mt={isMobile && "32px"}>
                                <Box
                                    border="1px solid #F8C800"
                                    borderRadius="10px"
                                    background="linear-gradient(180deg, #F8C800 0%, #66AE93 48.44%, #1FA1DB 100%)" w="full"
                                    fontSize={{ base: "20px", md: "26px", lg: "32px" }}
                                    lineHeight={1.2}
                                    fontWeight={800}
                                    textAlign="center"
                                    py={{ base: "9px", md: "18px" }}
                                    color="#FFFFFF"
                                    className="primaryFont">
                                    Start-Up</Box>
                                <Box p={{ base: "30px", md: "35px", lg: "40px" }} mt={{ base: "10px", md: "15px", lg: "20px" }} border="1px solid #F8C800" borderRadius="10px">
                                    <Box className="primaryFont" fontWeight={800} fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2} color="#F8C800">
                                        <Text textAlign="center">“Digital Talent: Preparing Talent and Skill for Industry 4.0”</Text>
                                    </Box>
                                    <Flex mt="16px" justify="center" flexDirection={{ base: "column", lg: "row" }} gap="48px">
                                        <Box w="100%" display="flex" flexDirection="column" alignItems="center">
                                            <Box minW="200px">
                                                <Image src={startup1} alt="speaker 1" />
                                            </Box>
                                            <Text mt="16px" textAlign="center" className="primaryFont" fontWeight={800} fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2}>
                                                Rivera Liza Valentina
                                            </Text>
                                            <Text textAlign="center" className="primaryFont" fontWeight={700} fontSize={{ base: "12px", md: "16px", lg: "20px" }} lineHeight={1.5} color="#F8C800">
                                                Business Development at Ternak Uang
                                            </Text>
                                        </Box>
                                        <Box w="100%" display="flex" flexDirection="column" alignItems="center">
                                            <Box minW="200px">
                                                <Image src={startup2} alt="speaker 2" />
                                            </Box>
                                            <Text textAlign="center" mt="16px" className="primaryFont" fontWeight={800} fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2}>
                                                Raudah Sabila
                                            </Text>
                                            <Text textAlign="center" className="primaryFont" fontWeight={700} fontSize={{ base: "12px", md: "16px", lg: "20px" }} lineHeight={1.5} color="#F8C800">
                                                Talent Acquisition Specialist at Top Tech Company
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>

                        </Flex>
                        <Flex mt="48px" h="max-content" gap="20px" flexDirection={{ base: "column", md: "row" }}>
                            <Box w="full" h="full">
                                <Box
                                    border="1px solid #F8C800"
                                    borderRadius="10px"
                                    background="linear-gradient(180deg, #F8C800 0%, #66AE93 48.44%, #1FA1DB 100%)"
                                    w="full"
                                    fontSize={{ base: "20px", md: "26px", lg: "32px" }}
                                    lineHeight={1.2}
                                    fontWeight={800}
                                    textAlign="center"
                                    py={{ base: "9px", md: "18px" }}
                                    color="#FFFFFF"
                                    className="primaryFont">
                                    BUMN</Box>
                                <Box p={{ base: "30px", md: "35px", lg: "40px" }} mt={{ base: "10px", md: "15px", lg: "20px" }} border="1px solid #F8C800" borderRadius="10px">
                                    <Box className="primaryFont" fontWeight={800} fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2} color="#F8C800">
                                        <Text textAlign="center">“How to Advanced your Career with BUMN exposure”</Text>
                                    </Box>
                                    <Flex mt="16px" justify="center" flexDirection={{ base: "column", lg: "row" }} gap="48px">
                                        <Box w="100%" display="flex" flexDirection="column" alignItems="center">
                                            <Box minW="200px">
                                                <Image src={bumn1} alt="speaker 1" />
                                            </Box>
                                            <Text mt="16px" textAlign="center" className="primaryFont" fontWeight={800} fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2}>
                                                Arnintya Amara Prameswari
                                            </Text>
                                            <Text textAlign="center" className="primaryFont" fontWeight={700} fontSize={{ base: "12px", md: "16px", lg: "20px" }} lineHeight={1.5} color="#F8C800">
                                                Business Development Officer at Bank Mandiri
                                            </Text>
                                        </Box>
                                        <Box w="100%" display="flex" flexDirection="column" alignItems="center">
                                            <Box minW="200px">
                                                <Image src={bumn2} alt="speaker 2" />
                                            </Box>
                                            <Text textAlign="center" mt="16px" className="primaryFont" fontWeight={800} fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2}>
                                                Muhamad Insan Nasher
                                            </Text>
                                            <Text textAlign="center" className="primaryFont" fontWeight={700} fontSize={{ base: "12px", md: "16px", lg: "20px" }} lineHeight={1.5} color="#F8C800">
                                                Talent Acquisition Specialist at PT Telkom Indonesia
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>


                            <Box w="full" h="full" mt={isMobile && "32px"}>
                                <Box
                                    border="1px solid #F8C800"
                                    borderRadius="10px"
                                    background="linear-gradient(180deg, #F8C800 0%, #FF6941 100%)" w="full"
                                    fontSize={{ base: "20px", md: "26px", lg: "32px" }}
                                    lineHeight={1.2}
                                    fontWeight={800}
                                    textAlign="center"
                                    py={{ base: "9px", md: "18px" }}
                                    color="#FFFFFF"
                                    className="primaryFont">
                                    Consulting</Box>
                                <Box p={{ base: "30px", md: "35px", lg: "40px" }} mt={{ base: "10px", md: "15px", lg: "20px" }} border="1px solid #F8C800" borderRadius="10px">
                                    <Box className="primaryFont" fontWeight={800} fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2} color="#F8C800">
                                        <Text textAlign="center">“Digital Transformation in FMCG Industry: Upskilling Workforce to Deal With the Digital Era”</Text>
                                    </Box>
                                    <Flex mt="16px" justify="center" flexDirection={{ base: "column", lg: "row" }} gap="48px">
                                        <Box w="100%" display="flex" flexDirection="column" alignItems="center">
                                            <Box minW="200px">
                                                <Image src={consulting1} alt="speaker 1" />
                                            </Box>
                                            <Text mt="16px" textAlign="center" className="primaryFont" fontWeight={800} fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2}>
                                                Monika Istanto
                                            </Text>
                                            <Text textAlign="center" className="primaryFont" fontWeight={700} fontSize={{ base: "12px", md: "16px", lg: "20px" }} lineHeight={1.5} color="#F8C800">
                                                Management Consultant at Consulting Company
                                            </Text>
                                        </Box>
                                        <Box w="100%" display="flex" flexDirection="column" alignItems="center">
                                            <Box minW="200px">
                                                <Image src={consulting2} alt="speaker 2" />
                                            </Box>
                                            <Text textAlign="center" mt="16px" className="primaryFont" fontWeight={800} fontSize={{ base: "20px", md: "26px", lg: "32px" }} lineHeight={1.2}>
                                                Alfiyya Zahra
                                            </Text>
                                            <Text textAlign="center" className="primaryFont" fontWeight={700} fontSize={{ base: "12px", md: "16px", lg: "20px" }} lineHeight={1.5} color="#F8C800">
                                                Recruiter at Big 4 Accounting Firm
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>

                        </Flex>
                    </Box>
                    <Center>
                        <Link isExternal href="https://bit.ly/RegistrationChambersSxCInterSummit">
                            <Button
                                mb="40px"
                                borderRadius="4px"
                                bgColor="#5D11AB"
                                p="40px 24px"
                                color="white" s
                                fontWeight={700}
                                fontSize="40px"
                                className="primaryFont">
                                Register
                            </Button>
                        </Link>

                    </Center>

                </Box>

            </Box>
            <Faq event="chambers" />
            <Exploreourevent />
        </Layout>
    );
}
