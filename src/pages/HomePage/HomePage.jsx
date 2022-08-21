import { Box, Container, VStack } from "@chakra-ui/react";
import React from "react";

import Header from "../../components/Header";
import AnotherSection from "./AnotherSection";
import Intro from "./Intro";
import LearnMoreSection from "./LearnMoreSection";
import Partners from "./Partners";
import Testimonialsection from "./Testimonialsection";
import WhySection from "./WhySection";
const HomePage = () => {
	return (
		<>
		<Box>
			<VStack>

			<Header />
			<Intro/>
			<Partners/>
			<WhySection/>
			<AnotherSection/>
			<LearnMoreSection/>
			<Testimonialsection/>
			</VStack>

		</Box>
		</>
	);
};

export default HomePage;
