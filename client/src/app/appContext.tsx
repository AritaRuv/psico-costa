
import { IAppState } from "@/interfaces/app";
import React, { createContext, useState } from "react";


export const AppContext = createContext<IAppState | null>(null);

type ProvidersProps = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<ProvidersProps> = ({ children }) => {

  const appState: IAppState = {
  };

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
};
