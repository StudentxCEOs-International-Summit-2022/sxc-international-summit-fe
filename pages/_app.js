import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NextSeo
        title="StudentsxCEOs International Summit 2022"
        description="A Grand Event organized by StudentsxCEOs Jakarta consisting of a sequence of enriching and groundbreaking events."
        
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
