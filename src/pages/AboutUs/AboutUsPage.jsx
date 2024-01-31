import React from 'react'
import LandingPageWrappper from '../../components/LandingPageWrappper'
import EnquirySection from './Partials/EnquirySection';
import Intro from "./Partials/Intro"
import LastSection from './Partials/LastSection';
import Section1 from './Partials/Section1';
import LearnMoreSection from "../HomePage/LearnMoreSection"
const AboutUsPage = () => {
  return (
		<LandingPageWrappper>
			<Intro />
            <Section1/>
			<EnquirySection/>
			<LastSection/>
			<LearnMoreSection/>
		</LandingPageWrappper>
	);
}

export default AboutUsPage