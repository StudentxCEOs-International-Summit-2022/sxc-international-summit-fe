import { Box, Image } from "@chakra-ui/react"
import { useWindowSize } from "../hooks/useWindowSize"

const Layout = ({ hasNavbar, children, hasFooter }) => {
    const { width } = useWindowSize()
    const isMobile = width < 768
    return (
        <Box overflow="hidden" background="linear-gradient(180deg, #010431 57.09%, #5C1FAA 100%)" position="relative" bgColor="#DADADA" minH="100vh" minW="100%">
            {hasNavbar &&
                <Box w="full" position="sticky" className="secondaryFont" fontWeight={600}>
                    Navbar
                </Box>
            }
            <Image minH="1200px" minW="1450px" top={{base:"650px", md:"700px", lg:"800px"}} opacity={0.8} className="backgroundComponent" left={{base:"-100%", md:"-30%", lg:"0"}} position="absolute" src="/images/our_events/bg-ourevents.svg" alt="wavy bg" />
            <Box className="layout" h="fit-content" px={{ base: "5%", md: "10%" }}>
                {children}
            </Box>
            <Image opacity={0.3} transform="rotate(20deg)" left={{base:"-100%", md:"30%", lg:"15%"}} bottom={{base:"0", lg:"-15%"}} className="backgroundComponent" position="absolute" minW="1300px" minH="1400px" src="/bg-partners.svg" alt="wavy bg" />
            {hasFooter && <Box color="white" w="full" className="primaryFont" fontWeight={600}>Footer</Box>}
        </Box>
    )
}

export default Layout