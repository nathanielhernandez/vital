import React, { useState } from "react";
import "../Profile.css";

const BusinessProfile = (props) => {
  const [nav, setNav] = useState("Feed");
  const userProfile = props.userProfile;
  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        <div className="profile-header">
          <div className="profile-cover-photo">
            <img
              src={userProfile.profilePhoto}
              alt={userProfile.businessName}
              className="profile-photo profile-large"
            />
            <div className="profile-options">
              <button className="btn standard-btn">Edit Profile</button>
            </div>
          </div>
          <div className="profile-header-info">
            <h2>{userProfile.businessName}</h2>
          </div>
        </div>
      </div>
      <div className="card profile-navigation">
        <ul className="profile-nav">
          <li className="profile-nav-item">Feed</li>
          <li className="profile-nav-item">About</li>
        </ul>
      </div>
    </div>
  );
};

export default BusinessProfile;
