import Layout from '../components/Layout'
import Partners from '../components/partners'
import OurEvents from '../components/OurEvents'
import Merch from '../components/Merch'


export default function Home() {
  return (
    <Layout hasNavbar hasFooter currentPage="landing">
      <OurEvents />
      <Merch />
      {/* <Partners /> */}
    </Layout>
  )
}
