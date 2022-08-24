import { Box, Link } from "@chakra-ui/react";
import React from "react";

import PosMachine from "../../assets/posMachine.png";

const AnotherSection = () => {
	return (
		<Box px="20" my="1rem" mb="10" d="block">
			<Box
				display="flex"
				justifyContent="space-center"
				alignItems="center"
				style={{ borderRadius: "10px" }}
				p="10"
				rounded="sm"
				shadow="base"
				bg="white"
				border="1px"
				
				borderColor="gray.300"
			>
				<Box width="45%">
					<h1 style={{ color: "#253d95", fontSize: 32 }}>
						Recharge card printing
					</h1>
					<p style={{ marginTop: 15, fontSize: "16px"}}>
						Get recharge card pins at discounted prices and Start your own
						recharge card printing business today.
					</p>
					<Link
						href=""
						w="180px"
						color="#fff"
						bg="#253d95"
						
						h="56px"
						fontSize="16px"
						mt="20px"
						style={{ marginTop: 20, display: "flex",alignItems: "center", justifyContent: "center"}}
						py="0.6rem"
						borderRadius="50px"
					>
						Start printing
					</Link>
				</Box>
				<Box w="52%">
					<img src={PosMachine} alt="" />
				</Box>
			</Box>
		</Box>
	);
};

export default AnotherSection;
