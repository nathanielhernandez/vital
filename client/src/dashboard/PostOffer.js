import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import DOMPurify from "dompurify";

import AddTags from "./AddTags";
import OfferRichText from "./OfferRichText";
import Input from "../components/input/Input";
import OfferInput from "../components/input/OfferInput";

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
  const { user, postOffer, isLoading, showAlert, displayAlert } =
    useAppContext();
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

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setOffer({ ...offer, [e.target.name]: value });
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
        <OfferInput
          type={"text"}
          name={"offerTitle"}
          value={offer.offerTitle}
          handleChange={handleChange}
          className={"offer-title-input"}
          placeholder={"Add a title..."}
        />
        <div className="form-layout-horizontal">
          <OfferInput
            type={"text"}
            name={"reward"}
            value={offer.reward}
            handleChange={handleChange}
            className={"offer-reward-input"}
            placeholder={"Add a reward..."}
          />
          <OfferInput
            type={"number"}
            name={"allowedContracts"}
            value={offer.allowedContracts}
            handleChange={handleChange}
            className={"offer-reward-input"}
            placeholder={"Number of allowed contracts..."}
          />
        </div>
        <p className="bold">Offer Overview</p>
        <div className="form-layout-centered">
          <OfferRichText setOffer={setOffer} offer={offer} />
          <AddTags tags={tags} setTags={setTags} />
        </div>
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
