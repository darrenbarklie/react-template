import React from 'react';

import Navigation from './Navigation';
import Logo from './Logo';


export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Logo />
        <Navigation />
      </header>
    )
  }
}
