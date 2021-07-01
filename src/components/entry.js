import React, { Fragment } from 'react';

function Entry(props) {
  return (
    <Fragment>
      <tr className = {props.getRowClass(props.value)}>
        <td>{props.value}.00 M.N.</td>
        <td>
        <button
          onClick = {() => {props.handleDelete(props.id)}}
          className = "btn btn-danger"
          value = "X"
        >
        X
        </button>
        </td>
      </tr>
    </Fragment>
  );
}
export default Entry;