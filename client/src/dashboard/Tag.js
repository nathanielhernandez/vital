import React from "react";

const Tag = (props) => {
  const tag = props.tag;
  return (
    <a href="#" className="tag">
      {tag}
    </a>
  );
};

export default Tag;
