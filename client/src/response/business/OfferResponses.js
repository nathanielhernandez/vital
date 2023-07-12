import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import Navbar from "../../common/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

import Offer from "../../dashboard/Offer";
import Response from "./Response";

const OfferResponses = (props) => {
  const { id } = useParams();
  const { user } = useAppContext();

  const [offer, setOffer] = useState([]);
  const [responses, setResponses] = useState([]);

  const getOffer = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/offer/${id}`);
      setOffer(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getResponses = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/response/getresponses/${id}`);
      setResponses(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getOffer(id);
    getResponses(id);
  }, []);

  return (
    <React.StrictMode>
      <Navbar user={user} isLoggedIn={true} />
      <div className="main-container">
        <div className="dashboard-container">
          <div>{offer.offerDetails}</div>
          {responses.map((response, index) => {
            return (
              <div key={index}>
                <Response response={response} />
              </div>
            );
          })}
        </div>
      </div>
    </React.StrictMode>
  );
};

export default OfferResponses;
