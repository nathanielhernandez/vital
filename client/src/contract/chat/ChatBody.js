import React, { useState, useEffect } from "react";
import socket from "../../socket";

/* Components */

import MessageReceived from "./messages/MessageReceived";
import MessageSent from "./messages/MessageSent";

// const initialMessageList = [

// ];

const ChatBody = ({ focusedContract }) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((messageList) => [...messageList, data]);
      console.log(messageList);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  return (
    <div className="padding-default form-layout-vertical-left-aligned height-100 chat-body">
      {/* <div className="form-layout-left-aligned">
        <MessageReceived />
      </div> */}
      {messageList.map((message, index) => {
        return (
          <div key={index} className="form-layout-horizontal-right-aligned">
            <MessageSent message={message.message} />
          </div>
        );
      })}
    </div>
  );
};

export default ChatBody;
