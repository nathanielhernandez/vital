import React, { useState, useEffect } from "react";
import { socket } from "../../socket";

/* Components */

import MessageReceived from "./messages/MessageReceived";
import MessageSent from "./messages/MessageSent";

const initialMessageList = {
  message: "",
};

const ChatBody = () => {
  const [messageList, setMessageList] = useState("");

  useEffect(() => {
    socket.on("send_message", (data) => {
      setMessageList(data);
      console.log(messageList);
      console.log(data.message);
    });

    return () => {
      socket.off("send_message");
    };
  }, []);

  return (
    <div className="padding-default form-layout-vertical-left-aligned">
      <div className="form-layout-left-aligned">
        <MessageReceived />
      </div>
      <div className="form-layout-horizontal-right-aligned">
        <MessageSent />
      </div>
    </div>
  );
};

export default ChatBody;
