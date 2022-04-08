import React, { useEffect } from "react";
import Offer from "../Offer";
import ProfileSidebar from "./ProfileSidebar";
import { useAppContext } from "../../context/appContext";
import SpinningLoader from "../../components/loaders/SpinningLoader";

const PersonalDashboard = (props) => {
  const { getOffers, offers, isLoading } = useAppContext();

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <div className="main-container">
      <div className="dashboard-container">
        <div className="form-layout-left-aligned">
          <ProfileSidebar />
        </div>
        <div className="form-layout-left-aligned">
          {isLoading && <SpinningLoader />}
          {offers.map((offer) => {
            return <Offer offer={offer} key={offer._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PersonalDashboard;
