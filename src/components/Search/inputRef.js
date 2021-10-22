import React, { Component } from "react";
class InputRef extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this._name);
    const name = this._name.value;
  }
  handleCancel = (event) => {
    event.preventDefault();
    console.log(this._single.checked);
    this._name.focus();
  }
  render() {
    let searchFieldRow = 'search-field-row';
    return (
      <div>
        <div className={searchFieldRow}>
          <input type="text" ref={ (input) => {this._name = input} } />
        </div>
        <div className={searchFieldRow}>
          <input type="checkbox" ref={ (input) => {this._single = input} } />
        </div>
        <button onClick={this.handleSubmit}>Show</button>
        <button onClick={this.handleCancel}>Focus</button>
      </div>
    );
  }
}
export default InputRef;
