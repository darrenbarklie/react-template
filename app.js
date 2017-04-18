import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router, Route, Link, Switch
} from 'react-router-dom';

import Layout from './js/Layout';

require('./sass/base.scss');

ReactDOM.render(
    <Router>
      <Layout />
    </Router>,
  document.getElementById('root')
);
