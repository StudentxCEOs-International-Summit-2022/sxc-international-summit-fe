import { Box } from "@chakra-ui/react"

const Layout = ({ hasNavbar, children, hasFooter }) => {
    return (
        <Box bgColor="#DADADA" minH="100vh" minW="100%">
            {hasNavbar &&
                <Box w="full" position="sticky" className="secondaryFont" fontWeight={600}>
                    Navbar
                </Box>
            }
            <Box background="linear-gradient(180deg, #010431 57.09%, #5C1FAA 100%)" h="fit-content" px={{ base: "5%", md: "10%" }}>
                {children}
            </Box>
            {hasFooter && <Box color="white" w="full" className="primaryFont" fontWeight={600}>Footer</Box>}
        </Box>
    )
}

export default Layout