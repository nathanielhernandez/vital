import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import axios from "axios";
import Tag from "./Tag";
import Timestamp from "../common/Timestamp";
import { useAppContext } from "../context/appContext";
import { FiGift } from "react-icons/fi";

import "./Tags.css";
import BusinessOfferButtons from "./business/BusinessOfferButtons";
import ModalWrapper from "../components/modal/ModalWrapper";
import RespondOffer from "./RespondOffer";

const Offer = (props) => {
  const offer = props.offer;
  const [postUser, setUser] = useState([]);
  const [tags, setTags] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAppContext();

  const handleResponse = (e) => {
    setIsModalOpen(true);
  };

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
    <div className="none">
      {isModalOpen && (
        <ModalWrapper component={<RespondOffer offer={offer} />} />
      )}
      <div className="form-layout-left-aligned">
        <div className="form-layout-horizontal-centered">
          <img
            src={postUser.profilePhoto}
            alt={postUser.businessName}
            className="profile-small"
          />
          <h6 className="bold">
            <Link to={{ pathname: `/user/${postUser._id}`, state: { offer } }}>
              {postUser.businessName}
            </Link>
          </h6>
        </div>
        <div className="form-layout-vertical-left-aligned no-space">
          <h5 className="semibold">{offer.offerTitle}</h5>
          <div className="form-layout-horizontal-centered">
            <Timestamp timestamp={offer.createdAt} />
            <p className="small-text bold">Boise, ID</p>
          </div>
        </div>

        <div className="form-layout-horizontal-centered">
          <FiGift className="vital-orange" />
          <p className="semibold">{offer.reward}</p>
        </div>

        <div className="light-gray">{parse(offer.offerDetails)}</div>

        <div className="tags-container">
          {tags.map((tag) => {
            return <Tag tag={tag.tagValue} key={tag._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Offer;
