import { Box, Flex, Button } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import CustomButton from "../../components/Button"

const AbduhPage = () => {
    const [first, setFirst] = useState(true)
    const router = useRouter()

    const array = [
        { name: "Abdurahman", age: 20 },
        { name: "Aril", age: 19 },
        { name: "Yan", age: 19 },
        { name: "Puti", age: 19 }
    ]

    return (
        <>
            <Flex justify="space-around" direction={{ base: "row", sm: "column", md: "row", lg: "column" }} align="center" h="100vh">
                {first ? <Box>ada</Box> : <></>}

                <Button onClick={() => router.push("/login")}>toggle</Button>
                <Button onClick={() => setFirst("abduh")}>Decrement</Button>
                {/* <CustomButton color="blue"></CustomButton> */}
                {/* {array.map((el, index) => {
                return (
                    <Box key={index}>
                        {el.name}
                        {el.age}
                    </Box>
                )
            })} */}
            </Flex>
        </>

    )
}

export default AbduhPage