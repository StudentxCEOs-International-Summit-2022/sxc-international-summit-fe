import { Box, Link, Image } from "@chakra-ui/react"
import Jumbotron from "./jumbotron"
import JumbotronCompe from "./jumbotron-compe"

const Layout = ({ hasNavbar, children, hasFooter, currentPage }) => {
    return (
        <Box overflow="hidden" color="white" background="linear-gradient(180deg, #010431 57.09%, #5C1FAA 100%)" position="relative" bgColor="#DADADA" minH="100vh" minW="100%">
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
            {currentPage === "landing" && <>
                <Image minH="1200px" minW="1450px" top={{base:"calc(100vh + 24px)", md:"calc(100vh + 62px)", lg:"calc(100vh + 100px)"}} opacity={0.8} left={{ base: "-100%", md: "-30%", lg: "0" }} position="absolute" src="/images/our_events/bg-ourevents.svg" alt="wavy bg" />
                <Box position="relative" background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title.png);" backgroundSize="cover" backgroundPosition="center center" h="100vh">
                    <Box position="absolute" bottom="0" w="100vw" h="60%" background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"></Box>
                    <Jumbotron />
                </Box>
                <Image opacity={0.3} transform="rotate(20deg)" left={{ base: "-100%", md: "30%", lg: "15%" }} bottom={{ base: "0", lg: "-15%" }} position="absolute" minW="1300px" minH="1400px" src="/bg-partners.png" alt="wavy bg" />
            </>}

            {currentPage === "competition" && <>
                <Box position="relative" background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title-competition.png);" backgroundSize="cover" backgroundPosition="center center" h="100vh">
                    <Box position="absolute" bottom="0" w="100vw" h="60%" background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"></Box>
                    <JumbotronCompe />
                </Box>
            </>}

            <Box h="fit-content" px={{ base: "5%", md: "10%" }}>
                {children}
            </Box>
            {hasFooter && <Box color="white" w="full" className="primaryFont" fontWeight={600}>
                Footer
                </Box>}
        </Box>
    )
}

export default Layout