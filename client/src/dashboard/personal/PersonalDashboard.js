import React from "react";
import OfferContainer from "../OfferContainer";
import PersonalSidebar from "./PersonalSidebar";

const PersonalDashboard = () => {
  return (
    <div className="main-container">
      <div className="dashboard-container">
        <PersonalSidebar />
        <OfferContainer />
      </div>
    </div>
  );
};

export default PersonalDashboard;
