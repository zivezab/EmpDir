import React, {useState, useEffect} from 'react';
import NamesContainer from './NamesContainer';

const SEARCH_URL = 'http://api.additivasia.io/api/v1/assignment/employees/';

function checkDataFormat(data) {
  return (
    data.length > 1 &&
    typeof data[1] == 'object' &&
    data[1].hasOwnProperty('direct-subordinates')
  );
}

function Overview(props) {
  const name = props.query ? props.query().get('name') : '';
  const [subordinates, setSubordinates] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const fetchData = (name) => {
    try {
      const url = `${SEARCH_URL}${name}`;
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            setData([]);
            throw new Error('Employee not found');
          }
          return response.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            setData(data);
            if (checkDataFormat(data)) {
              setSubordinates(data[1]['direct-subordinates']);
            } else {
              throw new Error('No direct subordinates found');
            }
          } else {
            throw new Error('Data format not match');
          }
        })
        .catch((error) => {
          setError(error.message);
          setSubordinates([]);
        });
    } catch (error) {
      setError(error.message);
      setSubordinates([]);
    }
  };
  useEffect(() => {
    name && fetchData(name);
  }, [name]);

  return name ? (
    <div>
      <h2>Employee Overview</h2>
      <span>
        {data.length !== 0 &&
          `Subordinates of employee ${name} (${data[0].toUpperCase()}):`}
      </span>
      <NamesContainer names={subordinates} error={error} />
    </div>
  ) : null;
}

export default Overview;
