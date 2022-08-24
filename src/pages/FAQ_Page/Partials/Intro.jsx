import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import bgImg from "../../../assets/faq.png";
const Intro = () => {
  return (
		<Box w="full" px="20" py="10">
			{/* <Box style={{display: "flex", justifyContent: "flex-start"}}> */}

			<Text fontSize="25px" fontWeight="bold">
				FREQUENTLY ASKED QUESTIONS
			</Text>
			<Box
				p="20"
				mt="1rem"
				style={{
					color: "#fff",
					backgroundImage: `url(${bgImg})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					height: 350,
					displlay: "block",
				}}
			>
				<Text>FAQ</Text>
				<Text mt="" style={{ fontSize: "56px", fontWeight: "bold" }}>
					Top up connect Answers
				</Text>
				<Text style={{ fontWeight: "", fontSize: "18px"}} w="45%">
					TopupBox connect has changed the lives of business owners, but people
					still wonder, “What is TopBox connect?” We’re here to tell you this
					and more.
				</Text>
			</Box>
		</Box>
	);
}

export default Intro