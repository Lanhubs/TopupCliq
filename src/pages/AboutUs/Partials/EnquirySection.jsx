import { Box, Text, Link } from "@chakra-ui/react";
import React from "react";

import bgImg from "../../../assets/an_bg.png";
const EnquirySection = () => {
	return (
		<Box w="full" px="20" py="10">
			<Box
				p="20"
				mt="1rem"
				style={{
					color: "#fff",
					backgroundImage: `url(${bgImg})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					height: 320,
					displlay: "block",
				}}
			>
				<Text fontSize="45px" fontWeight="bold">
					Still have questions?
				</Text>
				<Text mt="10px" style={{ fontSize: "15px", fontWeight: "bold" }}>
					Common questions, starightforward answers
				</Text>
				<Link
					d="block"
					bg="#fff"
					mt="1rem"
					style={{ color: "#263B95", display: "block", width: "fit-content" }}
					px="1rem"
					py="0.7rem"
					borderRadius="3xl"
					
				>
					See our answers
				</Link>
			</Box>
		</Box>
	);
};

export default EnquirySection;
