import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import OurEvents from '../components/OurEvents'

export default function Home() {
  return (
    <Layout hasNavbar hasFooter>
      body
      <OurEvents />
    </Layout>
  )
}
