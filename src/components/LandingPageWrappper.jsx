import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import Footer from './Foooter'
import Header from './Header'
import NewsletterForm from './NewsletterForm'

const LandingPageWrappper = ({children}) => {
  return (
    <Box style={{width: "inherit", height: "inherit", }} d="block" bg="#fff" p="0" m="0">
        <VStack>

        <Header/>
        {children}
        
        <Footer/>
        </VStack>
    </Box>
  )
}

export default LandingPageWrappper