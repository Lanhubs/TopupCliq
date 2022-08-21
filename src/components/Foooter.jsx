import TopUpLogo from "../assets/Logo.png";
import {
	Box,
	Container,
	Flex,
	HStack,
	Link,
	SimpleGrid,
	Stack,
	Text,
	useColorModeValue,
    VStack,
} from "@chakra-ui/react";

import {
	FaTwitter,
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaFacebookF,
} from "react-icons/fa";

const ListHeader = ({ children }) => {
	return (
		<Text fontWeight={"500"} fontSize={"lg"} mb={2}>
			{children}
		</Text>
	);
};

export default function Footer() {
	return (
		<Box bg="#212337" color="#f1f1f1" w="full">
			<Box as={Stack} maxW={"6xl"} mx="auto" py={10}>
				<SimpleGrid
					templateColumns={{
						sm: "1fr 1fr",
						md: "2fr 1fr 1fr 1fr 1fr",
					}}
					spacing={8}
				>
					<Stack spacing={6}>
						<Box>
							<img src={TopUpLogo} alt="" />
						</Box>
					</Stack>
					<Stack align={"flex-start"}>
						<ListHeader>Company</ListHeader>
						<Link href={"#"}>About us</Link>

						<Link href="#">FAQ's</Link>
					</Stack>
					<Stack align={"flex-start"}>
						<ListHeader>Services</ListHeader>

						{services.map((item, idx) => (
							<Link key={idx} href={item.link}>
								{item.text}
							</Link>
						))}
					</Stack>
					<Stack align={"flex-start"}>
						<ListHeader>Terms of Service</ListHeader>
						<Link href={"#"}>Privacy Policy</Link>
						<Link href={"#"}>Terms and Conditions</Link>
					</Stack>
					<Stack align={"flex-start"}>
						<ListHeader>Follow Us</ListHeader>
						<Text style={{ marginTop: "10px" }}>
							163, sinari daranijo street, Victoria Island, Lagos, Nigeria.
						</Text>
						<Text style={{ marginTop: "10px" }}>Zouse@support.com</Text>
						<Text style={{ marginTop: "10px" }}>+234 8123 456 784</Text>
					</Stack>
				</SimpleGrid>
			</Box>
			<Box
				w="full"
				style={{
					display: "flex" || "-ms-flexbox" || "-webkit-flex",
					justifyContent: "center",
				}}
				py="10"
			>
				<HStack gap="1em" alignItems="center">
					{socialMedias.map((item, idx) => (
						<Link
							key={idx}
							href={item.link}
							style={{
								fontSize: 30,
								color: "#fff",
								background: "#253d95ac",
								padding: 10,
								borderRadius: "50%",
							}}
						>
							{item.icon}
						</Link>
					))}
				</HStack>
			</Box>
			<Box w="full" textAlign="center" py="1.5rem" borderTop="1.5px solid #f3f3f3">
				<Text>&copy; 2022 Top up connect. All rights reserved</Text>
			</Box>
		</Box>
	);
}

const socialMedias = [
	{
		link: "#",
		icon: <FaTwitter />,
	},
	{
		link: "#",
		icon: <FaInstagram />,
	},
	{
		link: "#",
		icon: <FaYoutube />,
	},
	{
		link: "#",
		icon: <FaFacebookF />,
	},
];

const services = [
	{
		link: "#",
		text: "Print Recharge Card",
	},
	{
		link: "#",
		text: "Buy Airtime & Data",
	},
	{ link: "#", text: "Pay Utilies" },
	{ link: "#", text: "Refer & Earn" },
];