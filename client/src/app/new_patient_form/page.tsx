"use client"
import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { NewPatientForm } from "./formPatient";
import { NewPatient } from "@/redux/patient/patient_types";

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
	const handleSubmit = () => {

	}

	return(
		<>
			<Box display={"flex"} flexDir={"column"} w={"350px"}>
				<NewPatientForm formData={formData} setFormData={setFormData}/>
				<Button onSubmit={handleSubmit}>Crear</Button>
			</Box>
		</>
	);
}