import React from "react";

const Added = (props) => {
  const { name } = props.clubName;
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};

export default Added;
