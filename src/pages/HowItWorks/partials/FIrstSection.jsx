import React from 'react'
import { VStack, Box, Flex, Link, Text, Image, } from '@chakra-ui/react'
import InviteIcon from "../../../assets/Icons/inviteIcon.png"
import Earnicon from '../../../assets/Icons/Earn.png'
import registerIcon from "../../../assets/Icons/register.png"
const FIrstSection = () => {
  return (
		<Box style={{ display: "flex", justifyContent: "center" }} w="100%">
			<Box style={{ display: "flex" }} my="10" mx="20" gap="1.7rem">
				{data.map((item, idx) => (
					<Box
						key={idx}
						w="32%"
						style={{
							display: "flex",
							textAlign: "center",
							flexDirection: "column",
							alignItems: "center",
						}}
						p="1rem"
					>
						<Image src={item.icon} alt="" w="83px" h="83px" />
						<Link
							style={{
								color: "#263B95",
								display: "block",
								textDecoration: "none",
							}}
							fontWeight="bold"
							fontSize="24px"
							my="1rem"
						>
							{item.header}
						</Link>
						<Text color="gray.600" fontSize="16px">
							{item.desc}
							{idx === 1 ? (
								<Link href="#"  textDecoration="none" color="#263B95">
									See T & C’s
								</Link>
							) : (
								""
							)}
						</Text>
					</Box>
				))}
			</Box>
		</Box>
	);
}


const data = [
	{
		icon: registerIcon,
		header: "Register",
		desc: "You can make extra cash with referral bonuses when you invite a friend to TopupBox CONNECT.  ",
	},
	{
		icon: InviteIcon,
		header: "Invite friends with  link/code",
		desc: "You can make extra cash with referral bonuses when you invite a friend to TopupBox CONNECT.   ",
	},
	{
		icon: Earnicon,
		header: "Earn money from referrals",
		desc: "You can make extra cash with referral bonuses when you invite a friend to TopupBox CONNECT.    ",
	},
];
export default FIrstSection