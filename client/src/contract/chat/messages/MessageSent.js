import React from "react";

/* CSS */

import "./Message.css";

const MessageSent = ({ message }) => {
  return (
    <div className="message message-sent">
      <p>{message}</p>
    </div>
  );
};

export default MessageSent;
