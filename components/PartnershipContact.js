import { Flex, Box, Text, VStack, Link, Center, Image } from "@chakra-ui/react";

import { useWindowSize } from "../hooks/useWindowSize";

const PartnershipContact = () => {
    const { width } = useWindowSize()
    const isMobile = width < 768
    const isTablet = width < 1024

    return (
        <Box id="partnership-contact">
            <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center">
                {/* base, 480px upwards, 768px upwards, 992px upwards */}
                <Text
                    fontSize={['16px', '32px', '48px', '64px']}
                    fontWeight='800'
                    lineHeight='120%'
                    className='primaryFont gradientTextRed'
                    textAlign='center'
                    mb='16px'>
                    Interested to Partner Up?
                </Text>
                <Text
                    color='#ffffff'
                    fontSize={['14px', '20px', '26px', '32px']}
                    fontWeight='800'
                    lineHeight='120%'
                    className='primaryFont'
                    textAlign='center'
                    mb='16px'>
                    The benefits of our partnership are waiting for you!
                </Text>
                <Text
                    color='#ffffff'
                    fontSize={['12px', '16px', '20px', '24px']}
                    fontWeight='500'
                    lineHeight='150%'
                    className='primaryFont'
                    textAlign='justify'
                    mb='18px'>
                    If you are interested in partnering with StudentsxCEOs International Summit 2022 and have a few questions regarding partnerships, please kindly contact us through:
                </Text>
            </Flex>
            <Center>
            <VStack
                color='#ffffff'
                align='stretch'
                className="primaryFont"
                fontWeight='700'
                fontSize='24px'
                lineHeight='150%'>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyItems='center'
                    h={['50px', '50px', '75px', '75px']}
                    px={['30px', '30px', '40px', '40px']}
                    border='2px solid #5D10AA'
                    borderRadius='10px'>
                    <Image
                        w={['24px', '24px', '54px', '54px']}
                        h={['24px', '24px', '54px', '54px']}
                        mr="20px"
                        src={"/icon-email.svg"}
                        alt="Whatsapp icon"/>
                    <Link
                        href="mailto:marketing.sxcintersummit@gmail.com"
                        textDecoration='underline'
                        fontWeight='700'
                        fontSize={['12px', '12px', '24px', '24px']}
                        lineHeight='150%'
                        className="primaryFont">
                        marketing.sxcintersummit@gmail.com
                    </Link>
                </Box>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyItems='center'
                    h={['50px', '50px', '75px', '75px']}
                    px={['30px', '30px', '40px', '40px']}
                    border='2px solid #5D10AA'
                    borderRadius='10px'>
                    <Image
                        w={['24px', '24px', '54px', '54px']}
                        h={['24px', '24px', '54px', '54px']}
                        mr="20px"
                        src={"/dashicons_whatsapp.svg"}
                        alt="Whatsapp icon"/>
                    <Link
                        href="https://wa.me/6282226692222"
                        textDecoration='underline'
                        fontWeight='700'
                        fontSize={['12px', '12px', '24px', '24px']}
                        lineHeight='150%'
                        className="primaryFont">
                        Jovanka Cathrynn [+62 822 2669 2222]
                    </Link>
                </Box>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyItems='center'
                    h={['50px', '50px', '75px', '75px']}
                    px={['30px', '30px', '40px', '40px']}
                    border='2px solid #5D10AA'
                    borderRadius='10px'>
                    <Image
                        w={['24px', '24px', '54px', '54px']}
                        h={['24px', '24px', '54px', '54px']}
                        mr="20px"
                        src={"/dashicons_whatsapp.svg"}
                        alt="Whatsapp icon"/>
                    <Link
                        href="https://wa.me/62878 8107 8232"
                        textDecoration='underline'
                        fontWeight='700'
                        fontSize={['12px', '12px', '24px', '24px']}
                        lineHeight='150%'
                        className="primaryFont">
                        Audrey Andeisa [+62 878 8107 8232]
                    </Link>
                </Box>
            </VStack>
            </Center>
        </Box>
    )
}

export default PartnershipContact