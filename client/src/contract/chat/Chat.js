import React, { useEffect, useState, useParams } from "react";
import { socket } from "../../socket";
import axios from "axios";

/* Components */
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";

const Chat = ({ focusedContract, contractList }) => {
  return (
    <div className="form-layout-left-aligned no-gap">
      <ChatHeader focusedContract={focusedContract} />
      <ChatBody />
      <ChatInput />
    </div>
  );
};

export default Chat;
