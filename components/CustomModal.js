import { Modal, Box, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Text } from "@chakra-ui/react";

const CustomModal = ({
    isOpen,
    onClose,
    onOpen,
    hasBackButton,
    backButtonText,
    nextButtonText,
    title,
    body,
    additionalText }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}>
            <ModalOverlay />
            <ModalContent
                borderRadius="20px" bgColor="#020234" w="100%">
                <ModalBody
                    p="20px 40px" w="100%" textAlign="center">
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

                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default CustomModal;