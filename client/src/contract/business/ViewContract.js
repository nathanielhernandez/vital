import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const [focusedContract, setFocusedContract] = useState([]);
  const [contractList, setContractList] = useState([]);
  const { id } = useParams();

  const fetchContracts = async (id) => {
    try {
      const { data } = await axios.get(
        `/api/v1/contract/getcontractsbyoffer/${id}`
      );
      setContractList(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchContracts(id);
  }, []);

  return (
    <React.StrictMode>
      <Navbar user={user} isLoggedIn={true} />
      <div className="main-container">
        <div className="contract-chat-dashboard-container height-100">
          <BusinessSidebar />
          <div className="form-layout-left-aligned no-gap height-100">
            <div className="card-top form-layout-horizontal">
              <h5 className="medium">Offer Title</h5>
            </div>
            <div className="card-bottom contract-chat-container no-padding height-100">
              <ChatThreadList
                setFocusedContract={setFocusedContract}
                contractList={contractList}
              />
              <Chat focusedContract={focusedContract} />
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default ViewContract;
