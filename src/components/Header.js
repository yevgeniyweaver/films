import React from "react";

const Header = (props) => {
  const setMainState = (value) => {
    props.setState(value)
  }
  return (
    <header className="App-header" onClick={()=>setMainState(12)}>
      <h2>{props.text}</h2>
    </header>
  );
};

export default Header;
