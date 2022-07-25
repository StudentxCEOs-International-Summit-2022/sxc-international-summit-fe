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
    useDisclosure
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
    const { isOpen: isOpenRegistration, onOpen: onOpenRegistration, onClose: onCloseRegistration } = useDisclosure()
    const [currentStep, setCurrentStep] = useState(1)
    const [savedData, setSavedData] = useState(null)
    const [isReferralCodeValid, setIsReferralCodeValid] = useState(false)
    const [referralCode, setReferralCode] = useState("")
    const router = useRouter()
    const query = router.query
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        defaultValues: savedData
    })

    const referrals = [
        "IntSummitNashatra01",
        "IntSummitLeony01",
        "IntSummitKeren01",
        "IntSummitAalia01",
        "IntSummitDanisa01",
        "IntSummitSadam01",
        "IntSummitAtharel01",
        "IntSummitNabilah01",
        "IntSummitNadhifa01",
        "IntSummitPrabowo01",
        "IntSummitRaja01",
        "IntSummitGabriel01",
        "IntSummitMarsha01",
        "IntSummitRegita01",
        "IntSummitPutri01",
        "IntSummitSalsabila01",
        "IntSummitBagus01",
        "IntSummitSalsabilla01",
        "IntSummitHimma01",
        "IntSummitNadya01",
        "IntSummitNilo01"
    ]

    useEffect(() => {
        if (typeof window !== "undefined") {
            setSavedData(JSON.parse(localStorage.getItem("registrationData")) || null)
            reset(JSON.parse(localStorage.getItem("registrationData")) || null)
        }
    }, [reset])

    useEffect(() => {
        if (referrals.includes(referralCode)) {
            setIsReferralCodeValid(true)
        } else {
            setIsReferralCodeValid(false)
        }
    }, [referralCode])



    const onChangePage = data => {
        setCurrentStep(currentStep + 1)
        setSavedData(data)
        localStorage.setItem("registrationData", JSON.stringify(data))
    }

    const onSubmit = data => {
        for (const key in data) {
            if (data[key] === "") {
                data[key] = "-"
            }
        }
        localStorage.setItem("registrationData", JSON.stringify(data))

        if (query.type === "team") {
            axios.post("https://sxc-be-22.herokuapp.com/api/daftarCompetitionTeam/", data).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                reset()
                router.push("/competition")
            })
        } else {
            axios.post("https://sxc-be-22.herokuapp.com/api/daftarCompetitionSolo/", data).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                reset()
                router.push("/competition")
            })
        }
    }

    const stepsTeam = [
        "Team Registration",
        "Team Member Registration",
        "Confirmation",
        "Payment"
    ]

    const stepsIndividu = [
        "Individual Registration",
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
                <Stepper steps={query.type === "team" ? stepsTeam : stepsIndividu} currentStep={currentStep} />
                {(() => {
                    if (query.type === "team") {
                        if (currentStep === 1) {
                            return (
                                <Box
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
                                                {...register("team_name", { required: true })}
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
                                                {...register("leader_name", { required: true })}
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
                                                {...register("leader_email", { required: true, pattern: /^\S+@\S+$/i })}
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
                                                {...register("leader_institution", { required: true })}
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
                                                {...register("leader_major", { required: true })}
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
                                                {...register("leader_address", { required: true })}
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
                                                {...register("team_drive", { required: true })}
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
                                <Box>
                                    <FormControl className="primaryFont" key="registerForm" mx="auto" mb="50px">
                                        <Flex justify="center" flexDirection={{ base: "column", md: "row" }} gap="20px">
                                            <Box
                                                mt="66px"
                                                position="relative"
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
                                                        {...register("first_member_name", { required: true })}
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
                                                        {...register("first_member_institution", { required: true })}
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
                                                        {...register("first_member_major", { required: true })}
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
                                                        {...register("first_member_address", { required: true })}
                                                        id="firstMemberAddress"
                                                        placeholder="Ex: Depok, Jawa Barat" />
                                                </Box>

                                            </Box>
                                            <Box
                                                mt="66px"
                                                position="relative"
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
                                                        {...register("second_member_name", { required: true })}
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
                                                        {...register("second_member_institution", { required: true })}
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
                                                        {...register("second_member_major", { required: true })}
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
                                                        {...register("second_member_address", { required: true })}
                                                        id="secondMemberAddress"
                                                        placeholder="Ex: Depok, Jawa Barat" />
                                                </Box>

                                            </Box>
                                        </Flex>
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
                                                    {...register("third_member_name")}
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
                                                    {...register("third_member_institution")}
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
                                                    {...register("third_member_major")}
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
                                                    {...register("third_member_address")}
                                                    id="thirdMemberAddress"
                                                    placeholder="Ex: Depok, Jawa Barat" />
                                                <Flex mt="32px" justify="space-between">
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
                                                        variant="outline"
                                                        bg="transparent"
                                                        className="primaryFont">
                                                        Previous
                                                    </Button>
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
                                            </Box>
                                        </Box>
                                    </FormControl>
                                </Box>
                            )
                        } else if (currentStep === 3) {
                            const urlHandler = (url) => {
                                if (url?.indexOf("https://") > -1) {
                                    return url;
                                }
                                return `https://${url}`;
                            }
                            return (
                                <Box>
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
                                                Confirm Your Team Identity
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
                                                {`Team Name`}<br />{savedData?.["team_name"]}
                                            </Text>

                                            <Text
                                                mt="32px"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                            >
                                                {`Team Leader's Name`}<br />{savedData?.["leader_name"]}
                                            </Text>

                                            <Text
                                                mt="32px"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                            >
                                                {`Team Leader's Email`}<br />{savedData?.["leader_email"]}
                                            </Text>

                                            <Text
                                                mt="32px"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                            >
                                                {`Team Leader's Institution`}<br />{savedData?.["leader_institution"]}
                                            </Text>

                                            <Text
                                                mt="32px"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                            >
                                                {`Team Leader's Major`}<br />{savedData?.["leader_major"]}
                                            </Text>

                                            <Text
                                                mt="32px"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                            >
                                                {`Team Leader's Address`}<br />{savedData?.["leader_address"]}
                                            </Text>

                                            <Text
                                                mt="32px"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                            >
                                                {`Team Identity Drive Link`}<br />
                                                <Link rel="noopener" target="_blank" href={urlHandler(savedData?.["team_drive"])}>
                                                    {savedData?.["team_drive"]}
                                                </Link>
                                            </Text>
                                        </Box>
                                    </Box>

                                    <Flex justify="center" flexDirection={{ base: "column", md: "row" }} gap="30px" mt="50px">
                                        <Box
                                            position="relative"
                                            bgColor="#020234"
                                            w="100%"
                                            borderRadius="20px"
                                            border="2px solid #5D11AB"
                                            boxShadow="inset 0px 4px 4px #5D11AB"
                                            maxW="380px">
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
                                                <Text
                                                    mt="32px"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Name`}<br />{savedData?.["first_member_name"]}
                                                </Text>

                                                <Text
                                                    mt="32px"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Institution`}<br />{savedData?.["first_member_institution"]}
                                                </Text>

                                                <Text
                                                    mt="32px"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Major`}<br />{savedData?.["first_member_major"]}
                                                </Text>

                                                <Text
                                                    mt="32px"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Address`}<br />{savedData?.["first_member_address"]}
                                                </Text>
                                            </Box>
                                        </Box>

                                        <Box
                                            position="relative"
                                            bgColor="#020234"
                                            w="100%"
                                            borderRadius="20px"
                                            border="2px solid #5D11AB"
                                            boxShadow="inset 0px 4px 4px #5D11AB"
                                            maxW="380px">
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
                                                <Text
                                                    mt="32px"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Name`}<br />{savedData?.["second_member_name"]}
                                                </Text>

                                                <Text
                                                    mt="32px"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Institution`}<br />{savedData?.["second_member_institution"]}
                                                </Text>

                                                <Text
                                                    mt="32px"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Major`}<br />{savedData?.["second_member_major"]}
                                                </Text>

                                                <Text
                                                    mt="32px"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Adress`}<br />{savedData?.["second_member_address"]}
                                                </Text>
                                            </Box>
                                        </Box>

                                        <Box
                                            position="relative"
                                            bgColor="#020234"
                                            w="100%"
                                            borderRadius="20px"
                                            border="2px solid #5D11AB"
                                            boxShadow="inset 0px 4px 4px #5D11AB"
                                            maxW="380px">
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
                                                <Text
                                                    mt="32px"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Name`}<br />{savedData?.["third_member_name"] || "-"}
                                                </Text>

                                                <Text
                                                    mt="32px"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Institution`}<br />{savedData?.["third_member_institution"] || "-"}
                                                </Text>

                                                <Text
                                                    mt="32px"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Major`}<br />{savedData?.["third_member_major"] || "-"}
                                                </Text>

                                                <Text
                                                    mt="32px"
                                                    fontWeight={700}
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                >
                                                    {`Member's Adress`}<br />{savedData?.["third_member_address"] || "-"}
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Flex>
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
                        } else if (currentStep === 4) {
                            return (
                                <Box
                                    mt="66px"
                                    position="relative"
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
                                            Registration Payment
                                        </Box>
                                    </Flex>
                                    <Divider orientation="horizontal" />
                                    <FormControl className="primaryFont" key="registerForm" maxW="720px" mx="auto">
                                        <Text
                                            mt="40px"
                                            fontWeight={700}
                                            fontSize="24px"
                                            lineHeight={1.5}
                                            className="primaryFont">
                                            Competition Name
                                        </Text>
                                        <Text fontWeight={800}
                                            fontSize="32px"
                                            lineHeight={1.2}
                                            className="primaryFont">SxC Business Case Competition</Text>
                                        <FormLabel
                                            mt="48px"
                                            htmlFor="referralCode"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            Referral Code
                                        </FormLabel>
                                        <Input
                                            mt="8px"
                                            borderColor={isReferralCodeValid && "#53B656"}
                                            color={isReferralCodeValid && "#53B656"}
                                            onChange={(e) => { setReferralCode(e.target.value) }}
                                            id="referralCode"
                                            placeholder="Ex: ABC1234" />
                                        <FormHelperText fontWeight={500}>
                                            For referral code, be sure to check our instagram account @sxcintersummit!
                                        </FormHelperText>

                                        <Flex align="center" mt="24px">
                                            <Text
                                                className="primaryFont"
                                                fontWeight={700}
                                                fontSize="24px"
                                                lineHeight={1.5}
                                                color="#0FA1DB"
                                            >
                                                DOMESTIC
                                            </Text>
                                            <Box width="100%">
                                                <Divider ml="10px" bgColor="#0FA1DB" borderWidth="2px" width="100%" height="100%" />
                                            </Box>
                                        </Flex>
                                        <Text
                                            mt="24px"
                                            className="primaryFont"
                                            fontWeight={700}
                                            fontSize="24px"
                                            lineHeight={1.5}
                                            color="#CCCCCC"
                                        >
                                            Registration Fee
                                        </Text>
                                        <Text
                                            className="primaryFont"
                                            fontWeight={800}
                                            fontSize="24px"
                                            lineHeight={1.2}
                                            color="#F8C800"
                                        >
                                            {isReferralCodeValid ? "Rp220.000,-" : "Rp250.000,-"}
                                        </Text>
                                        {isReferralCodeValid &&
                                            <Text
                                                color="white"
                                                className="primaryFont"
                                                fontSize="16px"
                                                lineHeight={1.2}
                                                fontWeight={800}
                                                textDecoration="line-through"
                                            >
                                                Rp250.000,-
                                            </Text>}
                                        <Text
                                            mt="24px"
                                            className="primaryFont"
                                            fontWeight={700}
                                            fontSize="24px"
                                            lineHeight={1.5}
                                            color="#CCCCCC"
                                        >
                                            Payment Options
                                        </Text>
                                        <UnorderedList color="#F8C800">
                                            <ListItem>
                                                <Text
                                                    className="primaryFont"
                                                    fontWeight={800}
                                                    fontSize="24px"
                                                    lineHeight={1.2}
                                                    color="#F8C800"
                                                >
                                                    {'BCA Digital - 005353176792 (Andrea Fahira)'}
                                                </Text>
                                            </ListItem>
                                            <ListItem>
                                                <Text
                                                    className="primaryFont"
                                                    fontWeight={800}
                                                    fontSize="24px"
                                                    lineHeight={1.2}
                                                    color="#F8C800"
                                                >
                                                    {'Dana - 085921725311 (Andrea Fahira)'}
                                                </Text>
                                            </ListItem>
                                        </UnorderedList>

                                        <Flex align="center" mt="24px">
                                            <Text
                                                className="primaryFont"
                                                fontWeight={700}
                                                fontSize="24px"
                                                lineHeight={1.5}
                                                color="#0FA1DB"
                                            >
                                                International
                                            </Text>
                                            <Box width="100%">
                                                <Divider ml="10px" bgColor="#0FA1DB" borderWidth="2px" width="100%" height="100%" />
                                            </Box>
                                        </Flex>
                                        <Text
                                            mt="24px"
                                            className="primaryFont"
                                            fontWeight={700}
                                            fontSize="24px"
                                            lineHeight={1.5}
                                            color="#CCCCCC"
                                        >
                                            Registration Fee
                                        </Text>
                                        <Text
                                            className="primaryFont"
                                            fontWeight={800}
                                            fontSize="24px"
                                            lineHeight={1.2}
                                            color="#F8C800"
                                        >
                                            {isReferralCodeValid ? "US$14.70" : "US$16.67"}
                                        </Text>
                                        {isReferralCodeValid &&
                                            <Text
                                                color="white"
                                                className="primaryFont"
                                                fontSize="16px"
                                                lineHeight={1.2}
                                                fontWeight={800}
                                                textDecoration="line-through"
                                            >
                                                US$16.67
                                            </Text>}
                                        <Text
                                            mt="24px"
                                            className="primaryFont"
                                            fontWeight={700}
                                            fontSize="24px"
                                            lineHeight={1.5}
                                            color="#CCCCCC"
                                        >
                                            Payment Options
                                        </Text>
                                        <UnorderedList color="#F8C800">
                                            <ListItem>
                                                <Text
                                                    className="primaryFont"
                                                    fontWeight={800}
                                                    fontSize="24px"
                                                    lineHeight={1.2}
                                                    color="#F8C800"
                                                >
                                                    {'Paypal'}
                                                </Text>
                                            </ListItem>
                                        </UnorderedList>

                                        <Divider my="24px" bgColor="#0FA1DB" borderWidth="2px" width="100%" height="100%" />

                                        <Text
                                            mt="24px"
                                            className="primaryFont"
                                            fontWeight={700}
                                            fontSize="24px"
                                            lineHeight={1.5}
                                            color="#CCCCCC"
                                        >
                                            Proof of Payment
                                        </Text>

                                        <FormLabel
                                            mt="24px"
                                            htmlFor="paymentLink"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Google Drive Link`}
                                        </FormLabel>
                                        <Input
                                            mt="8px"
                                            {...register("payment_drive", { required: true })}
                                            id="paymentLink"
                                            placeholder="Ex: bit.ly/FantasticFour" />
                                        <FormHelperText fontWeight={500}>
                                            Fill this field with your GDrive link containing a photo or screenshot of your payment proof.
                                            <br />
                                            File name: NamaTeam_Instansi_BuktiPembayaran
                                        </FormHelperText>
                                        <Flex justify="space-around">
                                            <Button
                                                onClick={() => setCurrentStep(currentStep - 1)}
                                                mb="40px"
                                                mt="80px"
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
                                                onClick={() => {
                                                    handleSubmit(onChangePage); onOpenRegistration()
                                                }}
                                                mb="40px"
                                                mt="80px"
                                                borderRadius="4px"
                                                bgColor="#5D11AB"
                                                p="10px 24px"
                                                color="white"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                                className="primaryFont"
                                                isDisabled={Object.keys(errors).length !== 0}>
                                                Confirm Registration
                                            </Button>
                                            <CustomModal
                                                isOpen={isOpenRegistration}
                                                onClose={onCloseRegistration}
                                                title="Registration Complete!"
                                                body={"Thank you for registering! We'll review your payment and we'll give you the event details soon! We're looking forward to your participation!"}
                                                additionalText={["If you need help, feel free to contact us at",
                                                    "Bima - +62 85731710570 (bimadwidr)",
                                                    "Fauzan - +62 85735509685 (fauuzaann)"]}
                                                hasNextButton
                                                nextButtonText="Back to Event Page"
                                                nextButtonClick={handleSubmit(onSubmit)} />
                                        </Flex>
                                    </FormControl>
                                </Box>
                            )
                        }
                    } else {
                        if (currentStep === 1) {
                            return (
                                <Box
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
                                            className="primaryFont"
                                            bgColor="#5D11AB"
                                            border="3px solid #A170FD"
                                            borderRadius="30px"
                                            p="12px 20px"
                                            fontWeight={600}
                                            fontSize="20px"
                                            lineHeight={1.5}>
                                            Join as Indicidual
                                        </Box>
                                    </Flex>
                                    <Divider orientation="horizontal" />
                                    <form id="registerForm">
                                        <FormControl className="primaryFont" key="registerForm" maxW="720px" mx="auto">
                                            <FormLabel
                                                mt="48px"
                                                htmlFor="name"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                            >
                                                Your Name
                                            </FormLabel>
                                            <Input
                                                mt="8px"
                                                {...register("name", { required: true })}
                                                id="name"
                                                placeholder="Ex: Fantastic Four" />



                                            <FormLabel
                                                mt="32px"
                                                htmlFor="email"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                            >
                                                {`Your Email`}
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
                                                htmlFor="institution"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                            >
                                                {`Your Institution`}
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
                                                {`Your Major`}
                                            </FormLabel>
                                            <Input
                                                mt="8px"
                                                {...register("major", { required: true })}
                                                id="major"
                                                placeholder="Ex: Computer science" />


                                            <FormLabel
                                                mt="32px"
                                                htmlFor="address"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                            >
                                                {`Your Address`}
                                            </FormLabel>
                                            <Input
                                                mt="8px"
                                                {...register("address", { required: true })}
                                                id="address"
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
                                                {`Google Drive Folder Link`}
                                            </FormLabel>
                                            <Input
                                                mt="8px"
                                                {...register("team_drive", { required: true })}
                                                id="teamLink"
                                                placeholder="Ex: bit.ly/FantasticFourDrive" />
                                            <FormHelperText fontWeight={500}>
                                                Fill this field with your GDrive folder link containing your student ID, latest photo, proof of follows and twibbon post.
                                                <br />
                                                Main folder name: Nama_Instansi,
                                            </FormHelperText>
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
                            const urlHandler = (url) => {
                                if (url?.indexOf("https://") > -1) {
                                    return url;
                                }
                                return `https://${url}`;
                            }
                            return (
                                <Box>
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
                                                {`Name`}<br />{savedData?.["name"]}
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

                                            <Text
                                                mt="32px"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                            >
                                                {`Address`}<br />{savedData?.["address"]}
                                            </Text>

                                            <Text
                                                mt="32px"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                            >
                                                {`Student ID Card Drive Link`}<br />
                                                <Link rel="noopener" target="_blank" href={urlHandler(savedData?.["team_drive"])}>
                                                    {savedData?.["team_drive"]}
                                                </Link>
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
                                    mt="66px"
                                    position="relative"
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
                                            Registration Payment
                                        </Box>
                                    </Flex>
                                    <Divider orientation="horizontal" />
                                    <FormControl className="primaryFont" key="registerForm" maxW="720px" mx="auto">
                                        <Text
                                            mt="40px"
                                            fontWeight={700}
                                            fontSize="24px"
                                            lineHeight={1.5}
                                            className="primaryFont">
                                            Competition Name
                                        </Text>
                                        <Text fontWeight={800}
                                            fontSize="32px"
                                            lineHeight={1.2}
                                            className="primaryFont">SxC Business Case Competition</Text>
                                        {/* <FormLabel
                                            mt="48px"
                                            htmlFor="referralCode"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            Referral Code
                                        </FormLabel>
                                        <Input
                                            mt="8px"
                                            {...register("Referral Code")}
                                            id="referralCode"
                                            placeholder="Ex: ABC1234" />
                                        <FormHelperText fontWeight={500}>
                                            For referral code, be sure to check our instagram account @sxcintersummit!
                                        </FormHelperText> */}

                                        <Flex align="center" mt="24px">
                                            <Text
                                                className="primaryFont"
                                                fontWeight={700}
                                                fontSize="24px"
                                                lineHeight={1.5}
                                                color="#0FA1DB"
                                            >
                                                DOMESTIC
                                            </Text>
                                            <Box width="100%">
                                                <Divider ml="10px" bgColor="#0FA1DB" borderWidth="2px" width="100%" height="100%" />
                                            </Box>
                                        </Flex>
                                        <Text
                                            mt="24px"
                                            className="primaryFont"
                                            fontWeight={700}
                                            fontSize="24px"
                                            lineHeight={1.5}
                                            color="#CCCCCC"
                                        >
                                            Registration Fee
                                        </Text>
                                        <Text
                                            className="primaryFont"
                                            fontWeight={800}
                                            fontSize="24px"
                                            lineHeight={1.2}
                                            color="#F8C800"
                                        >
                                            Rp70.000,-
                                        </Text>
                                        <Text
                                            mt="24px"
                                            className="primaryFont"
                                            fontWeight={700}
                                            fontSize="24px"
                                            lineHeight={1.5}
                                            color="#CCCCCC"
                                        >
                                            Payment Options
                                        </Text>
                                        <UnorderedList color="#F8C800">
                                            <ListItem>
                                                <Text
                                                    className="primaryFont"
                                                    fontWeight={800}
                                                    fontSize="24px"
                                                    lineHeight={1.2}
                                                    color="#F8C800"
                                                >
                                                    {'BCA Digital - 005353176792 (Andrea Fahira)'}
                                                </Text>
                                            </ListItem>
                                            <ListItem>
                                                <Text
                                                    className="primaryFont"
                                                    fontWeight={800}
                                                    fontSize="24px"
                                                    lineHeight={1.2}
                                                    color="#F8C800"
                                                >
                                                    {'Dana - 085921725311 (Andrea Fahira)'}
                                                </Text>
                                            </ListItem>
                                        </UnorderedList>

                                        <Flex align="center" mt="24px">
                                            <Text
                                                className="primaryFont"
                                                fontWeight={700}
                                                fontSize="24px"
                                                lineHeight={1.5}
                                                color="#0FA1DB"
                                            >
                                                International
                                            </Text>
                                            <Box width="100%">
                                                <Divider ml="10px" bgColor="#0FA1DB" borderWidth="2px" width="100%" height="100%" />
                                            </Box>
                                        </Flex>
                                        <Text
                                            mt="24px"
                                            className="primaryFont"
                                            fontWeight={700}
                                            fontSize="24px"
                                            lineHeight={1.5}
                                            color="#CCCCCC"
                                        >
                                            Registration Fee
                                        </Text>
                                        <Text
                                            className="primaryFont"
                                            fontWeight={800}
                                            fontSize="24px"
                                            lineHeight={1.2}
                                            color="#F8C800"
                                        >
                                            US$18.30
                                        </Text>
                                        <Text
                                            mt="24px"
                                            className="primaryFont"
                                            fontWeight={700}
                                            fontSize="24px"
                                            lineHeight={1.5}
                                            color="#CCCCCC"
                                        >
                                            Payment Options
                                        </Text>
                                        <UnorderedList color="#F8C800">
                                            <ListItem>
                                                <Text
                                                    className="primaryFont"
                                                    fontWeight={800}
                                                    fontSize="24px"
                                                    lineHeight={1.2}
                                                    color="#F8C800"
                                                >
                                                    {'Paypal'}
                                                </Text>
                                            </ListItem>
                                        </UnorderedList>

                                        <Divider my="24px" bgColor="#0FA1DB" borderWidth="2px" width="100%" height="100%" />

                                        <Text
                                            mt="24px"
                                            className="primaryFont"
                                            fontWeight={700}
                                            fontSize="24px"
                                            lineHeight={1.5}
                                            color="#CCCCCC"
                                        >
                                            Proof of Payment
                                        </Text>

                                        <FormLabel
                                            mt="24px"
                                            htmlFor="paymentLink"
                                            fontWeight={700}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                        >
                                            {`Google Drive Link`}
                                        </FormLabel>
                                        <Input
                                            mt="8px"
                                            {...register("payment_drive", { required: true })}
                                            id="paymentLink"
                                            placeholder="Ex: bit.ly/FantasticFour" />
                                        <FormHelperText fontWeight={500}>
                                            Fill this field with your GDrive link containing a photo or screenshot of your payment proof.
                                            <br />
                                            File name: NamaTeam_Instansi_BuktiPembayaran
                                        </FormHelperText>
                                        <Flex justify="space-around">
                                            <Button
                                                onClick={() => setCurrentStep(currentStep - 1)}
                                                mb="40px"
                                                mt="80px"
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
                                                onClick={() => {
                                                    handleSubmit(onChangePage); onOpenRegistration()
                                                }}
                                                mb="40px"
                                                mt="80px"
                                                borderRadius="4px"
                                                bgColor="#5D11AB"
                                                p="10px 24px"
                                                color="white"
                                                fontWeight={700}
                                                fontSize="16px"
                                                lineHeight={1.5}
                                                className="primaryFont"
                                                isDisabled={Object.keys(errors).length !== 0}>
                                                Confirm Registration
                                            </Button>
                                            <CustomModal
                                                isOpen={isOpenRegistration}
                                                onClose={onCloseRegistration}
                                                title="Registration Complete!"
                                                body={"Thank you for registering! We'll review your payment and we'll give you the event details soon! We're looking forward to your participation!"}
                                                additionalText={["If you need help, feel free to contact us at",
                                                    "Bima - +62 85731710570 (bimadwidr)",
                                                    "Fauzan - +62 85735509685 (fauuzaann)"]}
                                                hasNextButton
                                                nextButtonText="Back to Event Page"
                                                nextButtonClick={handleSubmit(onSubmit)} />
                                        </Flex>
                                    </FormControl>
                                </Box>
                            )
                        }
                    }

                })()}
            </Layout>
        </>
    );
}

export default RegisterPage;