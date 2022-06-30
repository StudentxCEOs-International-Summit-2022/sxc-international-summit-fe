import { Flex, Spacer, Box, Text, Square, Center, Image, Button, Grid, GridItem, Container, Stack, HStack, VStack } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useState } from "react"
import { useWindowSize } from "../hooks/useWindowSize";

const ourEvents = () => {
    const { width } = useWindowSize()
    const isMobile = width < 768
    const ourEvents = [
        {
            id : 0, 
            heading : "Pre-Event", 
            date : "13 August", 
            caption: `Ini caption untuk Pre-Event. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras tempor viverra rutrum. Duis vel ornare elit. In aliquet arcu ut risus facilisis, eget blandit arcu fermentum.`, 
            url: "#",
            btn_icon: "/images/our_events/icon-preevent.png",
            pict: "/images/our_events/pict-preevent.png"
        },
        {
            id : 1, 
            heading : "Competition", 
            date : "21 August - 22 October", 
            caption: `Ini caption untuk Competition. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras tempor viverra rutrum. Duis vel ornare elit. In aliquet arcu ut risus facilisis, eget blandit arcu fermentum.`, 
            url: "#",
            btn_icon: "/images/our_events/icon-competition.png",
            pict: "/images/our_events/pict-preevent.png"
        },
        {
            id : 2, 
            heading : "Chambers", 
            date : "22 October", 
            caption: `Ini caption untuk Chambers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras tempor viverra rutrum. Duis vel ornare elit. In aliquet arcu ut risus facilisis, eget blandit arcu fermentum.`, 
            url: "#",
            btn_icon: "/images/our_events/icon-chambers.png",
            pict: "/images/our_events/pict-preevent.png"
        },
        {
            id : 3, 
            heading : "Company Visit", 
            date : "22 October", 
            caption: `Ini caption untuk Company Visit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras tempor viverra rutrum. Duis vel ornare elit. In aliquet arcu ut risus facilisis, eget blandit arcu fermentum.`, 
            url: "#",
            btn_icon: "/images/our_events/icon-comvis.png",
            pict: "/images/our_events/pict-preevent.png"
        },
        {
            id : 4, 
            heading : "Main Conference", 
            date : "29 October", 
            caption: `Ini caption untuk Main Conference. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras tempor viverra rutrum. Duis vel ornare elit. In aliquet arcu ut risus facilisis, eget blandit arcu fermentum.`, 
            url: "#",
            btn_icon: "/images/our_events/icon-mainconference.png",
            pict: "/images/our_events/pict-preevent.png"
        },
    ];

    const [activeId, setActiveId] = useState(ourEvents[0].id);
    
    return(
        <Box>
            <Center  className="primaryFont" h='77px' fontSize={['32px', '48px', '48px','64px']}>
                Our Events
            </Center>
            {isMobile? 
                <VStack spacing='27px'>
                    {/* view untuk mobile */}
                    { ourEvents.map((el, idx) => (
                        <Flex
                            flexDirection='column'
                            p='24px 36px'
                            bgColor='#001048'
                            borderRadius='16px'
                            justify='center'>
                            <Image 
                                maxH='196px'
                                src={ ourEvents[idx].pict }
                                objectFit='scale-down'
                                mb='16px'/>
                            <Flex
                                className="primaryFont" 
                                direction={{base:"column"}}
                                justify='space-between'>
                                <Text fontSize={['24px', '32px', '40px', '48px']} background='linear-gradient(180deg, #F8C800 0%, #FF6941 100%)' mb='6px'> { ourEvents[idx].heading } </Text>
                                <Text fontSize={['12px', '16px', '20px', '24px']} color='#ffffff' mb='16px'> { ourEvents[idx].caption } </Text>
                                <Box 
                                    as='button' 
                                    bgColor='#5d11ab' 
                                    color='#ffffff' 
                                    borderRadius='4px' 
                                    p='10px 24px 10px 24px'
                                    fontSize='16px'>
                                    <span>See more</span>
                                    <ChevronRightIcon float='right'/>
                                </Box>
                            </Flex>
                        </Flex>
                    )) }
                </VStack> :
                <Box>
                    {/* view untuk desktop (dan tablet?) */}

                    {/* Gambar, titel, caption, button see more */}
                    <Grid 
                        templateColumns='repeat(2, 1fr)'
                        bgColor='#001048'
                        p='40px 36px 40px 36px'
                        borderRadius='16px'
                        gap='20px'
                        alignItems='center'>
                        <GridItem>
                            <Image
                                src={ ourEvents[activeId].pict }
                                objectFit='scale-down'/>
                        </GridItem>
                        <GridItem>
                            <Flex
                                h='100%'
                                className="primaryFont" 
                                direction={{base:"column"}}
                                justify='space-between'>
                                <Text fontSize={['24px', '32px', '40px', '48px']} background='linear-gradient(180deg, #F8C800 0%, #FF6941 100%)' mb='6px'> { ourEvents[activeId].heading } </Text>
                                <Text fontSize={['12px', '16px', '20px', '24px']} color='#ffffff' mb='6px'> { ourEvents[activeId].caption } </Text>
                                <Box 
                                    as='button' 
                                    bgColor='#5d11ab' 
                                    color='#ffffff' 
                                    borderRadius='4px' 
                                    p='10px 24px 10px 24px'
                                    fontSize='16px'
                                    maxW='218px'>
                                    <span>See more</span>
                                    <ChevronRightIcon float='right'/>
                                </Box>
                            </Flex>
                        </GridItem>
                    </Grid>

                    {/* 5 button events */}
                    <Grid w='100%' justify='space-between' templateColumns='repeat(5, 1fr)' justifyItems='center' alignItems='baseline' mt='20px'>
                        { ourEvents.map((el, idx) => (
                            <GridItem
                                key={idx}
                                onClick={() => setActiveId(idx)}>
                                    <Flex w='fit-content' align='center' flexDirection='column'>
                                        <Image 
                                            borderRadius='full'
                                            // ini bingung bagi kasus per breakpoint nya:
                                            boxSize={idx===activeId? '100px' : '78px'}
                                            bgColor='#0fa1db'
                                            src={el.btn_icon}
                                            objectFit='scale-down'/>
                                        <Text className="primaryFont" fontSize={['12px', '16px', '20px', '24px']}>{el.heading}</Text>
                                        <Text className="primaryFont" fontSize={['12px', '12px', '12px', '16px']}>{el.date}</Text>
                                    </Flex>
                            </GridItem>
                        )) }
                    </Grid>
                </Box>
            }
        </Box>
    );
}

export default ourEvents