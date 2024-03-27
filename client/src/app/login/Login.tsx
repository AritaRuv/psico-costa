"use client";
//import { SignIn } from "@/store/login/typeLogin";
//import { validateCompletedInputsLogin } from "@/utils/validateForms";
//import { FormErrorsLogin } from "@/interfaces/login";
import {
	Avatar,
	Box,
	Button,
	Center,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Text,
	// useToast,
	// useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import {
	PiUserCircleThin,
	PiLockThin,
	// PiEyeSlashThin,
	// PiEyeThin,
} from "react-icons/pi";
import { PiUserThin } from "react-icons/pi";
//import { useRouter } from "next/navigation";
import { PropsLogIn} from "@/interfaces/login";
// import { useAppDispatch } from "@/store/hooks";
// import { postSigninAction } from "@/store/login/actionsLogin";
//import { getToken } from "@/utils/getCookiesToken";

const Login: React.FC<PropsLogIn> = () => {
  
	// const pathname = typeof window !== "undefined" ? localStorage.getItem("path") : "/home";
	// const dispatch = useAppDispatch();
	// const [formData, setFormData] = useState<SignIn>({
	// 	email: "",
	// 	password: "",
	// });
	// const [errors, setErrors] = useState<FormErrorsLogin>({});
	// const [show, setShow] = useState(false);
	// const [showErrors, setShowErrors] = useState(false);
	// const toast = useToast();
	// const router = useRouter();
	// const [isToastShowing, setIsToastShowing] = useState(false);
	// const [smallerThan600h] = useMediaQuery("(max-height: 600px)");

	// const handleChange = (event) => {
	// 	const name = event.target.name;
	// 	const value = event.target.value;
	// 	setFormData({
	// 		...formData,
	// 		[event.target.name]: event.target.value,
	// 	});
	// 	setErrors(
	// 		validateCompletedInputsLogin({
	// 			...formData,
	// 			[name]: value,
	// 		})
	// 	);
	// };

	// const handleClick = () => {
	// 	setActiveLogin(false);
	// };
  
	//Funcion que despacha una action POST con las credenciales email y password, las valida y devuelve el token cargandolo 
	//en el localstorage y en un estado de redux

	// const handleLogin = async () => {
	// 	setShowErrors(true);
	// 	if (Object.keys(errors).length) return;
	// 	await dispatch(postSigninAction(formData));
	// 	const token = getToken();

	// 	if (!isToastShowing) {
	// 		if (token === undefined) {
	// 			setIsToastShowing(true);
	// 			if (setIsToastShowing) {
	// 				return toast({
	// 					title: "Log in",
	// 					description: "Incorrect username or password.",
	// 					status: "warning",
	// 					variant: "subtle",
	// 					duration: 4000,
	// 					isClosable: true,
	// 					onCloseComplete: () => setIsToastShowing(false),
	// 				});
	// 			}
	// 		}
	// 	}
	// 	if (!isToastShowing) {
	// 		if (token && token.length !== 0) {
	// 			setIsToastShowing(true);
	// 			if (setIsToastShowing) {
	// 				toast({
	// 					title: "Log in",
	// 					description: "Log in successfull.",
	// 					status: "success",
	// 					variant: "subtle",
	// 					duration: 4000,
	// 					isClosable: true,
	// 					onCloseComplete: () => setIsToastShowing(false),
	// 				});
	// 			}
	// 			router.replace(pathname ? pathname : "/home");
	// 			setFormData({
	// 				email: "",
	// 				password: "",
	// 			});
	// 			localStorage.removeItem("path");
	// 			return;
	// 		}
	// 	}
	// 	return;
	// };

	// const handleShow = () => {
	// 	setShow(!show);
	// };

	return (
		<Box
			display={"flex"}
			h={"68vh"}
			maxH={ "600px"}
			w={"30vw"}
			minW={"450px"}
			bg={"#f2f2f2"}
			flexDirection={"column"}
			mt={0}
			mr={"15px"}
			mb={0}
		>
			<Box
				display={"flex"}
				h={"30vh"}
				alignItems={"center"}
				justifyContent={"flex-start"}
				flexDirection={"column"}
			>
				<Avatar
					icon={<PiUserThin fontSize={"5rem"} />}
					mt={"-40px"}
					h={"180px"}
					w={"180px"}
					bg={"#a9a9a9"}
				/>
				<Center mt={"3vh"} hidden={false}>
					<Text fontWeight={"thin"} fontSize={"1.4rem"}>
						{" "}
            LOG IN{" "}
					</Text>
				</Center>
			</Box>
			<Box
				display={"flex"}
				h={"25vh"}
				alignItems={"center"}
				justifyContent={"center"}
				flexDirection={"column"}
			>
				<Box
					display={"flex"}
					h={"20vh"}
					w={"18vw"}
					minW={"350px"}
					alignItems={"center"}
					justifyContent={"center"}
					position={"relative"}
					top={ 2}
					flexDirection={"column"}
				>
					<Box display={"flex"} w={"18vw"} minW={"300px"}>
						<InputGroup flexDirection={"column"} h={"60px"}>
							<InputLeftElement
								top={"-5px"}
								textAlign={"center"}
								pointerEvents="none"
							>
								<IconButton
									display={"flex"}
									textAlign={"center"}
									aria-label="User-icon"
									variant="unstyled"
									fontSize="2xl"
									icon={<PiUserCircleThin />}
								/>
							</InputLeftElement>
							<Input
								h={"25px"}
								position={"relative"}
								fontSize={"sm"}
								mt={"7px"}
								id={"email"}
								name={"email"}
								//value={formData.email}
								border={"none"}
								//onChange={handleChange}
								_focus={{
									boxShadow: "0 0.5px 0.5px #f2f2f2 inset, 0 0 5px #f2f2f2",
								}}
								style={{
									borderBottom: "1px solid black",
									borderRadius: "0", // Ajusta el radio de las esquinas a cero
									outline: "none",
								}}
								placeholder={"E-MAIL"}
							/>
							{/* {showErrors && (
								<Text color={"red"} mt={"0.5vh"} fontSize={"xs"}>
									{errors.email}
								</Text>
							)} */}
						</InputGroup>
					</Box>
					<Box display={"flex"} w={"18vw"} minW={"300px"}>
						<InputGroup h={"60px"} flexDirection={"column"}>
							<InputLeftElement
								top={"-5px"}
								textAlign={"center"}
								pointerEvents="none"
							>
								<IconButton
									display={"flex"}
									textAlign={"center"}
									aria-label="User-icon"
									variant="unstyled"
									fontSize="2xl"
									border={"none"}
									icon={<PiLockThin />}
								/>
							</InputLeftElement>
							<Input
								h={"25px"}
								position={"relative"}
								mt={"7px"}
								fontSize={"sm"}
								//type={show ? "text" : "password"}
								name={"password"}
								//value={formData.password}
								border={"none"}
								//onChange={handleChange}
								_focus={{
									boxShadow: "0 0.5px 0.5px #f2f2f2 inset, 0 0 5px #f2f2f2",
								}}
								style={{
									borderBottom: "1px solid black",
									borderRadius: "0", // Ajusta el radio de las esquinas a cero
									outline: "none",
								}}
								placeholder={"PASSWORD"}
							/>
							{/* {showErrors && (
								<Text color={"red"} mt={"0.5vh"} fontSize={"xs"}>
									{errors.password}
								</Text>
							)} */}
							<InputRightElement
								top={"-5px"}
								aria-label="Password-icon"
								fontSize="xl"
								//onClick={handleShow}
							>
								{/* {show ? (
									<IconButton
										aria-label="Password-icon"
										variant="unstyled"
										fontSize="2xl"
										display={"flex"}
										textAlign={"center"}
										icon={<PiEyeSlashThin />}
									/>
								) : (
									<IconButton
										aria-label="Password-icon"
										variant="unstyled"
										fontSize="2xl"
										display={"flex"}
										textAlign={"center"}
										icon={<PiEyeThin />}
									/>
								)} */}
							</InputRightElement>
						</InputGroup>
					</Box>
				</Box>
			</Box>
			<Box
				display={"flex"}
				h={"15vh"}
				w={"full"}
				mb={"2vh"}
				flexDirection={"column"}
			>
				<Button
					//onClick={handleLogin}
					fontWeight={"light"}
					border={"none"}
					backgroundColor={"transparent"}
					_hover={{
						backgroundColor: "transparent",
						fontWeight: "semibold",
					}}
					_focus={{
						backgroundColor: "transparent",
						border: "none",
					}}
				>
          LOG IN
				</Button>
				<Box
					display={"flex"}
					flexDirection={"row"}
					h={"10vh"}
					justifyContent={"center"}
					alignItems={"flex-end"}
					color={"#6A6969"}
				>
					<Text>New customer?</Text>
					<Center ml={"10px"}>
						<Button
							border={"none"}
							backgroundColor={"transparent"}
							_hover={{
								backgroundColor: "transparent",
							}}
							_focus={{
								backgroundColor: "transparent",
								border: "none",
							}}
							style={{
								borderBottom: "1px solid gray",
								borderRadius: "0", // Ajusta el radio de las esquinas a cero
								outline: "none",
							}}
							color={"#6A6969"}
							h={"18px"}
							mb={"0.5vh"}
							fontWeight={"light"}
							//onClick={handleClick}
						>
              START HERE
						</Button>
					</Center>
				</Box>
			</Box>
		</Box>
	);
};

export default Login;
