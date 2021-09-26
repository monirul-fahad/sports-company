import React from "react";

const Added = (props) => {
  console.log(props.clubName);
  const { name } = props.clubName;
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};

export default Added;
