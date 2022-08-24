import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Avatar from "../../assets/man.png";
import NewsletterForm from "../../components/NewsletterForm";

const Testimonialsection = () => {
	return (
		<Box
			style={{
				backgroundImage:
					"linear-gradient(to bottom, rgb(214, 255, 212) 50%, #fff )",
			}}
			w="full"
			py="1rem"
		>
			<h1
				style={{
					textAlign: "center",
					textTransform: "uppercase",
					textAlign: "center",
				}}
			>
				Testimonials
			</h1>
			<h1 style={{ marginTop: "1rem", textAlign: "center" }}>
				Feedback from users
			</h1>
			<Box w="full" my="10">
				<Box w="full" >
					<Box
						style={{
							display: "flex" || "flexbox" || "-ms-flexbox",
							flexDirection: "row",
							gap: "24px",
							flexWrap: "nowrap",
							justifyContent: "center",
							width: "100%",
							position: "relative",
							overflowX:"auto",
						}}
				
						flexShrink="none"
					>
						{reviews.map((item, idx) => (
							<Box
								key={idx}
								style={{
									// display: "inline-block",
									// float: "right",
									// marginRight: "24px",
									display: "flex",
									flexDirection: "column",
									alignItems: "space-between",
									flexShrink: 10,
									background: "#fff",
									borderRadius: "10px",
									padding: "10px",
									width: "312px",
									height: "194px",
								}}
							>
								<Text lineHeight="5" color="#212337">
									<span style={{ fontSize: "24px", color: "#253d95" }}>"</span>
									{item.comment}
									<span style={{ fontSize: "24px", color: "#253d95" }}>"</span>
								</Text>
								<Box
									className="reviewer"
									style={{
										display: "flex" || "-ms-flexbox" || "-webkit-flex",
										alignItems: "center",
										gap: "10px",
									}}
								>
									<img
										src={item.image}
										alt=""
										style={{ width: 50, height: 50 }}
									/>
									<Box w="full" d="block" textAlign="left">
										<Text fontSize="18px">{item.customerName}</Text>
										<Text fontSize="16px" fontWeight="normal">
											{item.role}
										</Text>
									</Box>
								</Box>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

const reviews = [
	{
		comment:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in dolorem blanditiis delectus facere ducimus animi officia rem ",
		image: Avatar,
		customerName: "Jon doe",
		role: "Product Designer",
	},
	{
		comment:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in dolorem blanditiis delectus facere ducimus animi officia rem ",
		image: Avatar,
		customerName: "Jon doe",
		role: "Product Designer",
	},
	{
		comment:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in dolorem blanditiis delectus facere ducimus animi officia rem ",
		image: Avatar,
		customerName: "Jon doe",
		role: "Product Designer",
	},
	{
		comment:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in dolorem blanditiis delectus facere ducimus animi officia rem ",
		image: Avatar,
		customerName: "Jon doe",
		role: "Product Designer",
	},
	
];
export default Testimonialsection;
