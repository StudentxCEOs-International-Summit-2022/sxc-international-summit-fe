import { FormLabel, FormHelperText, Link, Text, Box, Divider, Flex, FormControl, Input, Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Layout from "../../../components/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Stepper from "../../../components/Stepper";

const RegisterPage = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [savedData, setSavedData] = useState(null)
    const router = useRouter
    const query = router.query
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    useEffect(() => {
        if (typeof window !== "undefined") {
            setSavedData(JSON.parse(localStorage.getItem("registrationData")) || null)
        }
    }, [])


    const onSubmit = data => {
        setCurrentStep(currentStep + 1)
        console.log(data);
        setSavedData(data)
        localStorage.setItem("registrationData", JSON.stringify(data))
    }

    const steps = [
        "Team Registration",
        "Team Member Registration",
        "Confirmation",
        "Payment"
    ]

    return (
        <>
            <Layout hasNavbar hasFooter>
                <NextLink href="/competition">
                    <Link display="flex"
                        align="center"
                        p={2}>
                        <ChevronLeftIcon w="24px" h="24px" />
                        <Text fontWeight={700} className="primaryFont" fontSize="16px" lineHeight={1.5} ml="8px">
                            Go to main page
                        </Text>
                    </Link>
                </NextLink>
                <Stepper steps={steps} currentStep={currentStep} />
                {(() => {
                    if (currentStep === 1) {
                        return (
                            <Box
                                mt="66px"
                                position="relative"
                                className="layout"
                                bgColor="#020234"
                                w="100%"
                                borderRadius="20px"
                                border="2px solid #5D11AB"
                                boxShadow="inset 0px 4px 4px #5D11AB"
                            >
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
                                        Join as a Team
                                    </Box>
                                </Flex>
                                <Divider orientation="horizontal" />
                                <form id="registerForm">
                                    <FormControl className="primaryFont" key="registerForm" maxW="720px" mx="auto">
                                        <FormLabel
                                            mt="48px"
                                            htmlFor="teamName"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            Team Name
                                        </FormLabel>
                                        <Input
                                            mt="8px"
                                            {...register("Team Name", { required: true })}
                                            id="teamName"
                                            placeholder="Ex: Fantastic Four" />


                                        <FormLabel
                                            mt="32px"
                                            htmlFor="leaderName"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Team Leader's Name`}
                                        </FormLabel>
                                        <Input
                                            mt="8px"
                                            {...register("Leader Name", { required: true })}
                                            id="LeaderName"
                                            placeholder="Ex: John Doe" />
                                        <FormHelperText fontWeight={500}>
                                            Make sure this is match with your student ID Card
                                        </FormHelperText>


                                        <FormLabel
                                            mt="32px"
                                            htmlFor="leaderEmail"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Team Leader's Email`}
                                        </FormLabel>
                                        <Input
                                            mt="8px"
                                            {...register("Leader Email", { required: true, pattern: /^\S+@\S+$/i })}
                                            id="leaderEmail"
                                            placeholder="Ex: Johndoe123@domain.com " />
                                        <FormHelperText fontWeight={500}>
                                            Make sure this email is active. You will receive every information of your registration through this email.
                                        </FormHelperText>


                                        <FormLabel
                                            mt="32px"
                                            htmlFor="leaderInstitution"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Team Leader's Institution`}
                                        </FormLabel>
                                        <Input
                                            mt="8px"
                                            {...register("Leader Institution", { required: true })}
                                            id="leaderInstitution"
                                            placeholder="Ex: Universitas Indonesia" />


                                        <FormLabel
                                            mt="32px"
                                            htmlFor="leaderMajor"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Team Leader's Major`}
                                        </FormLabel>
                                        <Input
                                            mt="8px"
                                            {...register("Leader Major", { required: true })}
                                            id="leaderMajor"
                                            placeholder="Ex: Computer science" />


                                        <FormLabel
                                            mt="32px"
                                            htmlFor="leaderAddress"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Team Leader's Address`}
                                        </FormLabel>
                                        <Input
                                            mt="8px"
                                            {...register("Leader Address", { required: true })}
                                            id="leaderAddress"
                                            placeholder="Ex: Depok, Jawa Barat" />
                                        <FormHelperText fontWeight={500}>
                                            Just fill with your current city.
                                        </FormHelperText>


                                        <FormLabel
                                            mt="32px"
                                            htmlFor="teamLink"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Team's Google Drive Link`}
                                        </FormLabel>
                                        <Input
                                            mt="8px"
                                            {...register("Team Drive", { required: true })}
                                            id="teamLink"
                                            placeholder="Ex: bit.ly/FantasticFourDrive" />
                                        <FormHelperText fontWeight={500}>
                                            Fill this field with your GDrive folder link containing each individuals student ID, latest photo, proof of follows and twibbon post.
                                            <br />
                                            Main folder name: NamaTeam_Instansi,<br />
                                            Participants folder name: Leader/Member_Nama_Instansi
                                        </FormHelperText>
                                        <Flex justify="end">
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
                            <Box>
                                <FormControl className="primaryFont" key="registerForm" mx="auto">
                                    <Flex justify="center" gap="20px">
                                        <Box
                                            mt="66px"
                                            position="relative"
                                            className="layout"
                                            bgColor="#020234"
                                            w="100%"
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
                                                    Team Member 1
                                                </Box>
                                            </Flex>
                                            <Divider orientation="horizontal" />
                                            <Box mb="50px" mx="64px">
                                                <FormLabel
                                                    mt="32px"
                                                    htmlFor="firstMemberName"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Name`}
                                                </FormLabel>
                                                <Input
                                                    mt="8px"
                                                    {...register("First Member Name", { required: true })}
                                                    id="firstMemberName"
                                                    placeholder="Ex: Fantastic Four" />
                                                <FormHelperText fontWeight={500}>
                                                    Make sure this is match with your student ID Card
                                                </FormHelperText>

                                                <FormLabel
                                                    mt="32px"
                                                    htmlFor="firstMemberInstitution"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Institution`}
                                                </FormLabel>
                                                <Input
                                                    mt="8px"
                                                    {...register("First Member Institution", { required: true })}
                                                    id="firstMemberInstitution"
                                                    placeholder="Ex: Universitas Indonesia" />

                                                <FormLabel
                                                    mt="32px"
                                                    htmlFor="firstMemberMAjor"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Major`}
                                                </FormLabel>
                                                <Input
                                                    mt="8px"
                                                    {...register("First Member Major", { required: true })}
                                                    id="firstMemberMajor"
                                                    placeholder="Ex: Computer science" />

                                                <FormLabel
                                                    mt="32px"
                                                    htmlFor="firstMemberAddress"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Address`}
                                                </FormLabel>
                                                <Input
                                                    mt="8px"
                                                    {...register("First Member Address", { required: true })}
                                                    id="firstMemberAddress"
                                                    placeholder="Ex: Depok, Jawa Barat" />
                                            </Box>

                                        </Box>
                                        <Box
                                            mt="66px"
                                            position="relative"
                                            className="layout"
                                            bgColor="#020234"
                                            w="100%"
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
                                                    Team Member 2
                                                </Box>
                                            </Flex>
                                            <Divider orientation="horizontal" />
                                            <Box mb="50px" mx="64px">
                                                <FormLabel
                                                    mt="32px"
                                                    htmlFor="secondMemberName"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Name`}
                                                </FormLabel>
                                                <Input
                                                    mt="8px"
                                                    {...register("Second Member Name", { required: true })}
                                                    id="secondMemberName"
                                                    placeholder="Ex: Fantastic Four" />
                                                <FormHelperText fontWeight={500}>
                                                    Make sure this is match with your student ID Card
                                                </FormHelperText>

                                                <FormLabel
                                                    mt="32px"
                                                    htmlFor="secondMemberInstitution"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Institution`}
                                                </FormLabel>
                                                <Input
                                                    mt="8px"
                                                    {...register("Second Member Institution", { required: true })}
                                                    id="secondMemberInstitution"
                                                    placeholder="Ex: Universitas Indonesia" />

                                                <FormLabel
                                                    mt="32px"
                                                    htmlFor="secondMemberMAjor"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Major`}
                                                </FormLabel>
                                                <Input
                                                    mt="8px"
                                                    {...register("Second Member Major", { required: true })}
                                                    id="secondMemberMajor"
                                                    placeholder="Ex: Computer science" />

                                                <FormLabel
                                                    mt="32px"
                                                    htmlFor="secondMemberAddress"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Address`}
                                                </FormLabel>
                                                <Input
                                                    mt="8px"
                                                    {...register("Second Member Address", { required: true })}
                                                    id="secondMemberAddress"
                                                    placeholder="Ex: Depok, Jawa Barat" />
                                            </Box>

                                        </Box>
                                    </Flex>
                                    <Box
                                        mt="24px"
                                        position="relative"
                                        className="layout"
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
                                                Team Member 3
                                            </Box>
                                        </Flex>
                                        <Divider orientation="horizontal" />
                                        <Box mb="50px" mx="64px">
                                            <FormLabel
                                                mt="32px"
                                                htmlFor="thirdMemberName"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                            >
                                                {`Member's Name`}
                                            </FormLabel>
                                            <Input
                                                mt="8px"
                                                {...register("Third Member Name")}
                                                id="thirdMemberName"
                                                placeholder="Ex: Fantastic Four" />
                                            <FormHelperText fontWeight={500}>
                                                Make sure this is match with your student ID Card
                                            </FormHelperText>

                                            <FormLabel
                                                mt="32px"
                                                htmlFor="thirdMemberInstitution"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                            >
                                                {`Member's Institution`}
                                            </FormLabel>
                                            <Input
                                                mt="8px"
                                                {...register("Third Member Institution")}
                                                id="thirdMemberInstitution"
                                                placeholder="Ex: Universitas Indonesia" />

                                            <FormLabel
                                                mt="32px"
                                                htmlFor="thirdMemberMAjor"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                            >
                                                {`Member's Major`}
                                            </FormLabel>
                                            <Input
                                                mt="8px"
                                                {...register("Third Member Major")}
                                                id="thirdMemberMajor"
                                                placeholder="Ex: Computer science" />

                                            <FormLabel
                                                mt="32px"
                                                htmlFor="thirdMemberAddress"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                            >
                                                {`Member's Address`}
                                            </FormLabel>
                                            <Input
                                                mt="8px"
                                                {...register("Third Member Address")}
                                                id="thirdMemberAddress"
                                                placeholder="Ex: Depok, Jawa Barat" />
                                        </Box>
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
                                            className="primaryFont"
                                            isDisabled={Object.keys(errors).length !== 0}>
                                            Next
                                        </Button>

                                    </Box>





                                </FormControl>
                            </Box>
                        )
                    }
                })()}
            </Layout>
        </>
    );
}

export default RegisterPage;