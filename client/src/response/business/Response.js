import React, { useState, useEffect } from "react";
import "./Response.css";
import { useAppContext } from "../../context/appContext";

import axios from "axios";

const Response = ({ response, fetchResponses, offerId }) => {
  const [user, setUser] = useState([]);
  const [reject, setReject] = useState(false);
  const { isLoading, openModal, isModalOpen } = useAppContext();

  const fetchUser = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/user/${id}`);
      setUser(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleAccept = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`/api/v1/response/updateresponse/${response._id}`, {
        accepted: true,
      });

      await axios.post(`/api/v1/contract/postcontract`, {
        businessID: response.businessID,
        userID: response.userID,
        offerID: response.offerID,
      });
      fetchResponses(offerId);
    } catch (error) {
      throw new Error(error);
    }
  };

  const changeToRejectOptions = () => {
    setReject(!reject);
  };

  const handleReject = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`/api/v1/response/updateresponse/${response._id}`, {
        rejected: true,
      });
      fetchResponses(offerId);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchUser(response.userID);
  }, [reject]);

  return (
    <div className="form-layout-horizontal-centered">
      <img
        src={user.profilePhoto}
        alt={user.firstName}
        className="profile-small"
      />

      <p>
        {user.firstName} {user.lastName}
      </p>

      {!reject && (
        <div className="response-buttons">
          <button className="btn standard-btn" onClick={handleAccept}>
            Accept
          </button>
          <button
            className="btn btn-tertiary standard-btn"
            onClick={changeToRejectOptions}
          >
            Reject
          </button>
        </div>
      )}

      {reject && (
        <div className="response-buttons">
          <p>Are you sure you want to reject this offer?</p>
          <button className="btn standard-btn" onClick={handleReject}>
            Yes
          </button>
          <button
            className="btn btn-tertiary standard-btn"
            onClick={changeToRejectOptions}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default Response;
