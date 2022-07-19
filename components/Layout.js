import { Box, Link, Image, Text, Spacer, IconButton, Flex } from "@chakra-ui/react"
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider } from '@chakra-ui/react'
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons'
import Jumbotron from "./jumbotron"
import JumbotronCompe from "./jumbotron-compe"
import { useWindowSize } from "../hooks/useWindowSize";
import { useRouter } from "next/router";

const Layout = ({ hasNavbar, children, hasFooter, currentPage }) => {
    const { width } = useWindowSize()
    const isMobile = width < 768
    const isTablet = width < 1024
    const router = useRouter()

    return (
        <>
            {isMobile ?
                <Box bgColor={"#020234"} zIndex={1}>
                    {hasNavbar &&
                        <Box my='6px' mx='14px' display='flex' alignItems='center'>
                            <Image src="/logo.png" alt="" />
                            <Spacer />
                            <Box>
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label='Options'
                                        background='transparent'
                                        icon={<HamburgerIcon h='24px' color='#ffffff' />}
                                    />
                                    <MenuList>
                                        <MenuItem onClick={() => router.push("/")}> Home </MenuItem>
                                        <MenuItem onClick={() => router.push("/about")}> About </MenuItem>
                                        <MenuDivider />
                                        <MenuGroup title="Events">
                                            <MenuItem onClick={() => router.push("/pre-event")}>Pre-Event</MenuItem>
                                            <MenuItem onClick={() => router.push("/competition")}>Competition</MenuItem>
                                            <MenuItem onClick={() => router.push("/chambers")}>Chambers</MenuItem>
                                            <MenuItem onClick={() => router.push("/company-visit")}>Company Visit</MenuItem>
                                            <MenuItem onClick={() => router.push("/main-conference")}>Main Conference</MenuItem>
                                        </MenuGroup>
                                        <MenuDivider />
                                        <MenuItem onClick={() => router.push("/store")}> Store </MenuItem>
                                    </MenuList>
                                </Menu>
                            </Box>
                        </Box>}

                    {currentPage === "landing" &&
                        <Box>
                            {/* <Image zIndex={0} overflow="hidden" minH="1200px" minW="1450px" top={{ base: "calc(100vh + 24px)", md: "calc(100vh + 62px)", lg: "calc(100vh + 100px)" }} opacity={0.8} left={{ base: "-100%", md: "-30%", lg: "0" }} position="absolute" src="/images/our_events/bg-ourevents.svg" alt="wavy bg" /> */}
                            <Box position="relative" background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title.png);" backgroundSize="cover" backgroundPosition="center center" h="100vh">
                                <Box position="absolute" bottom="0" w="100vw" h="60%" background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"></Box>
                                <Jumbotron />
                            </Box>
                            {/* <Image zIndex={0} overflow="hidden" opacity={0.3} transform="rotate(20deg)" left={{ base: "-100%", md: "30%", lg: "15%" }} bottom={{ base: "0", lg: "-15%" }} position="absolute" minW="1300px" minH="1400px" src="/bg-partners.png" alt="wavy bg" /> */}
                        </Box>}

                    {currentPage === "competition" &&
                        <Box zIndex={0}>
                            <Box position="relative" background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title-competition.png);" backgroundSize="cover" backgroundPosition="center center" h="100vh">
                                <Box position="absolute" bottom="0" w="100vw" h="60%" background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"></Box>
                                <JumbotronCompe />
                            </Box>
                        </Box>}

                    <Box h="fit-content" px={{ base: "5%", md: "10%" }}>
                        {children}
                    </Box>

                    {hasFooter && <Flex flexDirection='column' justifyContent="center" alignItems="center" color="white" w="full" className="primaryFont" fontWeight={500} lineHeight='150%' px='16px' py='36px'>

                        {/* masih ada salah di image. */}
                        <Image my='16px' src="/logo.png" maxW='158px' objectFit='cover' mr='36px' alt="" />
                        <Text my='36px' maxW='330' fontSize='12px' textAlign="center"> SxC InterSummit is a Grand Event organized by StudentsxCEOs Jakarta consisting of a sequence of Pre-Event, PBC, Chambers, Virtual Company Visit, & Main Conference. </Text>

                        <Text my='36px' fontSize='16px' fontStyle='italic'>#FindYourPathTakeTheLead</Text>
                        <Text my='16px' fontSize='12px'>© StudentsxCEOs International Summit 2022</Text>

                        <Flex gap='12px'>
                            <Link isExternal href="https://www.linkedin.com/company/studentsxceos-summit/">
                                <Image cursor='pointer' boxSize='56px' src="linkedin.png" alt="" />
                            </Link>
                            <Link isExternal href="https://www.instagram.com/sxcintersummit/">
                                <Image cursor='pointer' boxSize='56px' src="instagram.png" alt="" />
                            </Link>
                            <Link isExternal href="https://www.tiktok.com/@sxcintersummit">
                                <Image cursor='pointer' boxSize='56px' src="tiktok.png" alt="" />
                            </Link>
                        </Flex>

                    </Flex>}
                </Box> :
                <Box overflow="hidden" color="white" background="linear-gradient(180deg, #010431 57.09%, #5C1FAA 100%)" position="relative" bgColor="#DADADA" minH="100vh" minW="100%">
                    {hasNavbar &&
                        <Box zIndex={1} bgColor={"#020234"} color="white" h="72px" alignItems={"center"} w="full" position="sticky" className="secondaryFont" fontWeight={600} display="flex" justifyContent={"space-between"}>
                            <Image src="/logo.png" alt="" />

                            <Box display={"flex"} className="primaryFont" fontWeight={800} >
                                <Link marginRight={"48px"} href='/'>
                                    <Text color={"#F8C800"}>
                                        Home
                                    </Text>
                                </Link>
                                <Link marginRight={"48px"} href='/about'>
                                    <Text color={"#ffffff"}>
                                        About
                                    </Text>
                                </Link>
                                {/* <Link marginRight={"48px"}>
                                <Text color = "#ffffff"}>
                                    Events
                                <ChevronDownIcon />
                                </Text>
                            </Link>  */}
                                <Menu>
                                    <MenuButton marginRight={"48px"} className="primaryFont" fontWeight={800}>
                                        Events
                                        <ChevronDownIcon />
                                    </MenuButton>
                                    <MenuList bgColor="#ffffff" color='#000000' borderStyle='none' borderRadius='4px'>
                                        <MenuItem className="primaryFont" fontWeight={800} onClick={() => router.push("/pre-event")}>Pre-Event</MenuItem>
                                        <MenuItem className="primaryFont" fontWeight={800} onClick={() => router.push("/competition")}>Competition</MenuItem>
                                        <MenuItem className="primaryFont" fontWeight={800} onClick={() => router.push("/chambers")}>Chambers</MenuItem>
                                        <MenuItem className="primaryFont" fontWeight={800} onClick={() => router.push("/company-visit")}>Company Visit</MenuItem>
                                        <MenuItem className="primaryFont" fontWeight={800} onClick={() => router.push("/main-conference")}>Main Conference</MenuItem>
                                    </MenuList>
                                </Menu>
                                <Menu>
                                    <MenuButton marginRight={"48px"} className="primaryFont" fontWeight={800}>
                                        Partnership
                                        <ChevronDownIcon />
                                    </MenuButton>
                                    <MenuList bgColor="#ffffff" color='#000000' borderStyle='none' borderRadius='4px'>
                                        <MenuItem className="primaryFont" fontWeight={800} onClick={() => router.push("/media-and-community-partner")}>Media dan Community Partner</MenuItem>
                                        <MenuItem className="primaryFont" fontWeight={800} onClick={() => router.push("/student-ambassador")}>Student Ambassador</MenuItem>
                                    </MenuList>
                                </Menu>
                                <Link mr="160px" href={"https://shopee.co.id/sxcinternationalsummit?categoryId=100533&itemId=16573970983"} isExternal>
                                    <Text color={currentPage === "store" ? "#F8C800" : "#ffffff"} href='/store'>
                                        Store
                                    </Text>
                                </Link>
                            </Box>
                        </Box>
                    }
                    {currentPage === "landing" &&
                        <Box zIndex={0}>
                            <Image minH="1200px" minW="1450px" top={{ base: "calc(100vh + 24px)", md: "calc(100vh + 62px)", lg: "calc(100vh + 100px)" }} opacity={0.8} left={{ base: "-100%", md: "-30%", lg: "0" }} position="absolute" src="/images/our_events/bg-ourevents.svg" alt="wavy bg" />
                            <Box position="relative" background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title.png);" backgroundSize="cover" backgroundPosition="center center" h="100vh">
                                <Box position="absolute" bottom="0" w="100vw" h="60%" background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"></Box>
                                <Jumbotron />
                            </Box>
                            {/* <Image zIndex={0} opacity={0.3} transform="rotate(20deg)" left={{ base: "-100%", md: "30%", lg: "15%" }} bottom={{ base: "0", lg: "-15%" }} position="absolute" minW="1300px" minH="1400px" src="/bg-partners.png" alt="wavy bg" /> */}
                        </Box>}

                    {currentPage === "competition" &&
                        <Box zIndex={0}>
                            <Box position="relative" background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title-competition.png);" backgroundSize="cover" backgroundPosition="center center" h="100vh">
                                <Box position="absolute" bottom="0" w="100vw" h="60%" background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"></Box>
                                <JumbotronCompe />
                            </Box>
                        </Box>}

                    <Box h="fit-content" px={{ base: "5%", md: "10%" }}>
                        {children}
                    </Box>
                    {hasFooter && <Box zIndex={2} bgColor='#020234' color="white" w="full" className="primaryFont" fontWeight={500} lineHeight='150%' py='36px' px='120px'>
                        <Box display='flex' mb='10px'>
                            <Image src="/logo.png" maxW='158px' objectFit='contain' mr='36px' alt="" />
                            <Text maxW='330' fontSize='12px'> SxC InterSummit is a Grand Event organized by StudentsxCEOs Jakarta consisting of a sequence of Pre-Event, PBC, Chambers, Virtual Company Visit, & Main Conference. </Text>
                        </Box>
                        <Flex my='4px'>
                            <Spacer />
                            <Link isExternal href="https://www.linkedin.com/company/studentsxceos-summit/">
                                <Image cursor='pointer' boxSize='56px' src="linkedin.png" alt="" />
                            </Link>
                            <Link isExternal href="https://www.instagram.com/sxcintersummit/">
                                <Image cursor='pointer' boxSize='56px' src="instagram.png" alt="" />
                            </Link>
                            <Link isExternal href="https://www.tiktok.com/@sxcintersummit">
                                <Image cursor='pointer' boxSize='56px' src="tiktok.png" alt="" />
                            </Link>
                        </Flex>
                        <Flex fontSize='16px'>
                            <Text>© StudentsxCEOs International Summit 2022</Text>
                            <Spacer />
                            <Text fontStyle='italic'>#FindYourPathTakeTheLead</Text>
                        </Flex>
                    </Box>}
                </Box>
            }
        </>
    )
}

export default Layout