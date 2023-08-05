import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";
import { EventType, PublicClientApplication } from "@azure/msal-browser";
import App from "./App";
const pca = new PublicClientApplication({
  auth: {
    clientId: "396df8a4-5cf0-4ea0-a72d-0ddab8311d50",
    authority:
      "https://login.microsoftonline.com/b8e2b924-d7be-421c-92d0-3209a9b795a5/",
    redirectUri: "/",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
});

pca.addEventCallback((event) => {
  // console.log(event);
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    console.log(event);
    pca.setActiveAccount(event.payload.account);
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App msalInstance={pca} />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
