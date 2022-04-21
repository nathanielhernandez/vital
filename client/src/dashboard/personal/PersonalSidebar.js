import React from "react";
import { useAppContext } from "../../context/appContext";
import "./PersonalSidebar.css";

const PersonalSidebar = () => {
  const { user } = useAppContext();
  return (
    <div className="sidebar-container">
      <div className="personal-profile-container">
        <div className="personal-sidebar-card">
          <div className="form-layout-centered">
            <img
              src={user.profilePhoto}
              alt={user.businessName}
              className="profile-medium"
            />
            <div className="centered-flexible">
              <h6 className="centered">
                {user.firstName + " " + user.lastName}
              </h6>
            </div>
          </div>
        </div>
        <div className="personal-sidebar-list">
          <ul className="sidebar">
            <li className="sidebar-item">Dashboard</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalSidebar;
