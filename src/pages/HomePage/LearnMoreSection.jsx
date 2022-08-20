import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import commentIcon from "../../assets/learmmore/comment.png";
import rocketIcon from "../../assets/learmmore/rocket.png";
import topupIcon from "../../assets/learmmore/topup_logo.png";
const LearnMoreSection = () => {
	return (
		<Box mt="20px" w="full">
			<Flex>
				{content.map((item, i) => (
					<Box
						key={i}
						px="1.7rem"
						d="flex"
						flexDirection={"column"}
						justifyContent="center"
                        textAlign="center"
                        style={{border: "0.1rem solid "}} borderColor="gray.200"
					>
						<img src={item.icon} style={{margin: "10px auto"}} />
						<p>{item.desc}</p>
                        <Link href="#" mx="auto" w={"fit-content"||"-moz-fit-content"}>
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
