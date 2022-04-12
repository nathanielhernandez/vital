import React from "react";
import "./PostOffersButton.css";
import { useAppContext } from "../context/appContext";

const PostOffersButton = () => {
  const { openModal } = useAppContext();
  return (
    <button className="card card-button" onClick={openModal}>
      Type an offer...
    </button>
  );
};

export default PostOffersButton;
