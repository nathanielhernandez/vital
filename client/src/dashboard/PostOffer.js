import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import "./PostOffer.css";

const values = {
  businessID: "",
  offerDetails: "",
  tagsID: "",
  shareableLink: "",
};

const PostOffer = () => {
  const { closeModal, user } = useAppContext();
  //   const [values, setValues] = useState(values);
  return (
    <div className="card modal-standard">
      <div className="form-layout-vertical-left-aligned">
        <div className="form-layout-horizontal-centered">
          <img
            src={user.profilePhoto}
            alt={user.businessName}
            className="profile-small"
          />
          <h6>{user.businessName}</h6>
        </div>
        <div className="form-layout-horizontal-right-aligned">
          <button className="btn standard-btn" onClick={closeModal}>
            Close
          </button>
          <button className="btn standard-btn">Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostOffer;
