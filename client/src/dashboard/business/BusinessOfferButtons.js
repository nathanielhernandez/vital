import React from "react";
import { useAppContext } from "../../context/appContext";

const BusinessOfferButtons = (props) => {
  const offer = props.offer;
  const { user } = useAppContext();

  if (offer.businessID === user._id) {
    return <button className="btn standard-btn">View Responses</button>;
  }

  return null;
};

export default BusinessOfferButtons;
