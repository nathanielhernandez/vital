import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const Response = (props) => {
  const [user, setUser] = useState([]);
  const response = props.response;

  const getUser = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/user/${id}`);
      setUser(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getUser(response.userID);
  }, []);

  return (
    <div className="card">
      <div className="form-layout-left-aligned">
        <div className="form-layout-horizontal-centered">
          <img
            src={user.profilePhoto}
            alt={user.firstName}
            className="profile-small"
          />
          <div className="form-layout-vertical-left-aligned">
            <h6>
              <Link to={`/user/${user._id}`}>
                {user.firstName} {user.lastName}
              </Link>
            </h6>
            <p className="small-text">{response.createdAt}</p>
          </div>
        </div>
        {response.responseDetails}
        <div className="form-layout-horizontal-right-aligned">
          <button className="btn standard-btn">
            Work with {user.firstName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Response;
