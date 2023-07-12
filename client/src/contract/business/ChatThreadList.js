import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

/* Components */

import ChatThread from "./ChatThread";

const ChatThreadList = () => {
  const [contractList, setContractList] = useState([]);
  const { id } = useParams();

  const fetchContracts = async (id) => {
    try {
      const { data } = await axios.get(
        `/api/v1/contract/getcontractsbyoffer/${id}`
      );
      setContractList(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchContracts(id);
  }, []);

  return (
    <div className="chat-thread-list">
      {contractList.map((contract, index) => {
        return <ChatThread key={contract._id} contract={contract} />;
      })}
    </div>
  );
};

export default ChatThreadList;
