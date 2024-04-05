export interface NewPatient{
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

export interface NewPatientProps{
  formData: NewPatient,
  setFormData: (formData: NewPatient) => void;
}

export interface NewPatientState{
  new_patient: NewPatient | string ,
  loading: boolean,
  error: boolean

}
  
export enum NewPatientActionTypes {
    FETCH_NEWPATIENT_REQUEST = "FETCH_NEWPATIENT_REQUEST",
    FETCH_NEWPATIENT_SUCCESS = "FETCH_NEWPATIENT_SUCCESS",
    FETCH_NEWPATIENT_FAILURE = "FETCH_NEWPATIENT_FAILURE",
    POST_NEWPATIENT = "POST_NEWPATIENT",
    DELETE_NEWPATIENT = "DELETE_NEWPATIENT",
  }
  
export interface FetchNewPatientRequestAction {
  type: NewPatientActionTypes.FETCH_NEWPATIENT_REQUEST;
}

export interface FetchNewPatientuccessAction {
  type: NewPatientActionTypes.FETCH_NEWPATIENT_SUCCESS;
  payload: NewPatient[];
}

export interface PostNewPatient {
    type: NewPatientActionTypes.POST_NEWPATIENT;
    payload: NewPatient[];
  }
export interface DeleteNewPatient {
    type: NewPatientActionTypes.DELETE_NEWPATIENT;
    payload: NewPatient[];
  }
export interface FetchNewPatientFailureAction {
    type: NewPatientActionTypes.FETCH_NEWPATIENT_FAILURE;
    error: string;
  }

export type NewPatientAction =
    | FetchNewPatientRequestAction
    | FetchNewPatientuccessAction
    | FetchNewPatientFailureAction
    | DeleteNewPatient
    | PostNewPatient;