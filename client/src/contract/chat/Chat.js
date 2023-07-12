import React, { useEffect } from "react";

/* Components */
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";
import { socket } from "../../socket";

const Chat = () => {
  // useEffect(() => {
  //   socket.emit("send_message", { message: "hello" });
  //   socket.on("receive_message", (msg) => {
  //     alert(msg.message);
  //   });
  // }, [socket]);

  const sendMessage = () => {
    if (message.length === 0) return;
    socket.emit("send_message", message);
    setMessage("");
  };

  return (
    <div className="form-layout-left-aligned no-gap">
      <ChatHeader />
      <ChatBody />
      <ChatInput />
    </div>
  );
};

export default Chat;
