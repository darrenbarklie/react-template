import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './../pages/Home';
import About from './../pages/About';
import Skills from './../pages/Skills';
import Projects from './../pages/Projects';
import Blog from './../pages/Blog';
import Contact from './../pages/Contact';



export default class Stage extends React.Component {
  render() {
    return (
      <div className="stage">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </div>
    )
  }
}
