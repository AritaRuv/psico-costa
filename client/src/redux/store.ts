
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {patientReducer} from "./patient/patient_reducer";

const rootReducer = combineReducers({
	patientReducer
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== "production",
	// Otras opciones de configuración aquí
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
