import React from "react";
import { FiGift } from "react-icons/fi";

const Reward = ({ reward }) => {
  return (
    <div className="form-layout-horizontal-centered">
      <FiGift />
      <p className="semibold">{reward}</p>
    </div>
  );
};

export default Reward;
