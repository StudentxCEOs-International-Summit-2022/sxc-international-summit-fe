import { Flex, Text, Box, Image } from '@chakra-ui/react'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function FourOhFour() {
    return <Layout hasNavbar hasFooter>

        <Flex position="relative" justify="center" flexDirection="column" align="center" w="100%" minH="100vh">
            <Image opacity={0.3} zIndex="0" left="-40%" top="-5%" position="absolute" w="1300px" h="1400px" src="/bg-partners.png" alt="wavy bg" />
            <Text
                fontWeight={800}
                fontSize="150px"
                lineHeight={1.2}
                className="gradientText primaryFont">
                Oops!
            </Text>
            <Box zIndex="1" mt="24px">
                <Link href="/">
                    <a>
                        <Text className="primaryFont" fontSize="32px" lineHeight={1.2} fontWeight={800} textAlign="center">
                            {"This page is still under construction."}
                        </Text>
                        <Text className="primaryFont" fontSize="32px" lineHeight={1.2} fontWeight={800} textAlign="center">
                            {"Why don't we explore other pages?"}
                        </Text>
                    </a>
                </Link>
            </Box>

        </Flex>

    </Layout>
}