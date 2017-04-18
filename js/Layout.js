import React from 'react';

import Header   from './components/Header';
import Contact  from './components/Contact';
import Signup   from './components/Signup';
import Footer   from './components/Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <Signup />
        <Contact />
        <Footer />
      </div>
    )
  }
}
