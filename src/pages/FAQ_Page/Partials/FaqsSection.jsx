import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Text,
} from "@chakra-ui/react";
import React from "react";

const FaqsSection = () => {
	return (
		<>
			<Text>PRODUCTS</Text>
		<Box px="20" w="full" >

			<Accordion w="full">


			{faqsAccordionData.map((item, idx)=>(

				<AccordionItem border="none">
					{({ isExpanded }) => (
						<>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										{item.title}
									</Box>
									{isExpanded ? (
										<MinusIcon fontSize="12px" />
									) : (
										<AddIcon fontSize="12px" />
									)}
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								{item.desc}
							</AccordionPanel>
						</>
					)}
				</AccordionItem>
			))}



			</Accordion>
		</Box>
		</>
	);
};

const faqsAccordionData = [
	{
		title: "Refer & Earn",
		desc: `Buy and sell on our platform, and also get referral bonuses when
								you tell your friends about us Buy and sell on our platform, and
								also get referral bonuses when you tell your friends about us.
								Buy and sell on our platform, and also get referral bonuses when
								you tell your friends about us Buy and sell on our platform, and
								also get referral bonuses when you tell your friends about us`,
	},
	{
		title: "Airtime & Data",
		desc: `Buy and sell on our platform, and also get referral bonuses when
			you tell your friends about us Buy and sell on our platform, and
			also get referral bonuses when you tell your friends about us.
			Buy and sell on our platform, and also get referral bonuses when
			you tell your friends about us Buy and sell on our platform, and
			also get referral bonuses when you tell your friends about us`,
	},
	{
		title: "Utilities",
		desc: `Buy and sell on our platform, and also get referral bonuses when
			you tell your friends about us Buy and sell on our platform, and
			also get referral bonuses when you tell your friends about us.
			Buy and sell on our platform, and also get referral bonuses when
			you tell your friends about us Buy and sell on our platform, and
			also get referral bonuses when you tell your friends about us`,
	},
	{
		title: "Print recharge card",
		desc: `Buy and sell on our platform, and also get referral bonuses when
			you tell your friends about us Buy and sell on our platform, and
			also get referral bonuses when you tell your friends about us.
			Buy and sell on our platform, and also get referral bonuses when
			you tell your friends about us Buy and sell on our platform, and
			also get referral bonuses when you tell your friends about us`,
	},
];
export default FaqsSection;
