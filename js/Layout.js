import React from 'react';

import Header from './components/Header';
import Stage from './components/Stage';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <Stage />
        <Contact />
        <Footer />
      </div>
    )
  }
}
