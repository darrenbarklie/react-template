import React from 'react';

import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <Contact />
        <Footer />
      </div>
    )
  }
}
