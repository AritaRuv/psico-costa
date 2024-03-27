// types.ts

import { NewPatient } from "./newPatientTypes";

  
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