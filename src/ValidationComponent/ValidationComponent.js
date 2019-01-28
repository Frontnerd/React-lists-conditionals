import React from 'react';

const validationComponent = ( props ) => {

  return (
    <div>
      <p>stringLength: {props.stringLength}</p>
      <p>outOfRange: {props.outOfRange}</p>
    </div>
  );
}

export default validationComponent

// if stringLength > 5 "Text long enough"
// else "Text too short"
