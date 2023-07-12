import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import axios from "axios";
import { Link } from "react-router-dom";

/* Components */

import BusinessSidebar from "../../dashboard/business/BusinessSidebar";
import Navbar from "../../common/Navbar";
import OfferContract from "./OfferContract";

const ContractDashboard = () => {
  const { user } = useAppContext();
  const [offerList, setOfferList] = useState([]);

  const getOfferList = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/offer/getoffersbyuser/${id}`);
      setOfferList(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getOfferList(user._id);
  }, []);

  return (
    <React.StrictMode>
      <Navbar user={user} isLoggedIn={true} />
      <div className="main-container">
        <div className="dashboard-container">
          <BusinessSidebar />
          <div className="form-layout-left-aligned no-gap">
            <div className="card-top form-layout-horizontal">
              <h5 className="medium">Contracts</h5>
            </div>
            {offerList.map((offer, index) => {
              if (offerList.length === index + 1) {
                return (
                  <div className="card-bottom card-actionable">
                    <Link to={`/contracts/${offer._id}`}>
                      <OfferContract key={offer._id} offer={offer} />
                    </Link>
                  </div>
                );
              } else {
                return (
                  <div className="card-middle card-actionable">
                    <Link to={`/contracts/${offer._id}`}>
                      <OfferContract key={offer._id} offer={offer} />
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default ContractDashboard;
