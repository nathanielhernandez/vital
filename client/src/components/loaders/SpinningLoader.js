import React from "react";
import "./SpinningLoader.css";

const SpinningLoader = () => {
  return (
    <div className="lds-wrapper">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SpinningLoader;
