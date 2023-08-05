import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Typography from "@mui/material/Typography";

export const Home = () => {
  return (
    <>
      <UnauthenticatedTemplate>
        <Typography variant="h6">
          Please sign-in to see your profile information.
        </Typography>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <Typography variant="h6">
          You are signed-in. Select profile to call Microsoft Graph.
        </Typography>
      </AuthenticatedTemplate>
    </>
  );
};
