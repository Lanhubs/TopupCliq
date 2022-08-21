import { Box } from "@chakra-ui/react";
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
			textAlign="center"
			w="full"
			py="1rem"
		>
			<h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
				Testimonials
			</h1>
			<h1 style={{ marginTop: "1rem" }}>Feedback from users</h1>
			<Box w="full" overflowX={"auto"} my="10">
				<Box
					style={{
						display: "flex" || "flexbox" || "-ms-flexbox",
						gap: "1.5rem",
						overflowX: "auto",
					}}
				>
					{reviews.map((item, idx) => (
						<Box
							key={idx}
							style={{
								background: "#fff",
								borderRadius: "10px",
								padding: "10px",
								fontStyle: "oblique",
								width: "250px",
							}}
						>
							<p>
								<span
									style={{ fontSize: "25px", color: "#253d95", fontStyle: "" }}
								>
									"
								</span>
								{item.comment}
								<span style={{ fontSize: "25px", color: "#253d95" }}>"</span>
							</p>
							<Box
								className="reviewer"
								style={{
									display: "flex" || "-ms-flexbox" || "-webkit-flex",
									alignItems: "center",
									justifyContent: "center",
									gap: "1rem",
								}}
							>
								<img
									src={item.image}
									alt=""
									style={{ width: 60, height: 60 }}
								/>
								<h3>{item.customerName}</h3>
							</Box>
						</Box>
					))}
				</Box>
			</Box>
            <NewsletterForm/>
		</Box>
	);
};

const reviews = [
	
	{
		comment:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in dolorem blanditiis delectus facere ducimus animi officia rem ",
		image: Avatar,
		customerName: "Jon doe",
	},
	{
		comment:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in dolorem blanditiis delectus facere ducimus animi officia rem ",
		image: Avatar,
		customerName: "Jon doe",
	},
	{
		comment:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in dolorem blanditiis delectus facere ducimus animi officia rem ",
		image: Avatar,
		customerName: "Jon doe",
	},
	{
		comment:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in dolorem blanditiis delectus facere ducimus animi officia rem ",
		image: Avatar,
		customerName: "Jon doe",
	},
	{
		comment:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in dolorem blanditiis delectus facere ducimus animi officia rem ",
		image: Avatar,
		customerName: "Jon doe",
	},
	{
		comment:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in dolorem blanditiis delectus facere ducimus animi officia rem ",
		image: Avatar,
		customerName: "Jon doe",
	},
];
export default Testimonialsection;
