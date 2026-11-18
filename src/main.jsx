
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import "./index.css";
import OrganizationSchema from "./components/common/OrganizationSchema";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <OrganizationSchema />     
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
