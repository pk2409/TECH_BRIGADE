
import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>

    <Navbar />
    <Component {...pageProps} />
  </ChakraProvider>

}

export default MyApp
