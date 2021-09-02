import React from "react";

const Footer = (props) => {
  // const setMainState = (value) => {
  //   props.setState(value)
  // }
  return (
    <div className="App-footer">
      <h2>{props.text}</h2>
    </div>
  );
};

export default Footer;
