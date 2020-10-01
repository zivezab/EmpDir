import React, {useState} from 'react';
import NamesContainer from './NamesContainer';
import {encodeURIString} from './Name';

function Explorer(props) {
  const name = props.query ? props.query().get('name') : '';
  const [searchTerm, setSearchTerm] = useState('');
  const names = [
    'John Hartman',
    'Samad Pitt',
    'Amaya Knight',
    'Leanna Hogg',
    'Aila Hodgson',
    'Vincent Todd',
    'Faye Oneill',
    'Lynn Haigh',
    'Nylah Riddle',
  ];

  const editSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const dynamicSearch = () => {
    return names.filter((name) =>
      name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  };

  const redirect = (e) => {
    e.preventDefault();
    window.location.href = encodeURIString(searchTerm);
  };

  return name ? null : (
    <div className='explorer'>
      <h2>Employee Explorer</h2>
      <form onSubmit={redirect}>
        <input
          type='text'
          value={searchTerm}
          onChange={editSearchTerm}
          placeholder='e.g. John Hartman'
        />
        <button className='btn' type='submit' onClick={redirect}>
          SEARCH
        </button>
      </form>
      <br></br>
      <NamesContainer names={dynamicSearch()} />
    </div>
  );
}

export default Explorer;
