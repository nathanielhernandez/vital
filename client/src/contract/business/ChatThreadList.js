import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

/* Components */

import ChatThread from "./ChatThread";

const ChatThreadList = ({ setFocusedContract, contractList, joinRoom }) => {
  return (
    <div className="chat-thread-list">
      {contractList.map((contract, index) => {
        return (
          <ChatThread
            key={contract._id}
            contract={contract}
            setFocusedContract={setFocusedContract}
          />
        );
      })}
    </div>
  );
};

export default ChatThreadList;
