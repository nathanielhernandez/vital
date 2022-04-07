import React, { useEffect, useState } from "react";
import Tag from "./Tag";
import "./Offer.css";
import { useAppContext } from "../context/appContext";
import axios from "axios";

const Offer = (props) => {
  const [business, setBusiness] = useState({});
  const {
    _id,
    businessID,
    businessName,
    offerDetails,
    shareableLink,
    tagsID,
    timeStamp,
  } = props.offer;

  const getBusiness = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/user/${id}`);
      setBusiness(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBusiness(businessID);
  }, []);

  return (
    <div className="card">
      <div className="form-layout-left-aligned">
        <div className="offer-title-container">
          <img
            src={business.profilePhoto}
            className="profile-small"
            alt={businessName}
          />
          <div className="offer-title-details">
            <h5>
              {businessName} <span className="light">has posted an offer</span>
            </h5>
            <p className="small-text">{timeStamp}</p>
          </div>
        </div>
        <p className="bold">Offer Overview</p>
        <p>{offerDetails}</p>
        <p className="bold">Tags</p>
        <div className="form-layout-horizontal">
          {/* {tags.map((tag) => {
            return <Tag tag={tag} />;
          })} */}
        </div>
        <p className="bold">Share</p>
        <div className="form-layout-horizontal">
          <button className="share-link">{shareableLink}</button>
          <button className="btn standard-btn">Respond to Offer</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
