"use client";
import {
	Box
} from "@chakra-ui/react";
//import { useState } from "react";
// import Login from "./Login";
// import Checkout from "./checkout";
// import SignUp from "./SignUp";
// import Footer from "./footer";
import React from "react";

const ContainerLogin: React.FC = () => {

	// const [activeLogin, setActiveLogin] = useState(true);
	// const [smallerThan600] = useMediaQuery("(max-width: 600px)");
	// const [smallerThan1200] = useMediaQuery("(max-width: 1200px)");
	// const [smallerThan1450] = useMediaQuery("(max-width: 1450px)");

	return (
		<>
			<Box
				w={"full"}
				h={"unset"}
				mt={ "18vh"}
				display={"flex"}
				alignItems={"flex-start"}
				justifyContent={"center"}
				flexDirection={"row"}
			>
				{/* {activeLogin ? (
					<Login
						setActiveLogin={setActiveLogin}
						smallerThan600={smallerThan600}
						smallerThan1200={smallerThan1200}
						smallerThan1450={smallerThan1450}

					/>
				) : (
					<SignUp
						setActiveLogin={setActiveLogin}
						smallerThan600={smallerThan600}
						smallerThan1200={smallerThan1200}
						smallerThan1450={smallerThan1450}

					/>
				)} */}
				{/* <Checkout
				/> */}
			</Box>
		</>
	);
};

export default ContainerLogin;
