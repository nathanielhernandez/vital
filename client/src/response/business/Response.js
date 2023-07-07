import React, { useState, useEffect } from "react";
import "./Response.css";
import { useAppContext } from "../../context/appContext";

import axios from "axios";

const Response = ({ response }) => {
  const [user, setUser] = useState([]);
  const { isLoading } = useAppContext();
  const fetchUser = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/user/${id}`);
      setUser(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchUser(response.userID);
  }, []);

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

      <div className={"response-buttons"}>
        <button className="btn standard-btn">Accept</button>
        <button className="btn btn-tertiary standard-btn">Reject</button>
      </div>
    </div>
  );
};

export default Response;
