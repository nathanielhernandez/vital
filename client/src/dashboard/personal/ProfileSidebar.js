import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

const ProfileSidebar = (props) => {
  const { user } = useAppContext();

  return (
    <div className="card">
      <div className="form-layout-left-aligned">
        <div className="form-layout-centered">
          <img
            src={user.profilePhoto}
            className="profile-medium"
            alt={user.fullName}
          />
          <p className="bold">
            {user.firstName
              ? `${user.firstName} ${user.lastName}`
              : `${user.businessName}`}
          </p>
        </div>
        <ul className="sidebar">
          <li className="sidebar-item">
            <Link to="/dashboard" className="standard">
              Dashboard
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="#" className="standard">
              Trending
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
