import { Box, Text, Button, Flex, Icon, Link } from "@chakra-ui/react";
import { FaShoppingCart } from 'react-icons/fa'
const Merch = () => {
    return (
        <Box px={{ base: "12px", md: "auto" }} my={{ base: "110px", md: "171px", lg: "232px" }} position="relative" borderRadius="8px" backgroundSize="cover" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" pb={{ base: "30px", md: "70px" }} pt="90px" className="primaryFont" backgroundImage="url(./merch-bg.png)" backgroundRepeat="no-repeat" backgroundPosition="center">
            <Text mt={{ base: "60%", md: "auto" }} ml={{ base: "auto", md: "60%" }} w={{ base: "75%", md: "30%" }} fontSize={{ base: "48px", md: "56px", lg: "64px" }} lineHeight={1.2} fontWeight={800} className="gradientText">
                Check Out Our Merch
            </Text>
            <Link href={"https://shopee.co.id/sxcinternationalsummit?categoryId=100533&itemId=16573970983"} isExternal>
                <Button color="white" mt={{ base: "12px", md: "36px" }} borderRadius="5px" bgColor="rgba(93, 17, 171, 1)" w={{ base: "full", md: "auto" }} ml={{ base: "auto", md: "60%" }} p="23px">
                    <Flex align="center" justify="center">
                        <Icon h="24px" w="24px" as={FaShoppingCart} />
                        <Text ml={{ base: "5px", md: "10px" }} fontWeight={700} fontSize={{ base: "16px", md: "20px" }} lineHeight={1.5}>Shop now</Text>
                    </Flex>
                </Button>
            </Link>

        </Box>
    )
}
export default Merch;