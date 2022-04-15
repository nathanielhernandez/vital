import React, { useState } from "react";
import "./AddTags.css";
import { IconContext } from "react-icons";
import { BsFillXCircleFill, BsPersonPlus, BsSlack } from "react-icons/bs";

const AddTags = (props) => {
  const [tag, setTag] = useState("");
  const { tags, setTags } = props;

  const handleChange = (e) => {
    setTag(e.target.value);
  };

  const checkReturn = (e) => {
    if (e.keyCode === 13 && e.target.value.length !== 0) {
      setTags([...tags, e.target.value]);
      setTag("");
    }
  };

  const removeTag = (index) => (e) => {
    let tempArr = tags;
    tempArr.splice(index, 1);
    setTags([...tempArr]);
  };

  return (
    <div className="add-tags-container">
      {tags.length > 0 &&
        tags.map((tag, index) => {
          return (
            <div className="tag" key={index}>
              {tag}
              <button onClick={removeTag(index)} className="remove-icon">
                <IconContext.Provider value={{ color: "#878d95" }}>
                  <BsFillXCircleFill />
                </IconContext.Provider>
              </button>
            </div>
          );
        })}
      <input
        type="text"
        className="tag-input"
        value={tag}
        onChange={handleChange}
        onKeyUp={checkReturn}
        placeholder="+ Add Tag"
      />
    </div>
  );
};

export default AddTags;
