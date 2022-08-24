import {
	Box,
	Link,
	ListIcon,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import aboutImg from "../../../assets/left-img-2.png";
const LastSection = () => {
	return (
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
			<img src={aboutImg} alt="" />
			<Box ml="1rem">
				<Box w="80%" lineHeight="6">
					<Text
						color="#263B95"
						style={{ fontSize: 25 }}
						fontsize="35px"
						fontWeight="bold"
					>
						Satisfactory Guarantee
					</Text>
					<Text color="gray.500" mt="1rem">
						Top up connect. Our 100% satisfaction guarantee and customer service
						sets us apart from other direct selling companies. When it comes to
						our products and our business opportunity, satisfaction will always
						be our goal, and protection—our promise.
						<UnorderedList mt="10">
							<ListItem>Low cost, Low-risk Opportunity</ListItem>
							<ListItem>100% Satisfaction Guarantee</ListItem>
							<ListItem>Warranty Programs</ListItem>
							<ListItem>Customer Services</ListItem>
							<ListItem>The Right to Know</ListItem>
						</UnorderedList>
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default LastSection;
