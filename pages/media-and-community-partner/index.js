import { Box } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import PreviousPartner from "../../components/PreviousPartners";

const MediaPartner = () => {
  return (
    <Layout hasNavbar hasFooter currentPage="mediaPartner">
      <PreviousPartner />
    </Layout>
  );
};

export default MediaPartner;
