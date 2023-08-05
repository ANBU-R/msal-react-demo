import Grid from "@mui/material/Grid";
import { PageLayout } from "./components/PageLayout";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { MsalProvider, useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useEffect } from "react";
import {
  InteractionRequiredAuthError,
  InteractionRequiredAuthErrorMessage,
} from "@azure/msal-browser";
function App({ msalInstance }) {
  return (
    <MsalProvider instance={msalInstance}>
      <PageLayout>
        <Grid container justifyContent="center">
          <Pages />
        </Grid>
      </PageLayout>
    </MsalProvider>
  );
}

const Pages = () => {
  const isAuthenticated = useIsAuthenticated();
  const { instance } = useMsal();
  const silentSignIn = async () => {
    if (!isAuthenticated) {
      try {
        const response = await instance.ssoSilent({
          scopes: ["user.read"],
        });
        instance.setActiveAccount(response.account);
      } catch (error) {
        if (error instanceof InteractionRequiredAuthError) {
          instance.loginRedirect({
            scopes: ["user.read"],
          });
        }
      }
    }
  };
  useEffect(() => {
    silentSignIn();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
