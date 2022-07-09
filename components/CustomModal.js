import { Modal, Box, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Text, Button } from "@chakra-ui/react";

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
                        className="secondaryFont"
                        fontWeight={500}
                        fontSize="16px"
                        lineHeight={1.5}>{body}</Text>
                    {additionalText && <Box mt="16px">
                        {additionalText.map((text, index) => {
                            return (
                                <Text
                                    className="secondaryFont"
                                    fontWeight={500}
                                    fontSize="16px"
                                    lineHeight={1.5}
                                    key={index}>{text}</Text>
                            )
                        }
                        )}
                    </Box>}

                    {hasNextButton && <Button
                        mt="16px"
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

                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default CustomModal;