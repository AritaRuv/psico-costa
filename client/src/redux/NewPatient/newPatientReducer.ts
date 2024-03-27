import { NewPatientAction, NewPatientState } from "./newPatientActions";


const initialState: NewPatientState = {
  new_patient: "",
  loading: false,
  error: false,
};
  
const newPatientReducer = (
  state = initialState,
  action: NewPatientAction,
): NewPatientState => {
    switch (action.type) {
      default:
        return state
    };

  }

  export default newPatientReducer;