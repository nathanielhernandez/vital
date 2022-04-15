import React, { useRef } from "react";
import "./ModalWrapper.css";
import useOutsideModal from "../../hooks/useOutsideModal";

const ModalWrapper = (props) => {
  const component = props.component;

  const wrapperRef = useRef(null);
  useOutsideModal(wrapperRef);

  return (
    <div className="modal-wrapper" id="modal-wrapper">
      <div ref={wrapperRef}>{component}</div>
    </div>
  );
};

export default ModalWrapper;
