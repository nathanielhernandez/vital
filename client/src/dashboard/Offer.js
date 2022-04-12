import axios from "axios";
import React, { useEffect, useState } from "react";

const Offer = (props) => {
  const offer = props.offer;
  const [user, setUser] = useState([]);

  const getUser = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/user/${id}`);
      setUser(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  // useEffect(() => {
  //   getUser(offer.businessID);
  // }, []);

  return (
    <div className="card">
      <div className="form-layout-left-aligned">
        <div className="form-layout-horizontal-centered">
          <img
            src={user.profilePhoto}
            alt={user.businessName}
            className="profile-small"
          />
          <div className="form-layout-vertical-left-aligned">
            <h6>
              {offer.businessName}
              <span className="light"> has posted an offer.</span>
            </h6>
            <p className="small-text">{offer.createdAt}</p>
          </div>
        </div>
        <p className="bold">Offer Overview</p>
        <p className="gray">{offer.offerDetails}</p>
        <p className="bold">Tags</p>
        <p className="bold">Share</p>
        <div className="form-layout-horizontal-right-aligned">
          <button className="btn standard-btn">Respond to Offer</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
