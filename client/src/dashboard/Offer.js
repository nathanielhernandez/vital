import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import axios from "axios";
import Tag from "./Tag";
import { useAppContext } from "../context/appContext";

import "./Tags.css";
import BusinessOfferButtons from "./business/BusinessOfferButtons";

const Offer = (props) => {
  const offer = props.offer;
  const [postUser, setUser] = useState([]);
  const [tags, setTags] = useState([]);
  const { user } = useAppContext();

  const getUser = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/user/${id}`);
      setUser(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getTags = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/tag/gettags/${id}`);
      setTags(data);
    } catch (error) {}
  };

  useEffect(() => {
    getUser(offer.businessID);
    getTags(offer._id);
  }, []);

  return (
    <div className="card">
      <div className="form-layout-left-aligned">
        <div className="form-layout-horizontal-centered">
          <img
            src={postUser.profilePhoto}
            alt={postUser.businessName}
            className="profile-small"
          />
          <div className="form-layout-vertical-left-aligned">
            <h6>
              {postUser.businessName}
              <span className="light"> has posted an offer.</span>
            </h6>
            <p className="small-text">{offer.createdAt}</p>
          </div>
        </div>
        <p className="bold">Offer Overview</p>
        <span className="gray">{parse(offer.offerDetails)}</span>
        <p className="bold">Tags</p>
        <div className="tags-container">
          {tags.map((tag) => {
            return <Tag tag={tag.tagValue} key={tag._id} />;
          })}
        </div>
        <p className="bold">Share</p>
        <div className="form-layout-horizontal-right-aligned">
          {user.accountType === "Business" ? (
            <BusinessOfferButtons offer={offer} />
          ) : (
            <button className="btn standard-btn">Respond to Offer</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Offer;
