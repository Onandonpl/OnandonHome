import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider as AlertProvider } from "react-alert";

import options from "./config/alertOptions";
import AlertTemplate from "./components/AlertTemplate";

ReactDOM.render(
  <>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </>,
  document.getElementById("root")
);
