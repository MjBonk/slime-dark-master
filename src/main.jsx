import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./components/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<React.StrictMode>
			<ContextProvider>
				<App />
			</ContextProvider>
		</React.StrictMode>
	</BrowserRouter>
);
