import { Flex, Box, Divider, Stack, StackDivider, Text } from "@chakra-ui/react"
import Image from "next/image"
import current from "../public/stepper/current.png"
import completed from "../public/stepper/completed.png"
import uncompleted from "../public/stepper/uncompleted.png"
const Stepper = ({ steps, currentStep }) => {
    return (
        <Stack
            mt="44px"
            mx="auto"
            maxW="720px"
            // overflow="auto"
            direction="row"
            align="flex-start"
            justifyContent="space-between"
            divider={<StackDivider className="stepDivider" h="100px" borderColor="#C4C4C4" dir="row" transform="rotate(90deg) translateX(-32px)" />}
        >
            {steps.map((step, index) => {
                if (index + 1 < currentStep) {
                    return (
                        <Flex maxW="120px" key={index} direction="column">
                            <Flex justify="center">
                                <Image src={completed} alt="" width="36px" height="36px" />
                            </Flex>
                            <Text fontWeight={800} fontSize="16px" lineHeight={1.2} className="primaryFont" mt="12px" textAlign="center">
                                {step}
                            </Text>
                        </Flex>
                    )
                } else if (index + 1 === currentStep) {
                    return (
                        <Flex maxW="120px" key={index} direction="column" justify="center">
                            <Flex justify="center">
                                <Image src={current} alt="" width="36px" height="36px" />
                            </Flex>
                            <Text textAlign="center" fontWeight={800} fontSize="16px" lineHeight={1.2} className="primaryFont" mt="12px">
                                {step}
                            </Text>
                        </Flex>
                    )
                } else {
                    return (
                        <Flex maxW="120px" key={index} direction="column" justify="center">
                            <Flex justify="center">
                                <Image src={uncompleted} alt="" width="36px" height="36px" />
                            </Flex>
                            <Text textAlign="center" fontWeight={800} fontSize="16px" lineHeight={1.2} className="primaryFont" mt="12px">
                                {step}
                            </Text>
                        </Flex>
                    )
                }
            })}
        </Stack>
    )
}
export default Stepper