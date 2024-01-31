// partners icons

import { Box, HStack, Link } from "@chakra-ui/react";
import React from "react";
import NineMobile from "../../assets/Partners icons/9mobile.png";
import Airtel from "../../assets/Partners icons/Airtel.png";
import Mtn from "../../assets/Partners icons/Mtn.png";
import Spectranet from "../../assets/Partners icons/Spectranet.png";
import Smile from "../../assets/Partners icons/Smile.png";
const Partners = () => {
	return (
		<Box>
			<h1 style={{ textAlign: "center",fontSize: 18, fontWeight: "normal", letterSpacing: 1 }}>OUR PARTNERS</h1>
			<HStack spacing="24" mt="10">
				{partners.map((item, i) => (
					<Link href="" key={i} mt="2">
						<img
							src={item.image}
							style={{
								width: i > 2 ? 70 : 60,
								height: i > 2 ? 70 : 60,
								borderRadius: i > 2 ? 10 : "50%",
							}}
						/>
					</Link>
				))}
			</HStack>
		</Box>
	
	);
};

const partners = [
	{
		link: "",
		image: NineMobile,
	},
	{
		link: "",
		image: Mtn,
	},
	{
		link: "",
		image: Airtel,
	},
	{
		link: "",
		image: Spectranet,
	},
	{
		link: "",
		image: Smile,
	},
];
export default Partners;
