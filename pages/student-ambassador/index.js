import { Flex, Text, Box, Image } from '@chakra-ui/react'
import Link from 'next/link'
import JumbotronSA from "../../components/jumbotron-sa";
import Layout from "../../components/Layout";
import Ambassadors from "../../components/StudentAmbassador";

const StudentAmbassador = () => {
    // return (
    //     <Layout hasFooter hasNavbar>
    //         <JumbotronSA />
    //         <Ambassadors />
    //     </Layout>
    // )
    return <Layout hasNavbar hasFooter>

        <Flex position="relative" justify="center" flexDirection="column" align="center" w="100%" minH="100vh">
            <Image opacity={0.3} zIndex="0" left="-40%" top="-5%" position="absolute" w="1300px" h="1400px" src="/bg-partners.png" alt="wavy bg" />
            <Text
                fontWeight={800}
                fontSize={{ base: "64px", md: "150px" }}
                lineHeight={1.2}
                className="gradientText primaryFont">
                Oops!
            </Text>
            <Box zIndex="1" mt="24px">
                <Link href="/">
                    <a>
                        <Text color="#FFFFFF" className="primaryFont" fontSize={{ base: "16px", md: "32px" }} lineHeight={1.2} fontWeight={800} textAlign="center">
                            {"This page is still under construction."}
                        </Text>
                        <Text color="#FFFFFF" className="primaryFont" fontSize={{ base: "16px", md: "32px" }} lineHeight={1.2} fontWeight={800} textAlign="center">
                            {"Why don't we explore other pages?"}
                        </Text>
                    </a>
                </Link>
            </Box>

        </Flex>

    </Layout>
}
export default StudentAmbassador;