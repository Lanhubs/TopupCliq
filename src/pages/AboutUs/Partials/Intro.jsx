import { Box, Text } from "@chakra-ui/react";
import React from "react";
import bgImg from "../../../assets/aboutus_into.png";
const Intro = () => {
	return (
		<Box w="full" px="20" py="10">
			<Text fontSize="40px" fontWeight="bold">
				ABOUT US
			</Text>
			<Box
				p="20"
				mt="1rem"
				style={{
					color: "#fff",
					backgroundImage: `url(${bgImg})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					height: 382,
					displlay: "block",
				}}
			>
				<Text fontSize="18px">ABOUT US</Text>
				<Text mt="1rem" style={{ fontSize: "56px", fontWeight: "bold" }}>
					Top up connect,
				</Text>
				<Text style={{ fontSize: "56px", fontWeight: "bold" }}>
					Connect and Earn
				</Text>
			</Box>
		</Box>
	);
};

export default Intro;
