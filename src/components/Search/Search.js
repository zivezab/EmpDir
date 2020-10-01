import React from 'react';
import {BrowserRouter as Router, useLocation} from 'react-router-dom';
import Overview from './Overview';
import Explorer from './Explorer';

import './Search.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchPage() {
  return (
    <Router>
      <Explorer query={useQuery} />
      <Overview query={useQuery} />
    </Router>
  );
}
