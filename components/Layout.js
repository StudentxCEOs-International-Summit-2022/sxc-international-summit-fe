import {
  Box,
  Link,
  Image,
  Text,
  Spacer,
  IconButton,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Jumbotron from "./jumbotron";
import JumbotronCompe from "./jumbotron-compe";
import { useWindowSize } from "../hooks/useWindowSize";
import { useRouter } from "next/router";
import JumbotronMedpar from "./jumbotron-medpar";
import JumbotronSA from "./jumbotron-sa";
import JumbotronPreEvent from "./jumbotron-preEvent";

const Layout = ({ hasNavbar, children, hasFooter, currentPage }) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width < 1024;
  const router = useRouter();

  return (
    <>
      {isMobile ? (
        <Box bgColor={"#020234"} zIndex={1}>
          {hasNavbar && (
            <Box py="6px" mx="14px" display="flex" alignItems="center">
              <Link href="/">
                <Image src="/logo.svg" alt="" />
              </Link>
              <Spacer />
              <Box>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    background="transparent"
                    icon={<HamburgerIcon h="24px" color="#ffffff" />}
                  />
                  <MenuList
                    color="#FFFFFF"
                    bgColor="#020234"
                    borderRadius="12px"
                  >
                    <MenuItem
                      className="primaryFont"
                      fontWeight={800}
                      fontSize="16px"
                      lineHeight={1.2}
                      onClick={() => router.push("/")}
                    >
                      {" "}
                      Home{" "}
                    </MenuItem>
                    <MenuItem
                      className="primaryFont"
                      fontWeight={800}
                      fontSize="16px"
                      lineHeight={1.2}
                      onClick={() => router.push("/about")}
                    >
                      {" "}
                      About{" "}
                    </MenuItem>
                    <Accordion border="transparent" allowToggle>
                      <AccordionItem>
                        <h2>
                          <AccordionButton>
                            <Box
                              flex="1"
                              textAlign="left"
                              className="primaryFont"
                              fontWeight={800}
                              fontSize="16px"
                              lineHeight={1.2}
                            >
                              Events
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel py={0}>
                          <MenuItem
                            className="primaryFont"
                            fontWeight={800}
                            fontSize="16px"
                            lineHeight={1.2}
                            onClick={() => router.push("/pre-event")}
                          >
                            <Image
                              src="/images/our_events/icon-preevent.png"
                              h="24px"
                              alt=""
                            />
                            <Text ml="20px">Pre-Event</Text>
                          </MenuItem>
                          <MenuItem
                            className="primaryFont"
                            fontWeight={800}
                            fontSize="16px"
                            lineHeight={1.2}
                            onClick={() => router.push("/competition")}
                          >
                            <Image
                              src="/images/our_events/icon-competition.png"
                              h="24px"
                              alt=""
                            />
                            <Text ml="20px">Competition</Text>
                          </MenuItem>
                          <MenuItem
                            className="primaryFont"
                            fontWeight={800}
                            fontSize="16px"
                            lineHeight={1.2}
                            onClick={() => router.push("/chambers")}
                          >
                            <Image
                              src="/images/our_events/icon-chambers.png"
                              h="24px"
                              alt=""
                            />
                            <Text ml="20px">Chambers</Text>
                          </MenuItem>
                          <MenuItem
                            className="primaryFont"
                            fontWeight={800}
                            fontSize="16px"
                            lineHeight={1.2}
                            onClick={() => router.push("/company-visit")}
                          >
                            <Image
                              src="/images/our_events/icon-comvis.png"
                              h="24px"
                              alt=""
                            />
                            <Text ml="20px">Company Visit</Text>
                          </MenuItem>
                          <MenuItem
                            className="primaryFont"
                            fontWeight={800}
                            fontSize="16px"
                            lineHeight={1.2}
                            onClick={() => router.push("/main-conference")}
                          >
                            <Image
                              src="/images/our_events/icon-mainconference.svg"
                              h="24px"
                              alt=""
                            />
                            <Text ml="20px">Main Conference</Text>
                          </MenuItem>
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <h2>
                          <AccordionButton>
                            <Box
                              className="primaryFont"
                              fontWeight={800}
                              fontSize="16px"
                              lineHeight={1.2}
                              flex="1"
                              textAlign="left"
                            >
                              Partnership
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <MenuItem
                            className="primaryFont"
                            fontWeight={800}
                            fontSize="16px"
                            lineHeight={1.2}
                            onClick={() =>
                              router.push("/media-and-community-partner")
                            }
                          >
                            Media and <br /> Community Partner
                          </MenuItem>
                          <MenuItem
                            className="primaryFont"
                            fontWeight={800}
                            fontSize="16px"
                            lineHeight={1.2}
                            onClick={() => router.push("/student-ambassador")}
                          >
                            Student Ambassador
                          </MenuItem>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                    <MenuItem
                      className="primaryFont"
                      fontWeight={800}
                      fontSize="16px"
                      lineHeight={1.2}
                      onClick={() => router.push("/store")}
                    >
                      {" "}
                      Store{" "}
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
          )}

          {currentPage === "landing" && (
            <Box>
              {/* <Image zIndex={0} overflow="hidden" minH="1200px" minW="1450px" top={{ base: "calc(100vh + 24px)", md: "calc(100vh + 62px)", lg: "calc(100vh + 100px)" }} opacity={0.8} left={{ base: "-100%", md: "-30%", lg: "0" }} position="absolute" src="/images/our_events/bg-ourevents.svg" alt="wavy bg" /> */}
              <Box
                position="relative"
                background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title.png);"
                backgroundSize="cover"
                backgroundPosition="center center"
                h="100vh"
              >
                <Box
                  position="absolute"
                  bottom="0"
                  w="100vw"
                  h="60%"
                  background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"
                ></Box>
                <Jumbotron />
              </Box>
              {/* <Image zIndex={0} overflow="hidden" opacity={0.3} transform="rotate(20deg)" left={{ base: "-100%", md: "30%", lg: "15%" }} bottom={{ base: "0", lg: "-15%" }} position="absolute" minW="1300px" minH="1400px" src="/bg-partners.png" alt="wavy bg" /> */}
            </Box>
          )}

          {currentPage === "competition" && (
            <Box zIndex={0}>
              <Box
                position="relative"
                background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title-competition.png);"
                backgroundSize="cover"
                backgroundPosition="center center"
                h="100vh"
              >
                <Box
                  position="absolute"
                  bottom="0"
                  w="100vw"
                  h="60%"
                  background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"
                ></Box>
                <JumbotronCompe />
              </Box>
            </Box>
          )}

          {currentPage === "mediaPartner" && (
            <Box>
              <Box
                position="relative"
                background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title-mediapartner.png);"
                backgroundSize="cover"
                backgroundPosition="center center"
                h="100vh"
              >
                <Box
                  position="absolute"
                  bottom="0"
                  w="100vw"
                  h="60%"
                  background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"
                ></Box>
                <JumbotronMedpar />
              </Box>
            </Box>
          )}

          {currentPage === "student-ambassadors" && (
            <Box zIndex={0}>
              <Box
                position="relative"
                background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title-sa.png);"
                backgroundSize="cover"
                backgroundPosition="center center"
                h="100vh"
              >
                <Box
                  position="absolute"
                  bottom="0"
                  w="100vw"
                  h="60%"
                  background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"
                ></Box>
                <JumbotronSA />
              </Box>
            </Box>
          )}

          {currentPage === "pre-event" && (
            <Box zIndex={0}>
              <Box
                position="relative"
                background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title-sa.png);"
                backgroundSize="cover"
                backgroundPosition="center center"
                h="100vh"
              >
                <Box
                  position="absolute"
                  bottom="0"
                  w="100vw"
                  h="60%"
                  background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"
                ></Box>
                <JumbotronPreEvent
                  title={"Pre Event"}
                  description="A Talk Show session with the professional national speaker. After attending this event, participants are expected to know more about the skill requirement in the 21st century, how to improve productivity by learning basic office software and many more."
                  linkRegis="#register"
                />
              </Box>
            </Box>
          )}

          {currentPage === "chambers" && (
            <Box zIndex={0}>
              <Box
                position="relative"
                background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title-sa.png);"
                backgroundSize="cover"
                backgroundPosition="center center"
                h="100vh"
              >
                <Box
                  position="absolute"
                  bottom="0"
                  w="100vw"
                  h="60%"
                  background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"
                ></Box>
                <JumbotronPreEvent
                  title={"Chambers"}
                  description="Expand your knowledge and networks by joining one of our chambers (FMCG, Consultant, Start-Up, BUMN). Each chamber will discuss a topic with their speakers. After attending this event, participants are expected to know more about the industry and the career path in each industry."
                  linkRegis="#register"
                />
              </Box>
            </Box>
          )}

          {currentPage === "company-visit" && (
            <Box zIndex={0}>
              <Box
                position="relative"
                background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title-sa.png);"
                backgroundSize="cover"
                backgroundPosition="center center"
                h="100vh"
              >
                <Box
                  position="absolute"
                  bottom="0"
                  w="100vw"
                  h="60%"
                  background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"
                ></Box>
                <JumbotronPreEvent
                  title={"Company Visit"}
                  description="Get to know and see the companies of your dreams in our Virtual Company Visit. Gain new insights by seeing companies give their point of view from our curated theme."
                  linkRegis="https://forms.gle/N42pwiJWhQ5ghwNA6"
                />
              </Box>
            </Box>
          )}

          {currentPage === "main-conference" && (
            <Box zIndex={0}>
              <Box
                position="relative"
                background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title-sa.png);"
                backgroundSize="cover"
                backgroundPosition="center center"
                h="100vh"
              >
                <Box
                  position="absolute"
                  bottom="0"
                  w="100vw"
                  h="60%"
                  background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"
                ></Box>
                <JumbotronPreEvent
                  title={"Main Conference"}
                  description="Do not miss the peak event of The SxC International Summit, with enriching Interactive International Talkshow and the Awarding Ceremony from our case competition."
                  linkRegis=""
                />
              </Box>
            </Box>
          )}

          <Box h="fit-content" px={{ base: "5%", md: "10%" }}>
            {children}
          </Box>

          {hasFooter && (
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              color="white"
              w="full"
              className="primaryFont"
              fontWeight={500}
              lineHeight="150%"
              px="16px"
              py="36px"
            >
              {/* masih ada salah di image. */}
              <Image
                my="16px"
                src="/logo.svg"
                maxW="158px"
                objectFit="cover"
                mr="36px"
                alt=""
              />
              <Text my="36px" maxW="330" fontSize="12px" textAlign="center">
                {" "}
                SxC InterSummit is a Grand Event organized by StudentsxCEOs
                Jakarta consisting of a sequence of Pre-Event, PBC, Chambers,
                Virtual Company Visit, & Main Conference.{" "}
              </Text>

              <Text my="36px" fontSize="16px" fontStyle="italic">
                #FindYourPathTakeTheLead
              </Text>
              <Text my="16px" fontSize="12px">
                © StudentsxCEOs International Summit 2022
              </Text>

              <Flex gap="12px">
                <Link
                  isExternal
                  href="https://www.linkedin.com/company/studentsxceos-summit/"
                >
                  <Image
                    cursor="pointer"
                    boxSize="56px"
                    src="linkedin.png"
                    alt=""
                  />
                </Link>
                <Link
                  isExternal
                  href="https://www.instagram.com/sxcintersummit/"
                >
                  <Image
                    cursor="pointer"
                    boxSize="56px"
                    src="instagram.png"
                    alt=""
                  />
                </Link>
                <Link isExternal href="https://www.tiktok.com/@sxcintersummit">
                  <Image
                    cursor="pointer"
                    boxSize="56px"
                    src="tiktok.png"
                    alt=""
                  />
                </Link>
              </Flex>
            </Flex>
          )}
        </Box>
      ) : (
        <Box
          overflow="hidden"
          color="white"
          background={() => {
            if (currentPage === "student-ambassadors") {
              return "linear-gradient(180deg, #010431 22.19%, #5D11AB 51.31%, #001048 79.55%), #001048";
            } else {
              return "linear-gradient(180deg, #010431 57.09%, #5C1FAA 100%)";
            }
          }}
          position="relative"
          bgColor="#DADADA"
          minH="100vh"
          minW="100%"
        >
          {hasNavbar && (
            <Box
              zIndex={1}
              bgColor={"#020234"}
              color="white"
              mx="5%"
              h="72px"
              alignItems={"center"}
              w="90%"
              position="sticky"
              className="secondaryFont"
              fontWeight={600}
              display="flex"
              justifyContent={"space-between"}
            >
              <Link href="/">
                <Image src="/logo.svg" alt="" />
              </Link>
              <Box display={"flex"} className="primaryFont" fontWeight={800}>
                <Link marginRight={"48px"} href="/">
                  <Text color={"#F8C800"}>Home</Text>
                </Link>
                <Link marginRight={"48px"} href="/about">
                  <Text color={"#ffffff"}>About</Text>
                </Link>
                <Menu>
                  <MenuButton
                    marginRight={"48px"}
                    className="primaryFont"
                    fontWeight={800}
                  >
                    Events
                    <ChevronDownIcon />
                  </MenuButton>
                  <MenuList
                    color="#FFFFFF"
                    bgColor="#020234"
                    borderRadius="12px"
                    borderStyle="none"
                  >
                    <MenuItem
                      className="primaryFont"
                      fontWeight={800}
                      fontSize="16px"
                      lineHeight={1.2}
                      onClick={() => router.push("/pre-event")}
                    >
                      <Image
                        src="/images/our_events/icon-preevent.png"
                        h="24px"
                        alt=""
                      />
                      <Text ml="20px">Pre-Event</Text>
                    </MenuItem>
                    <MenuItem
                      className="primaryFont"
                      fontWeight={800}
                      fontSize="16px"
                      lineHeight={1.2}
                      onClick={() => router.push("/competition")}
                    >
                      <Image
                        src="/images/our_events/icon-competition.png"
                        h="24px"
                        alt=""
                      />
                      <Text ml="20px">Competition</Text>
                    </MenuItem>
                    <MenuItem
                      className="primaryFont"
                      fontWeight={800}
                      fontSize="16px"
                      lineHeight={1.2}
                      onClick={() => router.push("/chambers")}
                    >
                      <Image
                        src="/images/our_events/icon-chambers.png"
                        h="24px"
                        alt=""
                      />
                      <Text ml="20px">Chambers</Text>
                    </MenuItem>
                    <MenuItem
                      className="primaryFont"
                      fontWeight={800}
                      fontSize="16px"
                      lineHeight={1.2}
                      onClick={() => router.push("/company-visit")}
                    >
                      <Image
                        src="/images/our_events/icon-comvis.png"
                        h="24px"
                        alt=""
                      />
                      <Text ml="20px">Company Visit</Text>
                    </MenuItem>
                    <MenuItem
                      className="primaryFont"
                      fontWeight={800}
                      fontSize="16px"
                      lineHeight={1.2}
                      onClick={() => router.push("/main-conference")}
                    >
                      <Image
                        src="/images/our_events/icon-mainconference.svg"
                        h="24px"
                        alt=""
                      />
                      <Text ml="20px">Main Conference</Text>
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton
                    marginRight={"48px"}
                    className="primaryFont"
                    fontWeight={800}
                  >
                    Partnership
                    <ChevronDownIcon />
                  </MenuButton>
                  <MenuList
                    color="#FFFFFF"
                    bgColor="#020234"
                    borderRadius="12px"
                    borderStyle="none"
                  >
                    <MenuItem
                      className="primaryFont"
                      fontWeight={800}
                      onClick={() =>
                        router.push("/media-and-community-partner")
                      }
                    >
                      Media and Community Partner
                    </MenuItem>
                    <MenuItem
                      className="primaryFont"
                      fontWeight={800}
                      onClick={() => router.push("/student-ambassador")}
                    >
                      Student Ambassador
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Link
                  href={
                    "https://shopee.co.id/sxcinternationalsummit?categoryId=100533&itemId=16573970983"
                  }
                  isExternal
                >
                  <Text
                    color={currentPage === "store" ? "#F8C800" : "#ffffff"}
                    href="/store"
                  >
                    Store
                  </Text>
                </Link>
              </Box>
            </Box>
          )}
          {currentPage === "landing" && (
            <Box zIndex={0}>
              <Image
                minH="1200px"
                minW="1450px"
                top={{
                  base: "calc(100vh + 24px)",
                  md: "calc(100vh + 62px)",
                  lg: "calc(100vh + 100px)",
                }}
                opacity={0.8}
                left={{ base: "-100%", md: "-30%", lg: "0" }}
                position="absolute"
                src="/images/our_events/bg-ourevents.svg"
                alt="wavy bg"
              />
              <Box
                position="relative"
                background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title.png);"
                backgroundSize="cover"
                backgroundPosition="center center"
                h="100vh"
              >
                <Box
                  position="absolute"
                  bottom="0"
                  w="100vw"
                  h="60%"
                  background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"
                ></Box>
                <Jumbotron />
              </Box>
              {/* <Image zIndex={0} opacity={0.3} transform="rotate(20deg)" left={{ base: "-100%", md: "30%", lg: "15%" }} bottom={{ base: "0", lg: "-15%" }} position="absolute" minW="1300px" minH="1400px" src="/bg-partners.png" alt="wavy bg" /> */}
            </Box>
          )}

          {currentPage === "pre-event" && (
            <Box zIndex={0}>
              <Box
                position="relative"
                background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title-sa.png);"
                backgroundSize="cover"
                backgroundPosition="center center"
                h="100vh"
              >
                <Box
                  position="absolute"
                  bottom="0"
                  w="100vw"
                  h="60%"
                  background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"
                ></Box>
                <JumbotronPreEvent
                  title={"Pre Event"}
                  description="A Talk Show session with the professional national speaker. After attending this event, participants are expected to know more about the skill requirement in the 21st century, how to improve productivity by learning basic office software and many more."
                  linkRegis="#register"
                />
              </Box>
            </Box>
          )}

          {currentPage === "chambers" && (
            <Box zIndex={0}>
              <Box
                position="relative"
                background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title-sa.png);"
                backgroundSize="cover"
                backgroundPosition="center center"
                h="100vh"
              >
                <Box
                  position="absolute"
                  bottom="0"
                  w="100vw"
                  h="60%"
                  background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"
                ></Box>
                <JumbotronPreEvent
                  title={"Chambers"}
                  description="Expand your knowledge and networks by joining one of our chambers (FMCG, Consultant, Start-Up, BUMN). Each chamber will discuss a topic with their speakers. After attending this event, participants are expected to know more about the industry and the career path in each industry."
                  linkRegis="#register"
                />
              </Box>
            </Box>
          )}

          {currentPage === "company-visit" && (
            <Box zIndex={0}>
              <Box
                position="relative"
                background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title-sa.png);"
                backgroundSize="cover"
                backgroundPosition="center center"
                h="100vh"
              >
                <Box
                  position="absolute"
                  bottom="0"
                  w="100vw"
                  h="60%"
                  background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"
                ></Box>
                <JumbotronPreEvent
                  title={"Company Visit"}
                  description="Get to know and see the companies of your dreams in our Virtual Company Visit. Gain new insights by seeing companies give their point of view from our curated theme."
                  linkRegis="https://forms.gle/N42pwiJWhQ5ghwNA6"
                />
              </Box>
            </Box>
          )}

          {currentPage === "main-conference" && (
            <Box zIndex={0}>
              <Box
                position="relative"
                background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title-sa.png);"
                backgroundSize="cover"
                backgroundPosition="center center"
                h="100vh"
              >
                <Box
                  position="absolute"
                  bottom="0"
                  w="100vw"
                  h="60%"
                  background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"
                ></Box>
                <JumbotronPreEvent
                  title={"Main Conference"}
                  description="Do not miss the peak event of The SxC International Summit, with enriching Interactive International Talkshow and the Awarding Ceremony from our case competition."
                  linkRegis="https://forms.gle/Uk38Scrca6DbsfuE9"
                />
              </Box>
            </Box>
          )}

          {currentPage === "competition" && (
            <Box zIndex={0}>
              <Box
                position="relative"
                background="linear-gradient(0deg, rgba(31, 0, 63, 0.57) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title-competition.png);"
                backgroundSize="cover"
                backgroundPosition="center center"
                h="100vh"
              >
                <Box
                  position="absolute"
                  bottom="0"
                  w="100vw"
                  h="60%"
                  background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"
                ></Box>
                <JumbotronCompe />
              </Box>
            </Box>
          )}

          {currentPage === "student-ambassadors" && (
            <Box zIndex={0}>
              <Box
                position="relative"
                background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title-sa.png);"
                backgroundSize="cover"
                backgroundPosition="center center"
                h="100vh"
              >
                <Box
                  position="absolute"
                  bottom="0"
                  w="100vw"
                  h="60%"
                  background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"
                ></Box>
                <JumbotronSA />
              </Box>
            </Box>
          )}

          <Box zIndex={0} style={{ zIndex: 0 }}>
            {currentPage === "mediaPartner" && (
              <Box>
                {/* <Image
                                    zIndex={0}
                                    h="982px"
                                    minW="978px"
                                    top={{
                                        base: "calc(100vh + 24px)",
                                        md: "calc(100vh + 62px)",
                                        lg: "calc(100vh + 100px)",
                                    }}
                                    opacity={0.8}
                                    left={{ base: "-200%", md: "-30%", lg: "-5%" }}
                                    position="absolute"
                                    src="/bg-partnership.svg"
                                    alt="wavy bg"
                                /> */}
                <Box
                  position="relative"
                  background="linear-gradient(0deg, rgba(2, 2, 52, 0.2), rgba(2, 2, 52, 0.2)), linear-gradient(180deg, rgba(105, 0, 214, 0.34) 0%, rgba(151, 223, 255, 0.17) 100%, rgba(151, 223, 255, 0.64) 100%), url(/title-mediapartner.png);"
                  backgroundSize="cover"
                  backgroundPosition="center center"
                  h="100vh"
                >
                  <Box
                    position="absolute"
                    bottom="0"
                    w="100vw"
                    h="60%"
                    background="linear-gradient(to top, #020234 6.44%, rgba(46, 111, 140, 0) 85.63%)"
                  ></Box>
                  <JumbotronMedpar />
                </Box>
                {/* <Image zIndex={0} opacity={0.3} transform="rotate(20deg)" left={{ base: "-100%", md: "30%", lg: "15%" }} bottom={{ base: "0", lg: "-15%" }} position="absolute" minW="1300px" minH="1400px" src="/bg-partners.png" alt="wavy bg" /> */}
              </Box>
            )}
          </Box>

          <Box
            zIndex={9999999}
            bgRepeat="no-repeat"
            bgPosition={() => {
              if (currentPage === "mediaPartner") {
                return "url('/bg-partners.png')";
              }
            }}
            bgImage={() => {
              if (currentPage === "mediaPartner") {
                return "url('/bg-partnership.svg')";
              }
            }}
            h="fit-content"
            px={{ base: "5%", md: "10%" }}
          >
            {/* <Image
                            zIndex={0}
                            h="982px"
                            minW="978px"
                            top={{
                                base: "calc(100vh + 24px)",
                                md: "calc(100vh + 62px)",
                                lg: "calc(100vh + 100px)",
                            }}
                            opacity={0.8}
                            left={{ base: "-200%", md: "-30%", lg: "-5%" }}
                            position="absolute"
                            src="/bg-partnership.svg"
                            alt="wavy bg"
                        /> */}
            <Box zIndex={1}>{children}</Box>
          </Box>

          {hasFooter && (
            <Box
              zIndex={2}
              bgColor="#020234"
              color="white"
              w="full"
              className="primaryFont"
              fontWeight={500}
              lineHeight="150%"
              py="36px"
              px="120px"
            >
              <Box display="flex" mb="10px">
                <Image
                  src="/logo.svg"
                  maxW="158px"
                  objectFit="contain"
                  mr="36px"
                  alt=""
                />
                <Text maxW="330" fontSize="12px">
                  {" "}
                  SxC InterSummit is a Grand Event organized by StudentsxCEOs
                  Jakarta consisting of a sequence of Pre-Event, PBC, Chambers,
                  Virtual Company Visit, & Main Conference.{" "}
                </Text>
              </Box>
              <Flex my="4px">
                <Spacer />
                <Link
                  isExternal
                  href="https://www.linkedin.com/company/studentsxceos-summit/"
                >
                  <Image
                    cursor="pointer"
                    boxSize="56px"
                    src="/linkedin.png"
                    alt=""
                  />
                </Link>
                <Link
                  isExternal
                  href="https://www.instagram.com/sxcintersummit/"
                >
                  <Image
                    cursor="pointer"
                    boxSize="56px"
                    src="/instagram.png"
                    alt=""
                  />
                </Link>
                <Link isExternal href="https://www.tiktok.com/@sxcintersummit">
                  <Image
                    cursor="pointer"
                    boxSize="56px"
                    src="/tiktok.png"
                    alt=""
                  />
                </Link>
              </Flex>
              <Flex fontSize="16px">
                <Text>© StudentsxCEOs International Summit 2022</Text>
                <Spacer />
                <Text fontStyle="italic">#FindYourPathTakeTheLead</Text>
              </Flex>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

export default Layout;
