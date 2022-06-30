import Head from 'next/head'
import Image from 'next/image'
import Jumbotron from '../components/jumbotron'
import Layout from '../components/Layout'
import Partners from '../components/partners'
import styles from '../styles/Home.module.css'
import OurEvents from '../components/OurEvents'


export default function Home() {
  return (
    <Layout hasNavbar hasFooter currentPage="landing">
      <OurEvents />
      <Partners />
    </Layout>
  )
}
