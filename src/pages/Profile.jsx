import { useMsal } from "@azure/msal-react";
import { ProfileData } from "../components/ProfileData";
import { useEffect, useState } from "react";

export const Profile = () => {
  return (
    <>
      <ProfileData
        graphData={{
          displayName: "summ",
          jobTitle: "Dummy Title",
          mail: "dummy@mail.com",
          businessPhones: ["1234567890"],
          officeLocation: "dummy address",
        }}
      />
    </>
  );
};
