import React from "react";

function TotalBalance(props) {
  return (
    <div>
      <h2>Balance Total De Cuenta</h2>
      <div className={props.getBalanceClass(props.value)} role="alert">{props.value}.00</div>
    </div>
  );
}

export default TotalBalance;

