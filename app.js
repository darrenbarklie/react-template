import React from 'react';
import ReactDOM from 'react-dom';

require('./sass/base.scss');


ReactDOM.render(
  <div>
		<header>Testing Header</header>
		<h1>Template Name</h1>
		<span className="msg-status">React is working</span>
	</div>,
  document.getElementById('app')
);
