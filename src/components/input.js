import React from "react";

function Input(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Ingrese un monto</label><br/>
      <input
        value={props.value}
        onChange={props.handleInputChange}
        type = "number"
        className="new-task"
      />
    </form>
  );
}

export default Input;