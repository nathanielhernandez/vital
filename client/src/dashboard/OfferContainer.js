import React, { useState, useRef, useCallback } from "react";
import useGetOffers from "../hooks/useGetOffers";
import Offer from "./Offer";
import NoOffers from "./NoOffers";
import SpinningLoader from "../components/loaders/SpinningLoader";
import { useAppContext } from "../context/appContext";

const OfferContainer = () => {
  const { user } = useAppContext();
  const [pageNumber, setPageNumber] = useState(1);
  const { offers, hasMore, loading, error } = useGetOffers(pageNumber);

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
      {user.accountType === "Business" && "test"}

      {offers.length < 1 && !loading ? (
        <NoOffers />
      ) : (
        offers.map((offer, index) => {
          if (offers.length === index + 1) {
            return (
              <div ref={lastOffer} key={offer._id}>
                <Offer offer={offer} />
              </div>
            );
          } else {
            return <Offer offer={offer} key={offer._id} />;
          }
        })
      )}
      <div>{loading && <SpinningLoader />}</div>
      <div>{error && `Error`}</div>
    </div>
  );
};

export default OfferContainer;
