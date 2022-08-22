import React from 'react'
import LandingPageWrappper from '../../components/LandingPageWrappper'
import NewsletterForm from '../../components/NewsletterForm'
import LearnMoreSection from '../HomePage/LearnMoreSection'
import FIrstSection from './partials/FIrstSection'
import Intro from './partials/Intro'

const HowItWorksPage = () => {
  return (
    <LandingPageWrappper>
        <Intro/>
        <FIrstSection/>
        <LearnMoreSection/>
        <NewsletterForm/>
    </LandingPageWrappper>
  )
}

export default HowItWorksPage