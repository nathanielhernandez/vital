import React from "react";
import { useAppContext } from "../../context/appContext";
import "./BusinessSidebar.css";

const BusinessSidebar = () => {
  const { user } = useAppContext();
  return (
    <div className="business-sidebar-container">
      <div className="business-cover-photo">
        <img
          src={user.profilePhoto}
          alt={user.businessName}
          className="profile-medium business-sidebar-profile-photo"
        />
      </div>
      <div className="business-sidebar">
        <div className="business-name">
          <h6>{user.businessName}</h6>
        </div>
        <ul className="sidebar">
          <li className="sidebar-item">Dashboard</li>
          <li className="sidebar-item">Posts</li>
        </ul>
      </div>
    </div>
  );
};

export default BusinessSidebar;
