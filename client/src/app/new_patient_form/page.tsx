"use client"
import { Box, InputGroup, Input, Text, VStack, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { NewPatientForm } from "./formPatient";
import { NewPatient } from "@/redux/NewPatient/newPatientTypes";

export default function NewPatientPage () {

	const [formData, setFormData] = useState<NewPatient>({
		firstName: "",
		lastName: "",
		email: "",
		address: "",
		phoneNumber: null ,
		dni: null,
		gender: "",
		inurancePlan_id: null,
		role_id: null,
	})

	return(
		<>
			<Box display={"flex"} flexDir={"column"} w={"350px"}>
				<NewPatientForm formData={formData} setFormData={setFormData}/>
				<Button>Crear</Button>
			</Box>
		</>
	);
}