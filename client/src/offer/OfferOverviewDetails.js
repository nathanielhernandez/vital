import React from "react";
import Timestamp from "../common/Timestamp";
import { FiGift } from "react-icons/fi";

import parse from "html-react-parser";

const OfferOverviewDetails = (props) => {
  const offer = props.offer;
  const offerDetails = offer.offerDetails;
  const parsedContent = offerDetails ? parse(`${offerDetails}`) : null;

  return (
    <div className="form-layout-vertical-left-aligned offer-details">
      <h3 className="medium">{offer.offerTitle}</h3>
      <Timestamp timestamp={offer.createdAt} includePosted={true} />
      <div className="form-layout-horizontal-centered">
        <FiGift />
        <p className="semibold">Two Alefort Drink Tokens</p>
      </div>
      {parsedContent}
    </div>
  );
};

export default OfferOverviewDetails;
