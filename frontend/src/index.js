import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

import { Provider as AlertProvider } from "react-alert";
import { alertOptions } from "./lib/alertOptions";
import AlertTemplate from "./components/AlertTemplate/AlertTemplate";

import Providers from "./context/Providers";
ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...alertOptions}>
    <Providers>
      <App />
    </Providers>
  </AlertProvider>,
  document.getElementById("root")
);

// reportWebVitals();
