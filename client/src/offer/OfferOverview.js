import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../common/Navbar";
import { useAppContext } from "../context/appContext";

import "./OfferOverview.css";

import axios from "axios";
import parse from "html-react-parser";
import OfferOverviewDetails from "./OfferOverviewDetails";

const OfferOverview = () => {
  const { user } = useAppContext();
  const { id } = useParams();

  const [offer, setOffer] = useState([]);
  const [business, setBusiness] = useState([]);

  const fetchOffer = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/offer/${id}`);
      setOffer(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const fetchBusiness = async (id) => {
    if (offer) {
      try {
        const { data } = await axios.get(`/api/v1/user/${offer.businessID}`);
        setBusiness(data);
      } catch (error) {
        throw new Error(error);
      }
    }
  };

  const postResponse = async();

  const handleResponse = (e) => {
    e.preventDefault();
    if (offer.allowedContracts > 0) {
      console.log(true);
    }
  };

  useEffect(() => {
    fetchOffer(id);
  }, []);

  useEffect(() => {
    fetchBusiness();
  }, [offer]);

  return (
    <React.StrictMode>
      <Navbar user={user} isLoggedIn={true} />
      <div className="main-container">
        <div className="offer-overview-container card">
          <OfferOverviewDetails offer={offer} />
          <div className="form-layout-vertical-left-aligned">
            {user.accountType === "Personal" && (
              <div className="form-layout-centered offer-buttons">
                <button
                  className="btn standard-btn btn-full-width"
                  onClick={handleResponse}
                >
                  Respond to Offer
                </button>
                <button className="btn-tertiary standard-btn btn-full-width">
                  Save Offer
                </button>
              </div>
            )}
            <div className="form-layout-centered">
              <img
                src={business.profilePhoto}
                alt={business.businessName}
                className="profile-medium"
              />
              <h6>
                <Link to={`/user/${business._id}`}>
                  {business.businessName}
                </Link>
              </h6>
            </div>
            <p className="bold">Location</p>
            Boise, ID
            <p className="bold">Website</p>
            <a href="http://www.treefortmusicfest.com">Link</a>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default OfferOverview;
