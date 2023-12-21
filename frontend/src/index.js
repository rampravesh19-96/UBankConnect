import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppAdmin.css";
import "./AppAdmin2.css";
import "./AppMerchant.css";
import "./indexAdmin.css";
import "./indexMerchant.css";
import App from "./App";
import ContextProvider from "./context/ContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <ContextProvider> 
      <App />
    </ContextProvider>
  </React.StrictMode>
);
