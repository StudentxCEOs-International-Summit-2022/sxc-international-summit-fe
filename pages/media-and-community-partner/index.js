import { Box } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import PreviousPartner from "../../components/PreviousPartners";
import PartnershipContact from '../../components/PartnershipContact'

const MediaPartner = () => {
    return(
        <Layout hasNavbar hasFooter currentPage="mediaPartner">
            <PartnershipContact />
            <PreviousPartner />
        </Layout>
    )
}
export default MediaPartner
