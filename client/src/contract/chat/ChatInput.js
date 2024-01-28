import React, { useState } from "react";
import "./Chat.css";
import socket from "../../socket";

const ChatInput = () => {
  const [message, setMessage] = useState([]);

  const sendMessage = (e) => {
    if (e.code !== "Enter" || message.length === 0) return;

    socket.emit("send_message", { message: message });
    setMessage("");
  };
  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  return (
    <div className="chat-input-container">
      <div className="form-layout-horizontal-centered">
        <input
          type="text"
          value={message}
          onChange={handleChange}
          className="input chat-input"
          placeholder="Type something..."
          onKeyDown={sendMessage}
        ></input>
      </div>
    </div>
  );
};

export default ChatInput;
