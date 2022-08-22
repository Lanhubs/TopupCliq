import React from 'react'
import LandingPageWrappper from '../../components/LandingPageWrappper'
import Intro from "./Partials/Intro"
import Section1 from './Partials/Section1';

const AboutUsPage = () => {
  return (
		<LandingPageWrappper>
			<Intro />
            <Section1/>
		</LandingPageWrappper>
	);
}

export default AboutUsPage