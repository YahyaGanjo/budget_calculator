import React from "react";

export const alert = ({ type, text }) => {
  return <div className={`alert alert-${type}`}>{text}</div>;
};

export default alert;
