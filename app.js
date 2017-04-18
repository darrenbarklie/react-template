import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './js/Layout'

require('./sass/base.scss');

ReactDOM.render(
  <div id="root">
    <h1>This is the Root container</h1>
    <Layout />
	</div>,
  document.getElementById('root')
);
