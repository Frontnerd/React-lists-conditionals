import React from 'react';
import "./CharComponent.css"

const charComponent = ( props ) => {
  return (
    <div className="CharComponent" onClick={props.clicked}>
      <h1>{props.fl}</h1>
    </div>
  );
}

export default charComponent
