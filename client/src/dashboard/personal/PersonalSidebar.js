import React from "react";
import { useAppContext } from "../../context/appContext";
import "./PersonalSidebar.css";
import "../../common/fonts.css";
import { MdDashboard } from "react-icons/md";

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
              <h6 className="centered">{"Hello " + user.firstName + ". 👋"}</h6>
            </div>
          </div>
        </div>
        <div className="personal-sidebar-list">
          <ul className="sidebar">
            <li className="sidebar-item extrabold">
              <MdDashboard /> Dashboard
            </li>
            <li className="sidebar-item">Contracts</li>
          </ul>
        </div>
        <div className="personal-sidebar-tags">
          <p className="small-text extra-bold">Trending</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalSidebar;
