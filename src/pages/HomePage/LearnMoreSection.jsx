import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import commentIcon from "../../assets/learmmore/comment.png";
import rocketIcon from "../../assets/learmmore/rocket.png";
import topupIcon from "../../assets/learmmore/topup_logo.png";
const LearnMoreSection = () => {
	return (
		<Box my="1rem" w="full" py="10" bg="white" d="block">
			<Flex>
				{content.map((item, i) => (
					<Box
						key={i}
						p="1.5rem 2.5rem"
						textAlign="center"
						style={{
							border: "0.1rem solid #E9EAEC",
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
							flexDirection: "column",
							gap: "1em",
						}}
						borderColor="GrayText"
					>
						<img src={item.icon} style={{ margin: "10px auto" }} />

						<p wordBreak="break-word">{item.desc}</p>
						<Link
							href="#"
							mx="auto"
							p="0.5rem 1rem"
							my="1rem"
							d="block"
							w={"fit-content" || "-moz-fit-content"}
							border="1px"
							borderRadius="3xl"
							borderColor="#E9EAEC"
						>
							Learn more
						</Link>
					</Box>
				))}
			</Flex>
		</Box>
	);
};

export default LearnMoreSection;
const content = [
	{
		icon: commentIcon,
		header: "Contact Us",
		desc: "Our support team is here to help by phone, chat, or email",
		link: "",
	},
	{
		icon: topupIcon,
		header: "Top up connect",
		desc: "Satisfaction will always be our goal, and protection—our promise.",
		link: "",
	},
	{
		icon: rocketIcon,
		header: "Start a business",
		desc: "Sell quality products that people use every day.",
		link: "",
	},
];
