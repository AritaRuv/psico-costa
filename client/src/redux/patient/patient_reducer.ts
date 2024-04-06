import { PatientAction, PatientState } from "./patient_types";


const initialState: PatientState = {
  patient: "",
  loading: false,
  error: false,
};
  
const patientReducer = (
  state = initialState,
  action: PatientAction,
): PatientState => {
    switch (action.type) {
      default:
        return state
    };

  }

  export default patientReducer;