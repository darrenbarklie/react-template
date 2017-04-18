import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import Layout from './js/Layout';

require('./sass/base.scss');

ReactDOM.render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>,
  document.getElementById('root')
);
