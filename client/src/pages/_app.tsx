// pages/_app.js
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import theme from "@/theme";
import { store } from "@/redux/store";
import { MyAppProps } from "@/interfaces/app";

function MyApp({ Component, pageProps }: MyAppProps) {

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;