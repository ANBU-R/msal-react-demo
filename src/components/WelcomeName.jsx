import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";

export const WelcomeName = () => {
  const [name, setName] = useState("");
  const { instance } = useMsal();
  const currentAccount = instance.getActiveAccount();

  useEffect(() => {
    if (currentAccount) setName(currentAccount.username);
    console.count();
  }, [currentAccount]);
  return <Typography variant="h6">Welcome, {name}</Typography>;
};
