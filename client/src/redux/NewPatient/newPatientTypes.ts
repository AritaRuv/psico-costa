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