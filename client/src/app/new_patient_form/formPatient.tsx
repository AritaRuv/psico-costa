import { Box, InputGroup, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { NewPatient, NewPatientProps } from "@/redux/NewPatient/newPatientTypes";

export const NewPatientForm: React.FC<NewPatientProps> = ({formData}) => { 

	const varNewPatient = [
		{title: "Nombre", dbTable: "firstName" },
		{title: "Apellido", dbTable: "lastName" },
		{title: "Email", dbTable: "email" },
		{title: "Direccion", dbTable: "address" },
		{title: "Celular", dbTable: "phoneNumber" },
		{title: "Nr de D.N.I.", dbTable: "dni" },
		{title: "Genero", dbTable: "gender" },
		{title: "Plan Obra Social", dbTable: "inurancePlan_id" },
	];
	return(
		<>
			<VStack w={"350px"} p={"10px"}>
				{
					varNewPatient.map( (e, i) => {
            return(
              <InputGroup display={"flex"} flexDir={"column"} key={i}>
                <Text>{e.title}</Text>
								<Input value={formData[e.dbTable as keyof NewPatient] || ''}/>
              </InputGroup>
              )
				  })
        }
		</VStack>
		</>
	);
}