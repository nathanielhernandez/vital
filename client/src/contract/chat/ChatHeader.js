import React from "react";

import "./Chat.css";

const ChatHeader = ({ focusedContract }) => {
  return (
    <div className="chat-header">
      {focusedContract.firstName} {focusedContract.lastName}
    </div>
  );
};

export default ChatHeader;
