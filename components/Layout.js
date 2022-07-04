import { Box, Link } from "@chakra-ui/react"

const Layout = ({ hasNavbar, children, hasFooter }) => {
    return (
        <Box bgColor="#DADADA" minH="100vh" minW="100%">
            {hasNavbar &&
                <Box bgColor={"#020234"} color="white" h="72px" alignItems={"center"} w="full" position="sticky" className="secondaryFont" fontWeight={600} display="flex" justifyContent={"space-between"}>
                    <Box marginLeft={"120px"} >
                        Header
                    </Box> 

                    <Box display={"flex"} >
                        <Link marginRight={"48px"}>
                            Home
                        </Link>
                        <Link marginRight={"48px"}>
                            About
                        </Link>
                        <Link marginRight={"48px"}>
                            Events
                        </Link> 
                        <Link mr="160px">
                            Store
                        </Link>
        
                    </Box>    
                </Box>
            }
            <Box h="fit-content" mx={{ base: "5%", md: "10%" }} w={{ base: "90%", md: "80%" }}>
                {children}
            </Box>
            {hasFooter && <Box color="white" w="full" className="primaryFont" fontWeight={600}>
                Footer
                </Box>}
        </Box>
    )
}

export default Layout