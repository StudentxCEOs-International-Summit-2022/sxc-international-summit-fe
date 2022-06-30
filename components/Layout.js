import { Box, Image } from "@chakra-ui/react"

const Layout = ({ hasNavbar, children, hasFooter }) => {
    return (
        <Box  overflow="hidden" position="relative" bgColor="#DADADA" minH="100vh" minW="100%">
            {hasNavbar &&
                <Box w="full" position="sticky" className="secondaryFont" fontWeight={600}>
                    Navbar
                </Box>
            }
            <Image minH="1200px" minW="1450px" top="0" opacity={0.8} right="-50%" zIndex={0} position="absolute" src="/images/our_events/bg-ourevents.svg" alt="wavy bg" />
            <Box background="linear-gradient(180deg, #010431 57.09%, #5C1FAA 100%)" h="fit-content" px={{ base: "5%", md: "10%" }}>
                {children}
            </Box>
            <Image opacity={0.3} transform="rotate(20deg)" right="-50%" bottom="0" zIndex={0} position="absolute" minW="1300px" minH="1400px" src="/bg-partners.svg" alt="wavy bg" />
            {hasFooter && <Box color="white" w="full" className="primaryFont" fontWeight={600}>Footer</Box>}
        </Box>
    )
}

export default Layout