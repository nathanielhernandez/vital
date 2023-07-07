import React, { useEffect, useState } from "react";
import BusinessSidebar from "../../dashboard/business/BusinessSidebar";
import OfferList from "./OfferList";
import Response from "./Response";
import Navbar from "../../common/Navbar";
import { useAppContext } from "../../context/appContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewResponses = () => {
  const { user } = useAppContext();
  const { id } = useParams();
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
    fetchResponses(id);
  }, []);

  return (
    <React.StrictMode>
      <Navbar user={user} isLoggedIn={true} />
      <div className="main-container">
        <div className="dashboard-container">
          <BusinessSidebar />
          <div className="form-layout-left-aligned no-gap">
            <div className="card-top form-layout-horizontal">
              <h5 className="medium">Responses</h5>
            </div>
            {responses.map((response, index) => {
              if (responses.length === index + 1) {
                return (
                  <div className="card-bottom">
                    <Response key={response._id} response={response} />
                  </div>
                );
              } else {
                return (
                  <div className="card-middle">
                    <Response key={response._id} response={response} />
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

export default ViewResponses;
