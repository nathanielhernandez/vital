import React, { useEffect, useState } from "react";
import Navbar from "../../common/Navbar";
import { useAppContext } from "../../context/appContext";
import Offer from "./Offer";
import { Link } from "react-router-dom";
import SpinningLoader from "../../components/loaders/SpinningLoader";

// import "./OfferList.css";

import axios from "axios";

const OfferList = () => {
  const { user, isLoading } = useAppContext();

  const [offers, setOffers] = useState([]);

  const fetchOffers = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/offer/getoffersbyuser/${id}`);
      setOffers(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchOffers(user._id);
  }, []);

  return (
    <div className="form-layout-left-aligned no-gap">
      <div className="card-top form-layout-horizontal">
        <h5 className="medium">Open Offers</h5>
        <h5 className="medium">Past Offers</h5>
      </div>
      {offers.map((offer, index) => {
        if (offers.length === index + 1) {
          return (
            <div key={offer._id} className="card-bottom card-actionable">
              <Link to={`/response/${offer._id}`}>
                <Offer offer={offer} key={offer._id} />
              </Link>
            </div>
          );
        } else {
          return (
            <div key={offer._id} className="card-middle card-actionable">
              <Link to={`/response/${offer._id}`}>
                <Offer offer={offer} key={offer._id} />
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default OfferList;
