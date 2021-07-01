import React, { Fragment } from 'react';
import Entry from './entry'

function EntryList(props){  
  return(
    <Fragment>
      <table className="table"> 
        <thead>
          <tr>
            <th scope="col" colSpan="2">Monto</th>
          </tr>
        </thead>
        <tbody>
          {props.entries.map((entry, id) =>
            <Entry 
              key = {id}
              id = {id}
              value = {entry}
              handleDelete = {props.handleDelete}
              getRowClass = {props.getRowClass}
            />
          )}
        </tbody>
      </table>
    </Fragment>
  )
}
export default EntryList;