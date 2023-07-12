import React, { useState } from "react";
import "./Chat.css";
import { socket } from "../../socket";

const ChatInput = () => {
  const [message, setMessage] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.length === 0) return;
    socket.emit("send_message", message);
    setMessage("");
  };

  return (
    <div className="chat-input">
      <div className="form-layout-horizontal-centered">
        <textarea
          type="text"
          value={message}
          onChange={handleChange}
          className="input"
        ></textarea>
        <button className="btn standard-btn" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
