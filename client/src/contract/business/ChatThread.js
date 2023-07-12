import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import axios from "axios";

const ChatThread = (props) => {
  const [contractUser, setContractUser] = useState([]);
  const contract = props.contract;

  const fetchUser = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/user/${id}`);
      setContractUser(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchUser(contract.userID);
  }, []);
  return (
    <div className="chat-thread card-actionable">
      <div className="form-layout-horizontal-centered">
        <img src={contractUser.profilePhoto} className="profile-small" />
        <div className="form-layout-left-aligned no-gap">
          <p>
            {contractUser.firstName} {contractUser.lastName}
          </p>
          <p>Message content</p>
        </div>
        <div className="chat-timestamp">4d</div>
      </div>
    </div>
  );
};

export default ChatThread;
