import React from 'react';
import Name from './Name';

function NamesContainer(props) {
  return props.error ? (
    <div>{props.error}</div>
  ) : (
    <div className='names-container'>
      {props.names.map((name) => (
        <Name key={name} name={name} />
      ))}
    </div>
  );
}

export default NamesContainer;
