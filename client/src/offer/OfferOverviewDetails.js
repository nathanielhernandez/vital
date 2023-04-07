import React from "react";

import parse from "html-react-parser";

const OfferOverviewDetails = (props) => {
  const offer = props.offer;
  return (
    <div className="form-layout-vertical-left-aligned offer-details">
      <h3>Offer Title</h3>
      {offer.offerDetails}
    </div>
  );
};

export default OfferOverviewDetails;
