import React, { useState, useEffect, useRef, useCallback } from "react";
import NoOffers from "../dashboard/NoOffers";
import Offer from "../dashboard/Offer";
import useGetOffers from "../hooks/useGetOffers";

const Feed = (props) => {
  const userProfile = props.userProfile;
  const [pageNumber, setPageNumber] = useState(1);
  const { offers, hasMore, loading, error } = useGetOffers(
    pageNumber,
    userProfile._id
  );

  const observer = useRef();
  const lastOffer = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="form-layout-left-aligned">
      {offers.map((offer, index) => {
        if (offers.length === index + 1) {
          return (
            <div ref={lastOffer} key={offer._id}>
              <Offer offer={offer} />
            </div>
          );
        } else {
          return <Offer offer={offer} key={offer._id} />;
        }
      })}
    </div>
  );
};

export default Feed;
