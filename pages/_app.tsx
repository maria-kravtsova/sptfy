import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "./theme";
import "reset-css";
import PlayerLayout from "../components/playerLayout";

const mytheme = extendTheme(theme);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={mytheme}>
      <PlayerLayout> 
        <Component {...pageProps} />
      </PlayerLayout>
    </ChakraProvider>
  );
}

export default MyApp;
