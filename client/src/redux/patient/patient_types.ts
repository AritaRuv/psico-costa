export interface Patient{
  firstName: string,
  lastName: string
  email: string,
  address: string,
  phoneNumber: number | null ,
  dni: number| null ,
  gender: string,
  inurancePlan_id: number | null ,
  role_id: number | null 
}

export interface PatientProps{
  formData: Patient,
  setFormData: (formData: Patient) => void;
}

export interface PatientState{
  patient: Patient | string ,
  loading: boolean,
  error: boolean

}
  
export enum PatientActionTypes {
    FETCH_PATIENT_REQUEST = "FETCH_PATIENT_REQUEST",
    FETCH_PATIENT_SUCCESS = "FETCH_PATIENT_SUCCESS",
    FETCH_PATIENT_FAILURE = "FETCH_PATIENT_FAILURE",
    POST_PATIENT = "POST_PATIENT",
    DELETE_PATIENT = "DELETE_PATIENT",
  }
  
export interface FetchPatientRequestAction {
  type: PatientActionTypes.FETCH_PATIENT_REQUEST;
}

export interface FetchPatientuccessAction {
  type: PatientActionTypes.FETCH_PATIENT_SUCCESS;
  payload: Patient[];
}

export interface PostPatient {
    type: PatientActionTypes.POST_PATIENT;
    payload: Patient[];
  }
export interface DeletePatient {
    type: PatientActionTypes.DELETE_PATIENT;
    payload: Patient[];
  }
export interface FetchPatientFailureAction {
    type: PatientActionTypes.FETCH_PATIENT_FAILURE;
    error: string;
  }

export type PatientAction =
    | FetchPatientRequestAction
    | FetchPatientuccessAction
    | FetchPatientFailureAction
    | DeletePatient
    | PostPatient;