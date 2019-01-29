import React from "react";

const todoCaption = props => {
  return (
    <div className="field has-addons">
      <div className="control">
        <input
          className="input is-info"
          type="text"
          placeholder="Enter Todo"
          onChange={props.change}
          value={props.value}
        />
      </div>
      <div className="control">
        <a className="button is-info" onClick={props.click}>
          Add
        </a>
      </div>
    </div>
  );
};

export default todoCaption;
