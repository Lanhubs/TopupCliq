import React from 'react'
import LandingPageWrappper from '../../components/LandingPageWrappper'
import FaqsSection from './Partials/FaqsSection'
import Intro from './Partials/Intro'
import MakeMoneyAccordion from './Partials/MakeMoneyAccordion'

const FAQ_Page = () => {
  return (
    <LandingPageWrappper>
      <Intro/>
      <FaqsSection/>
      <MakeMoneyAccordion/>
    </LandingPageWrappper>
  )
}

export default FAQ_Page