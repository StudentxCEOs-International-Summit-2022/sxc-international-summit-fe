import Faq from "../../components/faq";
import Layout from "../../components/Layout";
import Exploreourevent from "../../components/Exploreourevent";

export default function CompanyVisit() {
  return (
    <Layout hasNavbar hasFooter currentPage="main-conference">
      <Faq event="main-conference" />
      <Exploreourevent />
    </Layout>
  );
}
