import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./OfferRichText.css";

const OfferRichText = (props) => {
  const [state, setState] = useState({ text: "" });
  const setOffer = props.setOffer;
  const offer = props.offer;

  const handleChange = (value) => {
    setState({ text: value });
    setOffer({ ...offer, offerDetails: value });
  };

  return <ReactQuill value={state.text} onChange={handleChange} />;
};

export default OfferRichText;
