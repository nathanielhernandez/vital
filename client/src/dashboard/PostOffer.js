import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import DOMPurify from "dompurify";

import AddTags from "./AddTags";
import OfferRichText from "./OfferRichText";

import "./PostOffer.css";

const offerInitialState = {
  businessID: "",
  offerTitle: "",
  reward: "",
  offerDetails: "",
  allowedContracts: "",
};

const tagsInitialState = {
  tags: [],
  numOfTags: 0,
};

const defaultOptions = {
  allowedTags: ["b", "i", "u", "a", "ol", "ul", "li", "strong"],
  allowedAttributes: {
    a: ["href"],
  },
};

const PostOffer = () => {
  const { user, postOffer } = useAppContext();
  const [offer, setOffer] = useState(offerInitialState);
  const [tags, setTags] = useState([]);

  const handlePostOffer = async (e) => {
    e.preventDefault();
    let clean = sanatizeHTML(offer.offerDetails);
    offer.offerDetails = clean;
    offer.businessID = user._id;
    console.log(offer);
    postOffer(offer, tags);
  };

  const sanatizeHTML = (value) => {
    const clean = DOMPurify.sanitize(value, defaultOptions);
    return clean;
  };

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
        <AddTags tags={tags} setTags={setTags} />
        <p className="bold">Offer Title</p>
        <input className="input large-input"></input>
        <p className="bold">Offer Overview</p>
        <OfferRichText setOffer={setOffer} offer={offer} />
        <div className="form-layout-horizontal-right-aligned">
          <button className="btn standard-btn" onClick={handlePostOffer}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostOffer;
