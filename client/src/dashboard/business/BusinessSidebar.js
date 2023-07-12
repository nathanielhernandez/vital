import axios from "axios";
import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import "./BusinessSidebar.css";
import { Link } from "react-router-dom";

const BusinessSidebar = () => {
  const { user } = useAppContext();
  let tags = [];
  const getTags = async () => {
    try {
      const result = await axios.get("/api/v1/tag/gettoptags");
      tags = result.data.tags;
    } catch (error) {}
  };

  useEffect(() => {
    getTags();
  }, []);

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
                {"Hello " + user.businessName + ". 👋"}
              </h6>
            </div>
          </div>
        </div>
        <div className="personal-sidebar-list">
          <ul className="sidebar">
            <Link to={"/"}>
              <li className="sidebar-item extrabold">Dashboard</li>
            </Link>
            <Link to={"/contracts"}>
              <li className="sidebar-item">Contracts</li>
            </Link>
            <Link to={`/response`}>
              <li className="sidebar-item">Responses</li>
            </Link>
          </ul>
        </div>
        <div className="personal-sidebar-tags">
          <p className="small-text extra-bold">Trending</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSidebar;
