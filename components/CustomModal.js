import { Modal, Flex, Box, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Text, Button } from "@chakra-ui/react";

const CustomModal = ({
    isOpen,
    onClose,
    onOpen,
    hasBackButton,
    backButtonText,
    hasNextButton,
    nextButtonText,
    title,
    body,
    backButtonClick,
    additionalText,
    nextButtonClick
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}>
            <ModalOverlay />
            <ModalContent
                borderRadius="20px" bgColor="#020234" w="100%">
                <ModalBody
                    p="40px 20px" w="100%" textAlign="center">
                    <Text color="#F8C800"
                        fontSize="32px"
                        lineHeight={1.2}
                        fontWeight={800}
                        className="primaryFont"
                    >
                        {title}
                    </Text>
                    <Text mt="16px"
                        color="#FFFFFF"
                        className="secondaryFont"
                        fontWeight={500}
                        fontSize="16px"
                        lineHeight={1.5}>{body}</Text>
                    {additionalText && <Box mt="16px">
                        {additionalText.map((text, index) => {
                            return (
                                <Text
                                    className="secondaryFont"
                                    color="#FFFFFF"
                                    fontWeight={500}
                                    fontSize="16px"
                                    lineHeight={1.5}
                                    key={index}>{text}</Text>
                            )
                        }
                        )}
                    </Box>}

                    <Flex justify="center" flexDirection={{ base: "column", md: "row-reverse" }} gap="16px" mt="16px">
                        {hasNextButton && <Button
                            borderRadius="4px"
                            bgColor="#5D11AB"
                            p="10px 24px"
                            color="white"
                            fontWeight={700}
                            fontSize="16px"
                            lineHeight={1.5}
                            className="primaryFont"
                            onClick={nextButtonClick}>
                            {nextButtonText}
                        </Button>}
                        {hasBackButton && <Button
                            borderRadius="4px"
                            bgColor="transparent"
                            p="10px 24px"
                            color="white"
                            fontWeight={700}
                            border="2.5px solid #5D11AB"
                            fontSize="16px"
                            lineHeight={1.5}
                            className="primaryFont"
                            onClick={backButtonClick}>
                            {backButtonText}
                        </Button>}
                    </Flex>

                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default CustomModal;