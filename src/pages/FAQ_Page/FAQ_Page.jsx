import React from 'react'
import LandingPageWrappper from '../../components/LandingPageWrappper'
import FaqsSection from './Partials/FaqsSection'
import Intro from './Partials/Intro'

const FAQ_Page = () => {
  return (
    <LandingPageWrappper>
      <Intro/>
      <FaqsSection/>
    </LandingPageWrappper>
  )
}

export default FAQ_Page