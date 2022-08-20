import { Box, Link } from "@chakra-ui/react";
import React from "react";

import PosMachine from "../../assets/posMachine.png";

const AnotherSection = () => {
	return (
		<Box px="20" my="1rem">
			<Box
				display="flex"
				justifyContent="space-center"
				alignItems="center"
				style={{ borderRadius: "10px" }}
				px="10px"
				rounded="sm"
				shadow="base"
				bg="white"
				border="1px"
				
				borderColor="gray.300"
			>
				<Box width="47%">
					<h1 style={{ color: "#253d95", fontSize: 25 }}>
						Recharge card printing
					</h1>
					<p style={{ marginTop: 15, letterSpacing: 1 }}>
						Get recharge card pins at discounted prices and Start your own
						recharge card printing business today.
					</p>
					<Link
						href=""
						w="fit-content"
						color="#fff"
						bg="#253d95"
						px="1rem"
						fontSize="larger"
						mt="20px"
						style={{ marginTop: 20, display: "block", width: "fit-content" }}
						py="0.6rem"
						borderRadius="3xl"
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
