import { Box, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";

const Ambassadors = () => {
    const ambassadors = [
        {
            name: "Nashatra Malicca",
            instagramID: "nashatramalicca",
        },
        {
            name: "Leony Novina",
            instagramID: "leony_novina",
        },
        {
            name: "Aalia Khairunnisa P",
            instagramID: "aalia_khairunnisa",
        },
        {
            name: "Keren Jeremiah",
            instagramID: "kerenjrmh",
        },
        {
            name: "Danisa Qinthara",
            instagramID: "daniqinthara",
        },
        {
            name: "Sadam Permana",
            instagramID: "sadampermana.w",
        },
        {
            name: "Atharel Haptana",
            instagramID: "atharelhaptana",
        },
        {
            name: "Nabilah Luthfah",
            instagramID: "nabilah_luthfah",
        },
        {
            name: "Nadhifa Azka",
            instagramID: "nadhifazk_",
        },
        {
            name: "Prabowo",
            instagramID: "prabowo.23",
        },
        {
            name: "Raja Ali",
            instagramID: "raja_alih",
        },
        {
            name: "Gabriel Adeline",
            instagramID: "gabrielladelinee",
        },
        {
            name: "Marsha Valeska",
            instagramID: "marshavaleska",
        },
        {
            name: "Regita Cahyaning",
            instagramID: "regitachast",
        },
        {
            name: "Putri Qanitah",
            instagramID: "qaniaputrii",
        },
        {
            name: "Salsabila Dewani",
            instagramID: "salsadewani",
        },
        {
            name: "Bagus",
            instagramID: "baguskrnwann",
        },
        {
            name: "Salsabilla Ramadianti",
            instagramID: "salsabillaramadianti",
        },
        {
            name: "Himma",
            instagramID: "h.ahsana",
        },
        {
            name: "Nadya Izzati",
            instagramID: "nadyaizzti",
        },
        {
            name: "Nilo",
            instagramID: "niloverjudge",
        },
    ]
    return (
        <Flex mb={{ base: "30px", md: "70px" }} id="student-ambassadors" mt={{ base: "77px", md: "145px", lg: "213px" }} w="100%" justify="center">
            <Grid rowGap="46px" columnGap="22px" gridTemplateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(5, 1fr)" }} w="100%" mx="auto">

                {ambassadors.map((ambassador, index) => {
                    if (index >= 15 && index < 18) {
                        return (
                            <Flex gridColumn={{ base: "auto", lg: index % 5 + 2 }} justify="space-between" key={index} flexDirection="column" bgColor="#020234" pt="12px" px="15px" border="1.35789px solid #5D11AB" borderRadius="20px">
                                <Box>
                                    <Text className="primaryFont"
                                        fontSize="32px"
                                        lineHeight={1.2}
                                        fontWeight={800}
                                        color="white" textAlign="center">
                                        {ambassador.name}
                                    </Text>
                                    <Flex align="center" justify="center" mt="7px">
                                        <Image w="15px" h="15px" src="/instagram-logo-yellow.svg" alt="" />
                                        <Link target="_blank" href={`https://www.instagram.com/${ambassador.instagramID}/`}>
                                            <Text className="primaryFont"
                                                fontSize="16px"
                                                lineHeight={1.5}
                                                fontWeight={500}
                                                color="white" textAlign="center"
                                                ml="9px">
                                                {ambassador.instagramID}
                                            </Text>
                                        </Link>
                                    </Flex>
                                </Box>

                                <Image src={`/images/ambassadors/${ambassador.instagramID}.png`} alt="" />

                            </Flex>
                        )
                    } else if (index >= 18) {
                        return (
                            <Flex gridColumn={{ base: "auto", lg: (index + 4) % 5 }} justify="space-between" key={index} flexDirection="column" bgColor="#020234" pt="12px" px="15px" border="1.35789px solid #5D11AB" borderRadius="20px">
                                <Box>
                                    <Text className="primaryFont"
                                        fontSize="32px"
                                        lineHeight={1.2}
                                        fontWeight={800}
                                        color="white" textAlign="center">
                                        {ambassador.name}
                                    </Text>
                                    <Flex align="center" justify="center" mt="7px">
                                        <Image w="15px" h="15px" src="/instagram-logo-yellow.svg" alt="" />
                                        <Link target="_blank" href={`https://www.instagram.com/${ambassador.instagramID}/`}>
                                            <Text className="primaryFont"
                                                fontSize="16px"
                                                lineHeight={1.5}
                                                fontWeight={500}
                                                color="white" textAlign="center"
                                                ml="9px">
                                                {ambassador.instagramID}
                                            </Text>
                                        </Link>
                                    </Flex>
                                </Box>
                                <Image src={`/images/ambassadors/${ambassador.instagramID}.png`} alt="" />

                            </Flex>
                        )
                    } else {
                        return (
                            <Flex justify="space-between" key={index} flexDirection="column" bgColor="#020234" pt="12px" px="15px" border="1.35789px solid #5D11AB" borderRadius="20px">
                                <Box>
                                    <Text className="primaryFont"
                                        fontSize="32px"
                                        lineHeight={1.2}
                                        fontWeight={800}
                                        color="white" textAlign="center">
                                        {ambassador.name}
                                    </Text>
                                    <Flex align="center" justify="center" mt="7px">
                                        <Image w="15px" h="15px" src="/instagram-logo-yellow.svg" alt="" />
                                        <Link target="_blank" href={`https://www.instagram.com/${ambassador.instagramID}/`}>
                                            <Text className="primaryFont"
                                                fontSize="16px"
                                                lineHeight={1.5}
                                                fontWeight={500}
                                                color="white" textAlign="center"
                                                ml="9px">
                                                {ambassador.instagramID}
                                            </Text>
                                        </Link>
                                    </Flex>
                                </Box>
                                <Image src={`/images/ambassadors/${ambassador.instagramID}.png`} alt="" />

                            </Flex>
                        )
                    }

                })}
            </Grid>
        </Flex>
    )
}
export default Ambassadors;