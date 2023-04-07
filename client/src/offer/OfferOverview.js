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

  const getOffer = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/offer/${id}`);
      setOffer(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getOffer(id);
  }, []);

  return (
    <React.StrictMode>
      <Navbar user={user} isLoggedIn={true} />
      <div className="main-container">
        <div className="offer-overview-container card">
          <OfferOverviewDetails offer={offer} />
          <div className="form-layout-vertical-left-aligned">
            {user.accountType === "Personal" && (
              <div className="form-layout-centered offer-buttons">
                <button className="btn standard-btn">Respond to Offer</button>
              </div>
            )}
            <h6>
              About{" "}
              <Link to={`/user/${business._id}`}>{business.businessName}</Link>
            </h6>
            <p className="bold">Location</p>
            Boise, ID
            <a href="http://www.treefortmusicfest.com">Website</a>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default OfferOverview;
