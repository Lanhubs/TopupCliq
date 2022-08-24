import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
import "../index.css";

import Logo from "../assets/Logo.png"
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
			<Box w="100%" bg="white"  px="20" py="10px">
				<Flex flexDir="row" justifyContent="space-between">
					<Box
						style={{
							img: {
								marginTop: "auto",
							},
						}}
					>
						<img src={Logo} style={{ float: "left" }} alt="" />
						
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
										_active={{ color: "#253d95" }}
										key={i}
										href={item.link}
										className="navlink"
										_activeLink={{
											color: "#253d95",
										}}
										textDecoration="none"
										style={{
											textDecoration: "none",
											color: "grey"
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
									fontSize={"medium"}
									className="navlink-right"
									borderRadius="2xl"
									borderWidth={"1.5px"}
									borderColor="slategray"
									color="GrayText"
									textDecoration="none"
									_active={{ background: "#253d95", color: "#fff",  border: "none"}}
									style={{
										textDecoration: "none",
									}}
								>
									Log in
								</Link>
								<Link
									textDecoration="none"
									px="1.5em"
									py="0.5rem"
									fontSize="medium"
									mx="10px"
									color="white"
									bg="#253d95"
									borderRadius={"2xl"}
									_active={{
										background: "none",
										border: "1.5px solid  slategray ",

										color: "slategray",
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
				</Flex>
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
