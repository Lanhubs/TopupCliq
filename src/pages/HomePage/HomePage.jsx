import { Box, Container, VStack } from "@chakra-ui/react";
import React from "react";

import Header from "../../components/Header";
import LandingPageWrappper from "../../components/LandingPageWrappper";
import AnotherSection from "./AnotherSection";
import Intro from "./Intro";
import LearnMoreSection from "./LearnMoreSection";
import Partners from "./Partners";
import Testimonialsection from "./Testimonialsection";
import WhySection from "./WhySection";
const HomePage = () => {
	return (
		<>
	


			<LandingPageWrappper>

		
			<Intro/>
			<Partners/>
			<WhySection/>
			<AnotherSection/>
			<LearnMoreSection/>
			<Testimonialsection/>
			</LandingPageWrappper>
			
			
		</>
	);
};

export default HomePage;
