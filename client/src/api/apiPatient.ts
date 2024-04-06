import { Patient } from "@/redux/patient/patient_types";
import axios from "axios";

export const getPatients = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/patients/get_all")
    return response.data
  } catch (error) {
    throw new Error("Error al obtener los pacientes de la API");
  }
}

export const createNewPatient = async(bodyNewPatient: Patient) => {
  try {
    const response = await axios.post("http://localhost:3000/api/patients/new_patient", bodyNewPatient)
    return response.data
  } catch (error) {
    throw new Error ("Error al crear paciente")
  }
}