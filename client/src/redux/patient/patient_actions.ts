// actions.ts
import { createNewPatient, getPatients } from "@/api/apiPatient";
import { Patient, PatientAction, PatientActionTypes } from "./patient_types";
import { Dispatch } from "redux";

export const fetchPatients = () => {
  return async (dispatch: Dispatch<PatientAction>) => {
    try {
      const patients = await getPatients();
      dispatch({
        type: PatientActionTypes.FETCH_PATIENT_SUCCESS,
        payload: patients
      })
    } catch (error) {
      console.log("Error en fetchpatients", error)
    }
  }
}

export const postNewPatient = (BodyNewPatient: Patient) => {
  return async (dispatch: Dispatch<PatientAction>) => {
    try{
      const res = await createNewPatient(BodyNewPatient);
      dispatch({
        type: PatientActionTypes.POST_PATIENT,
        payload: res
      })
    }catch(error){
      console.log("Error en postPatient", error)
    }
  }
}
