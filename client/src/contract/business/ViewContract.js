import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import axios from "axios";

import "./ViewContract.css";

/* Components */

import BusinessDashboard from "../../dashboard/business/BusinessDashboard";
import Navbar from "../../common/Navbar";
import BusinessSidebar from "../../dashboard/business/BusinessSidebar";
import ChatThreadList from "./ChatThreadList";
import Chat from "../chat/Chat";

const ViewContract = () => {
  const { user } = useAppContext();

  return (
    <React.StrictMode>
      <Navbar user={user} isLoggedIn={true} />
      <div className="main-container">
        <div className="contract-chat-dashboard-container">
          <BusinessSidebar />
          <div className="form-layout-left-aligned no-gap">
            <div className="card-top form-layout-horizontal">
              <h5 className="medium">Offer Title</h5>
            </div>
            <div className="card-bottom contract-chat-container no-padding">
              <ChatThreadList />
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default ViewContract;
