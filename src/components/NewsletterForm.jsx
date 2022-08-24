import { Button } from "@chakra-ui/button";
import {
	Box,
	Container,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";

import React from "react";

const NewsletterForm = () => {
	return (
		<Container py="10">
			<Text
				style={{ textAlign: "center", fontWeight: "bolder", fontSize: "32px" }}
			>
				Sign up for latest updates
			</Text>
			<form style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
				<FormLabel>Email Address</FormLabel>
				<InputGroup style={{display: "flex", gap: 10, alignItems: "center"}}>
					<Input
						type="email"
						placeholder="jondoe@gmail.com"
						border="none"
						height="60px"
						borderRadius="none"
						mr="0.5rem"
						borderBottom="1px solid #253d95"
					/>
					{/* <InputRightElement> */}
					<Button
						bgColor="#253d95"
						borderRadius="50px"
						width="165px"
						height="60px"
						style={{ textAlign: "center", fontWeight: "lighter" }}
						color="#fff"
					>
						Subscribe
					</Button>
					{/* </InputRightElement> */}
				</InputGroup>
			</form>
		</Container>
	);
};

export default NewsletterForm;
