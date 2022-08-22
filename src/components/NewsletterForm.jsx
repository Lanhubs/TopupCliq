import { Button } from "@chakra-ui/button";
import { Box, Container, FormLabel, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";

import React from "react";

const NewsletterForm = () => {
	return (
		<Container py="10">
			<Text style={{textAlign: "center", fontWeight: "bolder", fontSize: "larger"}}>Sign up for latest updates</Text>
			<form style={{ marginTop: "1rem" }}>
				<FormLabel>Email Address</FormLabel>
				<InputGroup >
					<Input
						type="email"
						placeholder="jondoe@gmail.com"
						border="none"
						borderRadius="none"
						mr="0.5rem"
						borderBottom="2px solid #253d95"
					/>
					{/* <InputRightElement> */}
					<Button
						bgColor="#253d95"
						borderRadius="3xl"
                        width="200px"
						style={{ padding: "0.5rem 1rem", fontWeight: "lighter" }}
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
