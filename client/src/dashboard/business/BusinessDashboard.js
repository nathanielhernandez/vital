import React, { useEffect } from "react";
import SpinningLoader from "../../components/loaders/SpinningLoader";
import Offer from "../Offer";
import ProfileSidebar from "../personal/ProfileSidebar";
import TypeOffer from "./TypeOffer";
import ModalWrapper from "../../components/modal/ModalWrapper";
import { useAppContext } from "../../context/appContext";
import CreateOfferModal from "./CreateOfferModal";

const BusinessDashboard = () => {
  const { getOffers, offers, isModalOpen, openModal, closeModal, isLoading } =
    useAppContext();

  useEffect(() => {
    getOffers();
  }, [isModalOpen]);

  return (
    <div className="main-container">
      <div className="dashboard-container">
        <div className="form-layout-left-aligned">
          <ProfileSidebar />
        </div>
        <div className="form-layout-left-aligned">
          {isModalOpen && <ModalWrapper component={<CreateOfferModal />} />}
          <button onClick={openModal}>
            <TypeOffer />
          </button>
          {isLoading && <SpinningLoader />}
          {offers.map((offer) => {
            return <Offer offer={offer} key={offer._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;
