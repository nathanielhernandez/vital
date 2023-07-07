import React, { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import useGetOffers from "../hooks/useGetOffers";
import Offer from "./Offer";
import PostOffersButton from "./PostOffersButton";
import NoOffers from "./NoOffers";
import SpinningLoader from "../components/loaders/SpinningLoader";
import ModalWrapper from "../components/modal/ModalWrapper";
import PostOffer from "./PostOffer";
import { useAppContext } from "../context/appContext";

const OfferContainer = () => {
  const { user, isModalOpen } = useAppContext();
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
    [loading, hasMore, isModalOpen]
  );

  // useEffect(() => {
  //   useGetOffers(pageNumber);
  // }, [isModalOpen]);

  return (
    <div className="form-layout-left-aligned no-gap">
      {isModalOpen && <ModalWrapper component={<PostOffer />} />}
      {user.accountType === "Business" && <PostOffersButton />}

      <div className="card-top">
        <h5 className="medium">Offers for you</h5>
      </div>
      {offers.length < 1 && !loading ? (
        <NoOffers />
      ) : (
        offers.map((offer, index) => {
          if (offers.length === index + 1) {
            return (
              <div
                ref={lastOffer}
                key={offer._id}
                className="card-bottom card-actionable"
              >
                <Link to={`/offer/${offer._id}`}>
                  <Offer offer={offer} />
                </Link>
              </div>
            );
          } else {
            return (
              <div key={offer._id} className="card-middle card-actionable">
                <Link to={`/offer/${offer._id}`}>
                  <Offer offer={offer} key={offer._id} />
                </Link>
              </div>
            );
          }
        })
      )}
      <div>{loading && <SpinningLoader />}</div>
      <div>{error && `Error`}</div>
    </div>
  );
};

export default OfferContainer;
