import React, { useState } from "react";
import Input from "../components/input/Input";
import { useAppContext } from "../context/appContext";

const responseInitialState = {
  responseDetails: "",
};

const RespondOffer = (props) => {
  const offer = props.offer;
  const { user, postOffer } = useAppContext();
  const [response, setResponse] = useState(responseInitialState);

  return (
    <div className="card modal-standard">
      <div className="form-layout-vertical-left-aligned">
        <Input></Input>
      </div>
    </div>
  );
};

export default RespondOffer;
