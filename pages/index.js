import Head from 'next/head'
import Image from 'next/image'
import Jumbotron from '../components/jumbotron'
import Layout from '../components/Layout'
import Partners from '../components/partners'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <Layout hasNavbar hasFooter>
      <Jumbotron />
      our event <br></br>
      check out our merch
      <Partners />
    </Layout>
  )
}
