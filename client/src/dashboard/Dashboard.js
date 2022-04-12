import React from "react";
import Navbar from "../common/Navbar";
import BusinessDashboard from "./business/BusinessDashboard";
import PersonalDashboard from "./personal/PersonalDashboard";
import "./Dashboard.css";
import { useAppContext } from "../context/appContext";

const Dashboard = () => {
  const { user } = useAppContext();
  const { accountType } = user;

  return (
    <React.StrictMode>
      <Navbar user={user} isLoggedIn={true} />
      {accountType === "Personal" ? (
        <PersonalDashboard />
      ) : (
        <BusinessDashboard />
      )}
    </React.StrictMode>
  );
};

export default Dashboard;
