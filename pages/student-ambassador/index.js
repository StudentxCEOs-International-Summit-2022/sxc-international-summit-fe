import { Box } from "@chakra-ui/react"
import JumbotronSA from "../../components/jumbotron-sa";
import Layout from "../../components/Layout";
import Ambassadors from "../../components/StudentAmbassador";

const StudentAmbassador = () => {
    return (
        <Layout hasFooter hasNavbar>
            <JumbotronSA />
            <Ambassadors />
        </Layout>
    )
}
export default StudentAmbassador;