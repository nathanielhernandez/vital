import React from "react";

import parse from "html-react-parser";

const OfferOverviewDetails = (props) => {
  const offer = props.offer;
  const offerDetails = offer.offerDetails;
  const parsedContent = offerDetails ? parse(`${offerDetails}`) : null;

  return (
    <div className="form-layout-vertical-left-aligned offer-details">
      <h3 className="medium">{offer.offerTitle}</h3>
      {parsedContent}
    </div>
  );
};

export default OfferOverviewDetails;
