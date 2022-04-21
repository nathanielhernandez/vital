import axios from "axios";
import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import "./BusinessSidebar.css";

const BusinessSidebar = () => {
  const { user } = useAppContext();
  let tags = [];
  const getTags = async () => {
    try {
      const result = await axios.get("/api/v1/tag/gettoptags");
      tags = result.data.tags;
      console.log(tags);
    } catch (error) {}
  };

  useEffect(() => {
    getTags();
  }, []);

  return (
    <div className="sidebar-container">
      <div className="business-sidebar-profile-container">
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
      <div className="card">
        <div className="form-layout-vertical-left-aligned">
          {tags.map((tag) => {
            return <p>{tag.tagValue}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BusinessSidebar;
