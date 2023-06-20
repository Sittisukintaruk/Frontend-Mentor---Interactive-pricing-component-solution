import { ChakraProvider } from "@chakra-ui/react";
import theme from "./assets/theme";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Homepage />
    </ChakraProvider>
  );
}

export default App;
