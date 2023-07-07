import React from "react";
import BusinessSidebar from "../../dashboard/business/BusinessSidebar";
import OfferList from "./OfferList";
import Navbar from "../../common/Navbar";
import { useAppContext } from "../../context/appContext";

const ResponseDashboard = () => {
  const { user } = useAppContext();

  return (
    <React.StrictMode>
      <Navbar user={user} isLoggedIn={true} />
      <div className="main-container">
        <div className="dashboard-container">
          <BusinessSidebar />
          <OfferList />
        </div>
      </div>
    </React.StrictMode>
  );
};

export default ResponseDashboard;
