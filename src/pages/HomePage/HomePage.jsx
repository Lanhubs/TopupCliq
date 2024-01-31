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
			<Box
				w="full"
				h="full"
				style={{
					backgroundImage: `linear-gradient(to bottom left, rgba(34, 173, 128, 0.063) 16.19%, rgba(34, 173, 128, 0.21) 163.62%)`,
				}}
			>
				<LandingPageWrappper>
					<Intro />
					<Partners />
					<WhySection />
					<AnotherSection />
					<LearnMoreSection />
					<Testimonialsection />
				</LandingPageWrappper>
			</Box>
		</>
	);
};

export default HomePage;
