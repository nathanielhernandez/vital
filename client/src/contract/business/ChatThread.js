import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import axios from "axios";
import { socket } from "../../socket";

const ChatThread = (props) => {
  const [contractUser, setContractUser] = useState([]);
  const contract = props.contract;

  const joinRoom = (room) => {
    socket.emit("join_room", room);
  };

  const fetchUser = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/user/${id}`);
      setContractUser(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const selectThread = () => {
    props.setFocusedContract(contractUser);
    joinRoom(`Joined chat with ${contractUser.firstName}`);
    console.log(contractUser);
  };

  useEffect(() => {
    fetchUser(contract.userID);
  }, []);

  return (
    <button className="chat-thread card-actionable" onClick={selectThread}>
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
    </button>
  );
};

export default ChatThread;
