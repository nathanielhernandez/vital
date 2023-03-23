import React from "react";
import { useAppContext } from "../../context/appContext";
import "../Profile.css";
import ProfileNav from "../ProfileNav";

const BusinessProfile = (props) => {
  const { user } = useAppContext();
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
            {user._id === userProfile._id && (
              <div className="profile-options">
                <button className="btn-secondary standard-btn">
                  Edit Profile
                </button>
              </div>
            )}
          </div>
          <div className="profile-header-info">
            <h2>{userProfile.businessName}</h2>
          </div>
        </div>
      </div>
      <ProfileNav userProfile={userProfile} />
    </div>
  );
};

export default BusinessProfile;
