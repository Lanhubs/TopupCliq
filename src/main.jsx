import { ChakraProvider, GlobalStyle } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	
	<ChakraProvider>
			<App />
	</ChakraProvider>

);
