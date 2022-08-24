import { Box, Text } from "@chakra-ui/react";
import React from "react";
import aboutImg from "../../../assets/aboutImg.png";
import aboutImg2 from "../../../assets/left-img.png";

const Section1 = () => {
	return (
		<>
			<Box
				style={{
					display: "grid" || "-ms-grid",
					placeItems: "center",
					gridTemplateColumns: "1fr 1fr",
					justifyContent: "space-between",
				}}
				px="20"
				py="10"
			>
				<Box>
					<Box w="80%" lineHeight="6">
						<Text
							color="#263B95"
							style={{ fontSize: 25 }}
							fontsize="32px"
							fontWeight="bold"
						>
							Getting started
						</Text>
						<Text color="gray.500" mt="1rem">
							Buy and sell on our platform, and also get referral bonuses when
							you tell your friends about us Buy and sell on our platform, and
							also get referral bonuses when you tell your friends about us.
						</Text>
						<Text mt="1rem" color="gray.500">
							Buy and sell on our platform, and also get referral bonuses when
							you tell your friends about us Buy and sell on our platform, and
							also get referral bonuses when you tell your friends about us.
						</Text>
					</Box>
				</Box>

				<img src={aboutImg} alt="" />
			</Box>
			<Box
				style={{
					display: "grid" || "-ms-grid",
					placeItems: "center",
					gridTemplateColumns: "1fr 1fr",
					justifyContent: "space-between",
				}}
				px="20"
				py="10"
			>
				<img src={aboutImg2} alt="" />
				<Box ml="1rem">
					<Box w="80%" lineHeight="6">
						<Text
							color="#263B95"
							style={{ fontSize: 25 }}
							fontsize="35px"
							fontWeight="bold"
						>
							Top up connect business
						</Text>
						<Text color="gray.500" mt="1rem">
							Buy and sell on our platform, and also get referral bonuses when
							you tell your friends about us Buy and sell on our platform, and
							also get referral bonuses when you tell your friends about us.
						</Text>
						<Text mt="1rem" color="gray.500">
							Buy and sell on our platform, and also get referral bonuses when
							you tell your friends about us Buy and sell on our platform, and
							also get referral bonuses when you tell your friends about us.
						</Text>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Section1;
