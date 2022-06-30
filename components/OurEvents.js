import { Flex, Spacer, Box, Text, Square, Center, Image, Button, Grid, GridItem, Container, Circle, HStack, VStack, Wrap } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useState, useEffect } from "react"
import { useWindowSize } from "../hooks/useWindowSize";
import styles from "../styles/ourevents.module.scss"

const OurEvents = () => {
    const [activeId, setActiveId] = useState(0);
    const { width } = useWindowSize()
    const isMobile = width < 768
    const isTablet = width < 1024

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 3000);
        setActiveId((activeId + 1) % 5)
        return () => {
            clearInterval(interval);
        };
    }, [time]);

    const ourEvents = [
        {
            id: 0,
            heading: "Pre-Event",
            date: "13 August",
            caption: `Ini caption untuk Pre-Event. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras tempor viverra rutrum. Duis vel ornare elit. In aliquet arcu ut risus facilisis, eget blandit arcu fermentum.`,
            url: "#",
            btn_icon: "/images/our_events/icon-preevent.png",
            pict: "/images/our_events/pict-preevent.png"
        },
        {
            id: 1,
            heading: "Competition",
            date: "21 August - 22 October",
            caption: `Ini caption untuk Competition. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras tempor viverra rutrum. Duis vel ornare elit. In aliquet arcu ut risus facilisis, eget blandit arcu fermentum.`,
            url: "#",
            btn_icon: "/images/our_events/icon-competition.png",
            pict: "/images/our_events/pict-preevent.png"
        },
        {
            id: 2,
            heading: "Chambers",
            date: "22 October",
            caption: `Ini caption untuk Chambers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras tempor viverra rutrum. Duis vel ornare elit. In aliquet arcu ut risus facilisis, eget blandit arcu fermentum.`,
            url: "#",
            btn_icon: "/images/our_events/icon-chambers.png",
            pict: "/images/our_events/pict-preevent.png"
        },
        {
            id: 3,
            heading: "Company Visit",
            date: "22 October",
            caption: `Ini caption untuk Company Visit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras tempor viverra rutrum. Duis vel ornare elit. In aliquet arcu ut risus facilisis, eget blandit arcu fermentum.`,
            url: "#",
            btn_icon: "/images/our_events/icon-comvis.png",
            pict: "/images/our_events/pict-preevent.png"
        },
        {
            id: 4,
            heading: "Main Conference",
            date: "29 October",
            caption: `Ini caption untuk Main Conference. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras tempor viverra rutrum. Duis vel ornare elit. In aliquet arcu ut risus facilisis, eget blandit arcu fermentum.`,
            url: "#",
            btn_icon: "/images/our_events/icon-mainconference.png",
            pict: "/images/our_events/pict-preevent.png"
        },
    ];

    return (
        <Box position="relative">
            <Center h='77px' >
                <Text className="primaryFont" fontWeight={800} fontSize={['32px', '48px', '48px', '64px']}>
                    Our Events
                </Text>
            </Center>
            {isMobile ?
                <VStack mt="15px" spacing='27px'>
                    {/* view untuk mobile */}
                    {ourEvents.map((el, idx) => (
                        <Flex
                            key={el.id}
                            flexDirection='column'
                            p='24px 10px'
                            bgColor='#001048'
                            borderRadius='16px'
                            justify='center'>
                            <Image
                                src={ourEvents[idx].pict}
                                objectFit='scale-down'
                                mx='8px'
                                mb='12px'
                                alt=""
                                className="gradientBorder" />
                            <Flex
                                className="primaryFont"
                                direction={{ base: "column" }}
                                justify='space-between'
                                mt="12px">
                                <Text fontSize={['24px', '32px', '40px', '48px']} className="gradientText" mx='6px' mb='6px' fontWeight={700} lineHeight={1.5}> {ourEvents[idx].heading} </Text>
                                <Text fontSize={['12px', '16px', '20px', '24px']} color='#ffffff' mx='6px' mb='16px' fontWeight={500} lineHeight={1.5}> {ourEvents[idx].caption} </Text>
                                <Flex
                                    as='button'
                                    bgColor='#5d11ab'
                                    color='#ffffff'
                                    borderRadius='4px'
                                    p='10px 24px 10px 24px'
                                    fontSize='16px'
                                    align="center"
                                    justify="center"
                                    position="relative"
                                    mt="12px">
                                    <Text fontWeight={700} fontSize="16px" lineHeight={1.5}>See more</Text>
                                    <ChevronRightIcon right="16px" position="absolute" />
                                </Flex>
                            </Flex>
                        </Flex>
                    ))}
                </VStack> :
                <Box mt="78px">
                    {/* view untuk desktop dan tablet */}

                    {/* Gambar, titel, caption, button see more */}
                    <Grid
                        templateColumns='repeat(2, 1fr)'
                        bgColor='#001048'
                        p='40px 36px 40px 36px'
                        borderRadius='16px'
                        gap='20px'
                        alignItems='center'>
                        <GridItem>
                            <Center>
                                <Image
                                    zIndex={1}
                                    className="gradientBorder"
                                    src={ourEvents[activeId].pict}
                                    objectFit='scale-down'
                                    alt="" />
                            </Center>
                        </GridItem>
                        <GridItem>
                            <Flex
                                h='100%'
                                className="primaryFont"
                                direction={{ base: "column" }}
                                justify='space-between'>
                                <Text fontSize={['24px', '32px', '40px', '48px']} lineHeight={1.2} fontWeight={700} className="gradientText" mb='16px'> {ourEvents[activeId].heading} </Text>
                                <Text fontSize={['12px', '16px', '20px', '24px']} fontWeight={500} lineHeight={1.5} color='#ffffff' mb='16px'> {ourEvents[activeId].caption} </Text>
                                <Button
                                    as='button'
                                    bgColor='#5d11ab'
                                    color='#ffffff'
                                    borderRadius='4px'
                                    p='12px 30px'
                                    fontSize='16px'
                                    w="fit-content"
                                    align="center"
                                    _hover={{ "backgroundColor": "purple.800" }}>
                                    <span>See more</span>
                                    <ChevronRightIcon ml="24px" float='right' />
                                </Button>
                            </Flex>
                        </GridItem>
                    </Grid>

                    {/* 5 button events */}
                    <Grid position="relative" w='100%' justify='space-between' templateColumns='repeat(5, 1fr)' justifyItems='center' alignItems='baseline' mt='20px'>
                        {ourEvents.map((el, idx) => (
                            <GridItem
                                key={idx}
                                onClick={() => setActiveId(idx)}>
                                <Flex w='fit-content' align='center' flexDirection='column'>
                                    <Circle
                                        p="15px"
                                        className={idx === activeId ? styles.activebutton : styles.inactivebutton}>
                                        <Image
                                            borderRadius={'100%'}
                                            h={() => {
                                                if (idx === activeId) {
                                                    if (isTablet) {
                                                        return '48px'
                                                    } else {
                                                        return '60px'
                                                    }
                                                } else {
                                                    if (isTablet) {
                                                        return '40px'
                                                    } else {
                                                        return '48px'
                                                    }
                                                }
                                            }}
                                            src={el.btn_icon}
                                            objectFit='scale-down'
                                            alt=""
                                            className={idx === activeId ? styles.activebuttonimg : styles.inactivebuttonimg} />
                                    </Circle>
                                    <Text mt={isTablet ? "50px" : "70px"} className="primaryFont" textAlign="center" fontSize={['12px', '16px', '20px', '24px']} color='#ffffff'>{el.heading}</Text>
                                    <Text className="primaryFont" textAlign="center" fontSize={['12px', '12px', '12px', '16px']} color='#ffffff'>{el.date}</Text>
                                </Flex>
                            </GridItem>
                        ))}
                        <Image w="full" top={isTablet ? "100px" : "120px"} position="absolute" src="/images/our_events/timeline.svg" alt="" />
                    </Grid>
                </Box>
            }
        </Box>
    );
}

export default OurEvents