import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Stage from './components/Stage';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <Stage />

      </div>
    )
  }
}
