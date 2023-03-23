import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

const BusinessOfferButtons = (props) => {
  const offer = props.offer;
  const { user } = useAppContext();

  if (offer.businessID === user._id) {
    return (
      <Link to={`/offer/${offer._id}/responses`} state={{ offer: offer }}>
        <button className="btn standard-btn">View Responses</button>
      </Link>
    );
  }

  return null;
};

export default BusinessOfferButtons;
