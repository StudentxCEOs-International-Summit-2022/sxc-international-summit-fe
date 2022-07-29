import {
    FormLabel,
    FormHelperText,
    Link,
    Text,
    Box,
    Divider,
    Flex,
    FormControl,
    Input,
    Button,
    UnorderedList,
    ListItem,
    useDisclosure,
    Center,
    Image
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Layout from "../../../components/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Stepper from "../../../components/Stepper";
import CustomModal from "../../../components/CustomModal";
import axios from "axios";

const RegisterPage = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [savedData, setSavedData] = useState(null)
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        defaultValues: savedData
    })

    useEffect(() => {
        if (typeof window !== "undefined") {
            setSavedData(JSON.parse(localStorage?.getItem("registrationData")) || null)
            reset(JSON.parse(localStorage?.getItem("registrationData")) || null)
        }
    }, [reset])



    const onChangePage = data => {
        setCurrentStep(currentStep + 1)
        setSavedData(data)
        localStorage.setItem("registrationData", JSON?.stringify(data))
    }

    const onSubmit = data => {
        for (const key in data) {
            if (data[key] === "") {
                data[key] = "-"
            }
        }
        localStorage.setItem("registrationData", JSON?.stringify(data))

            axios.post("https://sxc-be-22.herokuapp.com/api/daftarPreEvent", data).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                localStorage.removeItem("registrationData")
                reset()
                router.push("/pre-event")
            })
    }

    const steps = [
        "Registration",
        "Confirmation",
        "Done"
    ]

    return (
        <>
            <Layout hasNavbar hasFooter>
                <NextLink href="/pre-event">
                    <Link display="flex"
                        align="center"
                        p={2}>
                        <ChevronLeftIcon color="white" w="24px" h="24px" />
                        <Text color="white" fontWeight={700} className="primaryFont" fontSize="16px" lineHeight={1.5} ml="8px">
                            Go to main page
                        </Text>
                    </Link>
                </NextLink>
                <Stepper steps={steps} currentStep={currentStep} />
                {(() => {
                    if (currentStep === 1) {
                        return (
                            <Box
                                color="white"
                                my="66px"
                                position="relative"
                                bgColor="#020234"
                                w="100%"
                                borderRadius="20px"
                                border="2px solid #5D11AB"
                                boxShadow="inset 0px 4px 4px #5D11AB"
                            >
                                <Flex w="full" justify="center">
                                    <Box my="36px"
                                        color="white"
                                        className="primaryFont"
                                        bgColor="#5D11AB"
                                        border="3px solid #A170FD"
                                        borderRadius="30px"
                                        p="12px 20px"
                                        fontWeight={600}
                                        fontSize="20px"
                                        lineHeight={1.5}>
                                        Registration Data
                                    </Box>
                                </Flex>
                                <Divider orientation="horizontal" />
                                <form id="registerForm">
                                    <FormControl className="primaryFont" key="registerForm" maxW="720px" mx="auto">
                                        <FormLabel
                                            mt="32px"
                                            htmlFor="name"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Full Name`}
                                        </FormLabel>
                                        <Input
                                            mt="8px"
                                            {...register("full_name", { required: true })}
                                            id="name"
                                            placeholder="Ex: John Doe" />
                                        <FormHelperText fontWeight={500}>
                                            Make sure this is match with your student ID Card
                                        </FormHelperText>


                                        <FormLabel
                                            mt="32px"
                                            htmlFor="email"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Email`}
                                        </FormLabel>
                                        <Input
                                            mt="8px"
                                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                            id="email"
                                            placeholder="Ex: Johndoe123@domain.com " />
                                        <FormHelperText fontWeight={500}>
                                            Make sure this email is active. You will receive every information of your registration through this email.
                                        </FormHelperText>

                                        <FormLabel
                                            mt="32px"
                                            htmlFor="phoneNumber"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Phone Number`}
                                        </FormLabel>
                                        <Input
                                            mt="8px"
                                            {...register("phoneNumber", { required: true })}
                                            id="phoneNumber"
                                            placeholder="Ex: +6281234567890" />


                                        <FormLabel
                                            mt="32px"
                                            htmlFor="institution"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Institution`}
                                        </FormLabel>
                                        <Input
                                            mt="8px"
                                            {...register("institution", { required: true })}
                                            id="institution"
                                            placeholder="Ex: Universitas Indonesia" />


                                        <FormLabel
                                            mt="32px"
                                            htmlFor="major"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Major`}
                                        </FormLabel>
                                        <Input
                                            mt="8px"
                                            {...register("major", { required: true })}
                                            id="major"
                                            placeholder="Ex: Computer science" />

                                        <Flex justify="end">
                                            <Button
                                                onClick={handleSubmit(onChangePage)}
                                                mb="24px"
                                                mt="42px"
                                                borderRadius="4px"
                                                bgColor="#5D11AB"
                                                p="10px 24px"
                                                color="white"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                                className="primaryFont"
                                                isDisabled={Object.keys(errors).length !== 0}>
                                                Next
                                            </Button>
                                        </Flex>

                                    </FormControl>
                                </form>
                            </Box>
                        )

                    } else if (currentStep === 2) {
                        return (
                            <Box color="white">
                                <Box
                                    mt="24px"
                                    position="relative"
                                    bgColor="#020234"
                                    w="100%"
                                    mx="auto"
                                    borderRadius="20px"
                                    border="2px solid #5D11AB"
                                    boxShadow="inset 0px 4px 4px #5D11AB"
                                    maxW="600px">
                                    <Flex w="full" justify="center">
                                        <Box my="36px"
                                            className="primaryFont"
                                            bgColor="#5D11AB"
                                            border="3px solid #A170FD"
                                            borderRadius="30px"
                                            p="12px 20px"
                                            fontWeight={600}
                                            fontSize="20px"
                                            lineHeight={1.5}>
                                            Confirm Your Identity
                                        </Box>
                                    </Flex>
                                    <Divider orientation="horizontal" />
                                    <Box mb="50px" mx="64px">
                                        <Text
                                            mt="32px"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Name`}<br />{savedData?.["full_name"]}
                                        </Text>

                                        <Text
                                            mt="32px"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Email`}<br />{savedData?.["email"]}
                                        </Text>

                                        <Text
                                            mt="32px"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Phone Number`}<br />{savedData?.["phoneNumber"]}
                                        </Text>

                                        <Text
                                            mt="32px"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Institution`}<br />{savedData?.["institution"]}
                                        </Text>

                                        <Text
                                            mt="32px"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Major`}<br />{savedData?.["major"]}
                                        </Text>
                                    </Box>
                                </Box>
                                <Flex mt="32px" maxW="440px" mx="auto" justify="space-between">
                                    <Button
                                        onClick={() => setCurrentStep(currentStep - 1)}
                                        mb="24px"
                                        mt="42px"
                                        borderRadius="4px"
                                        border="2.5px solid #5D11AB"
                                        p="10px 24px"
                                        color="white"
                                        fontWeight={700}
                                        fontSize="16px"
                                        lineHeight={1.5}
                                        className="primaryFont"
                                        variant="outline"
                                        bg="transparent">
                                        Previous
                                    </Button>
                                    <Button
                                        onClick={() => setCurrentStep(currentStep + 1)}
                                        mb="24px"
                                        mt="42px"
                                        borderRadius="4px"
                                        bgColor="#5D11AB"
                                        p="10px 24px"
                                        color="white"
                                        fontWeight={700}
                                        fontSize="16px"
                                        lineHeight={1.5}
                                        variant="solid"
                                        className="primaryFont">
                                        Next
                                    </Button>
                                </Flex>
                            </Box>
                        )
                    } else if (currentStep === 3) {
                        return (
                            <Box
                                my="24px"
                                position="relative"
                                bgColor="#020234"
                                w="100%"
                                mx="auto"
                                borderRadius="20px"
                                border="2px solid #5D11AB"
                                boxShadow="inset 0px 4px 4px #5D11AB"
                                maxW="700px">
                                <Flex w="full" justify="center">
                                    <Box my="36px"
                                        className="primaryFont"
                                        bgColor="#5D11AB"
                                        border="3px solid #A170FD"
                                        borderRadius="30px"
                                        p="12px 20px"
                                        fontWeight={600}
                                        fontSize="20px"
                                        lineHeight={1.5}>
                                        Check Your Inbox
                                    </Box>
                                </Flex>
                                <Divider orientation="horizontal" />
                                <Box mb="50px" p="24px" mx="64px" textAlign="center">
                                    <Text fontWeight={800}
                                        fontSize="32px"
                                        lineHeight={1.2}
                                        className="primaryFont">Registration Completed</Text>

                                    <Text
                                        className="primaryFont"
                                        fontWeight={800}
                                        fontSize="24px"
                                        lineHeight={1.2}
                                        color="#F8C800"
                                        mt="16px"
                                    >
                                        Please check your email for a confirmation link.
                                    </Text>
                                    <Center
                                        color="white"
                                        className="primaryFont"
                                        fontSize={{ base: "16px", md: "24px" }}
                                        fontWeight="700"
                                        lineHeight="150%"
                                        pt="28px"
                                        pb="26px"
                                        textAlign="center"
                                    >
                                        If you require any further information, please contact:
                                    </Center>

                                    <Center
                                        color="white"
                                        className="primaryFont"
                                        fontSize={{ base: "16px", md: "24px" }}
                                        fontWeight="500"
                                        lineHeight="150%"
                                        textAlign="center"
                                        pb="26px"
                                    >
                                        {" "}
                                        <Image
                                            w="36px"
                                            h="36px"
                                            src={"/dashicons_whatsapp.svg"}
                                            mr="17.5px"
                                            alt="Whatsapp icon"
                                        />
                                        <Text> Fauzan - +6285735509685 (fauuzaann)</Text>
                                    </Center>
                                    <Center
                                        color="white"
                                        className="primaryFont"
                                        fontSize={{ base: "16px", md: "24px" }}
                                        fontWeight="500"
                                        lineHeight="150%"
                                        textAlign="center"
                                        pb="26px"
                                    >
                                        {" "}
                                        <Image
                                            w="36px"
                                            h="36px"
                                            src={"/dashicons_whatsapp.svg"}
                                            mr="17.5px"
                                            alt="Whatsapp icon"
                                        />
                                        <Text> Nabila - +6281216670603 (nabilapuspa18)</Text>
                                    </Center>
                                    <Center
                                    >
                                        <Button
                                            onClick={handleSubmit(onSubmit)}
                                            mb="24px"
                                            mt="42px"
                                            borderRadius="4px"
                                            bgColor="#5D11AB"
                                            p="10px 24px"
                                            color="white"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                            variant="solid"
                                            className="primaryFont">
                                            Back to Pre-Event Page
                                        </Button>
                                    </Center>
                                </Box>
                            </Box>
                        )
                    }

                })()}
            </Layout>
        </>
    );
}

export default RegisterPage;