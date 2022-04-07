import React from "react";
import "./ModalWrapper.css";

const ModalWrapper = (props) => {
  const component = props.component;
  return <div className="modal-wrapper">{component}</div>;
};

export default ModalWrapper;
