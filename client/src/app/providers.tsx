// app/providers.tsx
"use client";
import React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import theme from "@/theme";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
	return (
		<Provider store={store}>
			<CacheProvider>
				<ChakraProvider theme={theme}>
					{children}
				</ChakraProvider>
			</CacheProvider>
		</Provider>
	);
};

export default Providers;
