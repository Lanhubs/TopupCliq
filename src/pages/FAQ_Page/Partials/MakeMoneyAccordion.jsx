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

const MakeMoneyAccordion = () => {
	return (
		<>
			<Box px="20" w="full">
				<Text mt="20" fontWeight="800" fontSize="32px" textAlign="center">
					MAKING MONEY
				</Text>
				<Accordion w="full" mt="10">
					{accordionData.map((item, idx) => (
						<AccordionItem
							borderTop="none"
							borderBottom="1px solid #E9EAEC"
							bg="#fff"
						>
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
									<AccordionPanel fontSize="16px" pb={4}>
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
const accordionData = [
	{
		title: "How do i make money on topupbox connect?",
		desc: "Buy and sell on our platform, and also  get referral bonuses when you tell your friends about us Buy and sell on our platform, and also  get referral bonuses when you tell your friends about us. Buy and sell on our platform, and also  get referral bonuses when you tell your friends about us Buy and sell on our platform, and also  get referral bonuses when you tell your friends about us",
	},
	{
		title: "When can i withdraw my earnings?",
		desc: "Buy and sell on our platform, and also  get referral bonuses when you tell your friends about us Buy and sell on our platform, and also  get referral bonuses when you tell your friends about us. Buy and sell on our platform, and also  get referral bonuses when you tell your friends about us Buy and sell on our platform, and also  get referral bonuses when you tell your friends about us",
	},
	{
		title: "How do i register",
		desc: "Buy and sell on our platform, and also  get referral bonuses when you tell your friends about us Buy and sell on our platform, and also  get referral bonuses when you tell your friends about us. Buy and sell on our platform, and also  get referral bonuses when you tell your friends about us Buy and sell on our platform, and also  get referral bonuses when you tell your friends about us",
	},
	{
		title: "Refer & Earn",
		desc: "Buy and sell on our platform, and also  get referral bonuses when you tell your friends about us Buy and sell on our platform, and also  get referral bonuses when you tell your friends about us. Buy and sell on our platform, and also  get referral bonuses when you tell your friends about us Buy and sell on our platform, and also  get referral bonuses when you tell your friends about us",
	},
];

export default MakeMoneyAccordion;
