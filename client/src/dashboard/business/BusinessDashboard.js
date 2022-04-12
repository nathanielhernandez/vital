import React from "react";
import BusinessSidebar from "./BusinessSidebar";
import OfferContainer from "../OfferContainer";

const BusinessDashboard = () => {
  return (
    <div className="main-container">
      <div className="dashboard-container">
        <BusinessSidebar />
        <OfferContainer />
      </div>
    </div>
  );
};

export default BusinessDashboard;
