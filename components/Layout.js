import { Box } from "@chakra-ui/react"

const Layout = ({ hasNavbar, children, hasFooter }) => {
    return (
        <Box bgColor="#DADADA" minH="100vh" minW="100%">
            {hasNavbar &&
                <Box w="full" position="sticky" className="secondaryFont" fontWeight={600}>
                    Navbar
                </Box>
            }
            <Box maxW="1440px" h="fit-content" mx={{ base: "5%", md: "10%", lg:"auto" }} w={{ base: "90%", md: "80%" }}>
                {children}
            </Box>
            {hasFooter && <Box color="white" w="full" className="primaryFont" fontWeight={600}>Footer</Box>}
        </Box>
    )
}

export default Layout