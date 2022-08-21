import { Box, Button, Container, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

import React from "react";

const NewsletterForm = () => {
	return (
		<Container>
			<h1>Sign up for latest updates</h1>
			<form style={{ marginTop: "1rem" }}>
				<FormLabel>Email Address</FormLabel>
				<InputGroup>
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
                        spacing="10px"
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
