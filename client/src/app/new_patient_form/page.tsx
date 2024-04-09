"use client"
import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { NewPatientForm } from "./formPatient";
import { Patient } from "@/redux/patient/patient_types";
import { postNewPatient } from "@/redux/patient/patient_actions";
import { useAppDispatch } from "@/hooks";

export default function NewPatientPage () {

  const dispatch = useAppDispatch();
	const [formData, setFormData] = useState<Patient>({
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
		dispatch(postNewPatient(formData))
		setFormData({
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