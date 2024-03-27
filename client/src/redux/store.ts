
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import newPatientReducer from "./NewPatient/newPatientReducer";

const rootReducer = combineReducers({
	newPatientReducer
	
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== "production",
	// Otras opciones de configuración aquí
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
