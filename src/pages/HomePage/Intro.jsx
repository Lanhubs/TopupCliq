import React from "react";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import userVector from "../../assets/illustation-right.png";
const Intro = () => {
	return (
		<Box
			style={{
				top: 0,
				backgroundImage: `linear-gradient(to bottom left, rgba(34, 173, 128, 0.063) 16.19%, #fff 73.81%`,
				// background:
				// 	"linear-gradient(44.35deg, rgba(172, 232, 255, 0.21) 16.19%, rgba(38, 59, 149, 0.0462) 163.62%)",
				display: "flex",
				alignItems: "center",
			}}
			w="full"
			h="534.73px"
			px="20"
		>
			<Box
				d="flex"
				display="flex"
				alignItems="center"
				px="40px"
				gap="100px"
				justifyContent={"space-between"}
			>
				<Box className="left" h="100%">
					<h1
						style={{
							fontSize: "56px",
							color: "#212337",
						}}
					>
						Buy, Sell, Connect
					</h1>
					<h1
						style={{
							fontSize: 56,
							color: "#212337",
						}}
					>
						Refer,{" "}
						<span
							color=""
							style={{
								fontSize: 56,
								color: "#253d95",
							}}
						>
							EARN
						</span>
					</h1>
					<Text fontSize="16px" w="307.61px">
						Buy and sell on our platform, and also get referral bonuses when you
						tell your friends about us.
					</Text>
					<Link
						style={{
							display:" flex",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: 50,
							marginTop: "1rem",
							width: "180px",
							height: "56px",
							color: "#fff",
							background: "#263B95",
						}}
					>
						Get Started
					</Link>
				</Box>
				<Image
					src={userVector}
					alt=""
					my="auto"
					style={{
						width: "457.37px",
						height: "454.73px",
					}}
				/>
			</Box>
		</Box>
	);
};

export default Intro;
