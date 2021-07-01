import React from "react";

function Input(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Ingrese un monto</label><br/>
      <div class="input-group mb-3">
        <span className="input-group-text">$</span>
        <input
          value={props.value}
          onChange={props.handleInputChange}
          type = "number"
          className="form-control"
        />
        <span className="input-group-text">.00</span>
      </div>
    </form>
  );
}

export default Input;