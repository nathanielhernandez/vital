import React from "react";
import { useAppContext } from "../../context/appContext";

const TypeOffer = () => {
  const { user } = useAppContext();
  const { profilePhoto, businessName } = user;
  return (
    <div className="card">
      <div className="form-layout-horizontal">
        <img src={profilePhoto} alt={businessName} className="profile-tiny" />
        <h4>Type something...</h4>
      </div>
    </div>
  );
};

export default TypeOffer;
