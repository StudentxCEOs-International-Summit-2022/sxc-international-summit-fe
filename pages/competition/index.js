import Faq from "../../components/faq";
import Layout from "../../components/Layout";
import { Box } from "@chakra-ui/react";

export default function competition() {
  return (
    <Layout hasNavbar hasFooter currentPage="competition">
      <Box id="register">
        sustain <br></br>
        what are you waiting for<br></br>
        dontmiss your opportunity to shine<br></br>
        rules and requirements<br></br>
      </Box>

      <Faq />
      curious about other events?<br></br>
    </Layout>
  );
}
