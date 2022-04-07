import React, { useEffect, useState } from "react";
import Alert from "../../components/alert/Alert";
import { initialState, useAppContext } from "../../context/appContext";
import "./CreateOfferModal.css";

const CreateOfferModal = () => {
  const { user, closeModal, displayAlert, showAlert, postOffer } =
    useAppContext();
  const initialState = {
    businessName: user.businessName,
    businessID: user._id,
    offerDetails: "",
    tagsID: "tags",
    shareableLink: "vital.com/" + Date.now(),
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!values.offerDetails) {
      displayAlert();
      return;
    }
    postOffer(values);
  };

  return (
    <div className="card create-offer-modal">
      <form className="form-layout-left-aligned">
        <div className="form-layout-horizontal-centered">
          <img
            src={user.profilePhoto}
            alt={user.businessName}
            className="profile-small"
          />
          <h5>{user.businessName}</h5>
        </div>
        {showAlert && <Alert />}
        <textarea
          type="text"
          name="offerDetails"
          placeholder="Offer details..."
          value={values.offerDetails}
          className="offer-text-area"
          onChange={handleChange}
        />
        <div className="form-layout-horizontal-right-aligned">
          <button onClick={closeModal} className="btn standard-btn">
            close
          </button>
          <button type="submit" onClick={onSubmit} className="btn standard-btn">
            post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateOfferModal;
