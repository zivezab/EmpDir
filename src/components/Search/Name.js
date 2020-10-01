import React from 'react';
import {Link} from 'react-router-dom';

function encodeURIString(name) {
  return '/overview?name=' + encodeURIComponent(name);
}

function Name(props) {
  return (
    <div>
      <Link to={encodeURIString(props.name)}>{props.name}</Link>
    </div>
  );
}

export {Name as default, encodeURIString};
