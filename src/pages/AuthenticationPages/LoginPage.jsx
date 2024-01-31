import {
	Box,
	Button,
	Container,
	FormLabel,
	Image,
	Input,
	InputGroup,
	InputRightAddon,
	InputRightElement,
	Text,
    Link
} from "@chakra-ui/react";
import backgroundImg from "../../assets/authbg.png";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../../assets/Icons/Logo.png";
const LoginPage = () => {
	const eyeIcon = <FaEye fontSize="20px"/>;
	const eyeSlashIcon = <FaEyeSlash fontSize="20px" />;
	const [makePwdVisisble, setMakePwdVisisble] = React.useState(false);
	const handlePwdVisibility = () => setMakePwdVisisble(!makePwdVisisble);


const [mouseHover, setMouseHover] = useState(false)
const [mouseLeave, setMouseLeave] = useState(false)


	return (
		<Box
			style={{
				width: "100%",
				height: "100%",
				padding: "64px 80px",
				background: `url(${backgroundImg}) `,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				display: "flex",
				gap: "70px",
			}}
		>
			<Box>
				<Image src={Logo} />
			</Box>
			<Box>
				<Text
					style={{
						fontSize: "32px",
						fontWeight: "normal",
						textAlign: "center",
					}}
				>
					Login to your account
				</Text>

				<Container
					mt="10"
					w="530px"
					height="426px"
					p="40px "
					background="#fff"
					boxShadow="0px -20px 40px rgba(38, 59, 149, 0.02), 0px 20px 40px rgba(38, 59, 149, 0.02)"
				>
					<form action="">
						<FormLabel fontSize="12px">Email Address</FormLabel>
						<Input
							type="email"
							placeholder="jonDoe@gmail.com"
							border="none"
							borderRadius="0"
							borderBottom="1px solid #212337"
							outline="none"
                            style={{outlineStyle: "none"}}
						/>
						<FormLabel fontSize="12px" mt="10">
							Password
						</FormLabel>
						<InputGroup>
							<Input
								
                                style={{outlineStyle: "none"}}
                                
								type={makePwdVisisble ? "password" : "text"}
								placeholder="*************"
								border="none"
								borderRadius="0"
								borderBottom="1px solid #212337"
							/>
							<InputRightElement
								children={
									<Button
										fontSize="20px"
										bg="none"
                                        onMouseEnter={()=>setMouseHover(true)}
                                        onMouseLeave={()=>setMouseLeave(true)}
                                        style={{background: "none", ":hover":{border: "none"}}}
										border="none"
										onClick={() => handlePwdVisibility()}
									>
										{makePwdVisisble === true ? eyeSlashIcon : eyeIcon}
									</Button>
								}
							/>
						</InputGroup>
						<Text textAlign="right" mt="1rem">
							Don’t have an account?{" "}
							<Link
								href="/register"
								style={{ textDecoration: "none" }}
								color="#263B95"
							>
								Register
							</Link>
						</Text>
						<Button
							bg="#263B95"
							color="#fff"
							borderRadius="50px"
							mt="10"
							fontSize="18px"
							w="100%"
							fontWeight="700"
							lineHeight="23px"
							h="68px"
						>
							Login
						</Button>
					</form>
					<Text textAlign="center" mt="1rem">
						Don’t have an account?{" "}
						<Link
							href="/register"
							style={{ textDecoration: "none" }}
							color="#263B95"
						>
							Register
						</Link>
					</Text>
				</Container>
			</Box>
		</Box>
	);
};

export default LoginPage;
