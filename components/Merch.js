import { Box, Text, Button, Flex, Icon } from "@chakra-ui/react";
import { FaShoppingCart } from 'react-icons/fa'
const Merch = () => {
    return (
        <Box mt="232px" position="relative" borderRadius="8px" backgroundSize="cover" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" pb="70px" pt="90px" className="primaryFont" backgroundImage="url(./merch-bg.png)" backgroundRepeat="no-repeat" backgroundPosition="center">
                <Text ml="60%" w="30%" fontSize="64px" lineHeight={1.2} fontWeight={700} className="gradientText">
                    Check Out Our Merch
                </Text>
                <Button mt="36px" borderRadius="5px" bgColor="rgba(93, 17, 171, 1)" ml="60%" p="23px">
                    <Flex align="center" justify="center">
                        <Icon h="32px" w="32px" as={FaShoppingCart} />
                        <Text ml="10px" fontWeight={700} fontSize="20px" lineHeight={1.5}>Shop now</Text>
                    </Flex>
                </Button>
        </Box>
    )
}
export default Merch;