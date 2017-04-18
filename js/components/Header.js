import React from 'react';

import Navigation from './Navigation';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <span class="label">This is the NEW Header component</span>
        <Navigation />
      </header>
    )
  }
}
