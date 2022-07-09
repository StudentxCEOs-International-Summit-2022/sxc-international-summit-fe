import Head from "next/head";
import Image from "next/image";
import Jumbotron from "../components/jumbotron-compe";
import Faq from "../components/faq";
import Layout from "../components/Layout";
import Partners from "../components/partners";
import styles from "../styles/Home.module.css";

export default function competition() {
  return (
    <Layout hasNavbar hasFooter>
      <Jumbotron />
      sustain <br></br>
      what are you waiting for<br></br>
      dontmiss your opportunity to shine<br></br>
      rules and requirements<br></br>
      <Faq />
      curious about other events?<br></br>
    </Layout>
  );
}
