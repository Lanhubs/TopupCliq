import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import userVector from "../../assets/users.png";
const Intro = () => {
	return (
		<Box
			style={{
				top: 0,
				backgroundImage:
					"linear-gradient(to bottom left, rgb(214, 255, 212), #fff 65%)",
                    height: "400px",
			}}
			px="20"
			mt="0"
		>
			<Flex alignItems="center">
				<Box className="left" w="50%" h="100%">
					<h1
						style={{
							fontSize: "35px",
						}}
					>
						Buy, Sell, Connect
					</h1>
					<h1
						style={{
							fontSize: 35,
						}}
					>
						Refer,{" "}
						<span
							color=""
							style={{
								fontSize: 40,
								color: "#253d95",
							}}
						>
							EARN
						</span>
					</h1>
				</Box>
				<img
					src={userVector}
					alt=""
					style={{
						width: "50%",
						height: "100%",
					}}
				/>
			</Flex>
		</Box>
	);
};

export default Intro;
