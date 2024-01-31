import { useState } from "react";
import "../index.css";

import Logo from "../assets/Icons/Logo.png";
import { FaBars, FaAngleDown } from "react-icons/fa";

import {
	useDisclosure,
	MenuItem,
	Menu,
	MenuButton,
	MenuList,
	useColorModeValue,
	Box,
	HStack,
	Flex,
	LinkBox,
	Link,
	IconButton,
} from "@chakra-ui/react";
import {
	ChevronDownIcon,
	ChevronUpIcon,
	CloseIcon,
	HamburgerIcon,
} from "@chakra-ui/icons";
import { Button } from "flowbite-react";

const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Box w="100%" bg="white" px="20" pt="10px">
				<Box
					d="flex"
					display="flex"
					gap="108px"
					justifyContent="space-between"
					alignItems="center"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						gap: "108px",
					}}
				>
					<Box
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<img src={Logo} style={{ width: "165px", height: "48px" }} alt="" />
					</Box>

					<Box w="75%">
						<Flex
							flexDir="row"
							justifyContent="space-between"
							alignItems="center"
							px="10"
						>
							<Box d="flex" flexDir="row">
								{navLinks.map((item, i) => (
									<Link
										key={i}
										href={item.link}
										className="navlink"
										_activeLink={{
											color: "#212337",
										}}
										textDecoration="none"
										style={{
											fontSize: "16px",
											textDecoration: "none",
											color: "#212337",
										}}
									>
										{item.text}
									</Link>
								))}
								<Dropdown />
							</Box>
							<Box className="nav-right">
								<Link
									px="1.5em"
									py="0.5em"
									lineHeight="19px"
									fontSize={"16px"}
									fontWeight="500"
									className="navlink-right"
									borderRadius="2xl"
									borderWidth={"1.5px"}
									borderColor="slategray"
									height="48px"
									width="148px"
									color="#212337"
									href="/login"
									textDecoration="none"
									_active={{
										background: "#253d95",
										color: "#fff",
										border: "none",
									}}
									style={{
										textDecoration: "none",
										border: "1.5px solid  #E9EAEC ",
									}}
								>
									Log in
								</Link>
								<Link
									href="/register"
									textDecoration="none"
									height="48px"
									width="148px"
									fontWeight="500"
									px="1.5em"
									py="0.5rem"
									fontSize="16px"
									mx="10px"
									color="white"
									bg="#263B95"
									borderRadius={"2xl"}
									_active={{
										background: "none",

										border: "1.5px solid  #E9EAEC ",

										color: "#fff",
									}}
									style={{
										textDecoration: "none",
									}}
								>
									Register
								</Link>
							</Box>
						</Flex>
					</Box>
					<IconButton
						size={"md"}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={"Open Menu"}
						display={{ md: "none" }}
						onClick={isOpen ? onClose : onOpen}
					/>
				</Box>
			</Box>
		</>
	);
};

export default Header;

function Dropdown() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Menu isOpen={isOpen}>
			<MenuButton
				variant="ghost"
				mx={1}
				py={[1, 2, 2]}
				px={4}
				borderRadius={5}
				_hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
				aria-label="Courses"
				fontWeight="normal"
				color="#212337"
				onMouseEnter={onOpen}
				onMouseLeave={onClose}
			>
				More Options {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
			</MenuButton>
			<MenuList
				onMouseEnter={onOpen}
				width="150px"
				marginTop={"5"}
				onMouseLeave={onClose}
			>
				{dropDownItems.map((item, i) => (
					<MenuItem key={i}>
						<Link
							style={{
								textDecoration: "none",
							}}
						>
							{" "}
							{item.text}
						</Link>
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
}

const dropDownItems = [
	{
		link: "",
		text: "Buy Airtime",
	},
	{
		link: "",
		text: "Buy Data Bundle",
	},
	{
		link: "",
		text: "Cable Tv Subscription",
	},
	{
		link: "",
		text: "Electricity Bills",
	},
	{
		link: "",
		text: "Print Recharge Card",
	},
];

const navLinks = [
	{
		link: "/",
		text: "Home",
	},
	{
		link: "/howitworks",
		text: "How It Works",
	},
	{
		link: "/aboutus",
		text: "About Us",
	},
	{
		link: "/faq",
		text: "FAQ",
	},
];
