import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import howitWork_bg from "../../../assets/howitworks_bg.png";
const Intro = () => {
	return (
		<Box w="full" px="20" py="10">
			{/* <Box style={{display: "flex", justifyContent: "flex-start"}}> */}

			<Text fontSize="25px" fontWeight="bold">
				HOW IT WORKS
			</Text>
			{/* </Box> */}
			<Box
				backgroundImage=""
				style={{
					backgroundImage: `url(${howitWork_bg})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
				backgroundPosition="center"
				backgroundRepeat="no-repeat"
				w="full"
                mt="1rem"
				h="350px"
				bgColor="#000"
			>
				<Text
					verticalAlign="middle"
					style={{
						display: "block",
						margin: "auto",
						color: "#f1f1f1",
						fontSize: "25px",
					}}
				>
					How does Top up connect work?
				</Text>
			</Box>
		</Box>
	);
};

export default Intro;
