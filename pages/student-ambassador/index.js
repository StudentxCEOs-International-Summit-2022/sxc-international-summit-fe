import { Flex, Text, Box, Image } from '@chakra-ui/react'
import Link from 'next/link'
import Layout from "../../components/Layout";
import Ambassadors from "../../components/StudentAmbassador";

const StudentAmbassador = () => {
    return (
        <Layout hasFooter hasNavbar currentPage="student-ambassadors">
            <Box id="student-ambassadors" mt="60px" mx="auto" maxW={"907px"}>
                <Text
                    color="white"
                    fontSize={{ base: "20px", md: "26px", lg: "32px" }}
                    lineHeight={1.2}
                    fontWeight="800"
                    textAlign="center"
                    className='primaryFont'
                >
                    StudentsxCEOs International Summit 2022
                </Text>
                <Text
                    className='primaryFont gradientTextRed'
                    fontSize={{ base: "32px", md: "48px", lg: "64px" }}
                    fontWeight={800}
                    lineHeight={1.2}
                    textAlign="center"
                    mt="16px"
                >
                    Student Ambassadors
                </Text>
                <Text
                    color="white"
                    className='primaryFont'
                    fontSize="24px"
                    fontWeight={500}
                    lineHeight={1.5}
                    textAlign={{ base: "justify", md: "center" }}
                    mt="16px"
                >
                    Visit our Student Ambassadors’ social media page below and gain referral (discount) codes to register for our{' '}
                    <Text display="inline" color='#1FA1DB' >
                        <Link href="https://www.sxcinternationalsummit.com/competition">
                            Business Case Competition!
                        </Link>
                    </Text>
                </Text>
            </Box>

            <Ambassadors />
        </Layout>
    )
}
export default StudentAmbassador;