import React, { useState, useEffect } from "react";
import Timestamp from "../../common/Timestamp";
import { FiGift } from "react-icons/fi";

import "./Offer.css";

import axios from "axios";

const Offer = ({ offer }) => {
  const [responses, setResponses] = useState([]);

  const fetchResponses = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/response/getresponses/${id}`);
      setResponses(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchResponses(offer._id);
  }, []);

  return (
    <div className="form-layout-left-aligned gap-075">
      <div className="form-layout-vertical-left-aligned no-space">
        <h7 className="semibold">{offer.offerTitle}</h7>
        <div className="form-layout-horizontal-centered">
          <Timestamp timestamp={offer.createdAt} />
          <p className="small-text bold">Boise, ID</p>
        </div>
      </div>

      <div className="form-layout-horizontal-centered">
        <FiGift className="vital-orange" />
        <p className="semibold">{offer.reward}</p>
      </div>

      <div className="response-count">{responses.length}</div>
    </div>
  );
};

export default Offer;
