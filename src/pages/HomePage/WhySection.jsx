import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import BuyAirtime from "../../assets/Buy airtime.png";
import Pos from "../../assets/Pos.png";
import PayForUtils from "../../assets/PayForUtils.png";
import Referral from "../../assets/Rewards.png";
const WhySection = () => {
	return (
		<Box px="20" mt="16" style={{ marginTop: 30 }}>
			<h1
				style={{
					textAlign: "center",
					fontSize: 30,
					color: "#253d95",
					letterSpacing: 1,
				}}
			>
				Why use Top up connect?
			</h1>
			<Box
				style={{
					display: "flex",
					justifyContent: "space-around",
					gap: 10,
					marginTop: 10,
				}}
			>
				{data.map((item, i) => (
					<Box
						key={i}
						w="29%"
						marginBottom="20"
						shadow="base"
						border="1px"
						borderColor="gray.200"
						bg="white"
					>
						<img src={item.image} style={{ width: "100%", marginTop: 0 }} />
						<Box p="15px" style={{display: "flex"||"-ms-flexbox", flexDirection: "column", justifyContent:"space-between"}}>
							<h2
								style={{
									fontSize: 20,
									marginTop: 10,
								}}
							>
								{item.header}
							</h2>
							<p style={{ marginTop: 10, color: `rgba(0, 0, 0, 0.6)` }}>
								{item.bodyText}
							</p>

							<Link
								border="1px "
								borderColor="gray.400"
								display="block"
								mt="12"
								w="fit-content"
								rounded="3xl"
								href="#"
								style={{ padding: "0.5rem 1rem", color: "#253d95" }}
							>
								{item.btnText}
							</Link>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
};

const data = [
	{
		image: BuyAirtime,
		header: "Buy airtime & Data bundles",
		bodyText:
			"You can buy Data bundle and Airtime of any network from us at a very affordable prices.",
		btnText: "Buy now",
	},

	{
		image: PayForUtils,
		header: "Pay for utilities",
		bodyText:
			"Pay your bills like Cable subscriptions, Electricity bills etc. And earn some % discount..",
		btnText: "Pay now",
	},
	{
		image: Referral,
		header: "Refer & earn",
		bodyText:
			"You can make extra cash with referral bonuses when you invite a friend to TopupBox CONNECT.   See T’s & C’s ",
		btnText: "Share your referral link",
	},
];
export default WhySection;
