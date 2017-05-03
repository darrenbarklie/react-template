import React from 'react';

import {
  BrowserRouter as Router, Route, Link, Switch
} from 'react-router-dom';


import Home from './../pages/Home';
import About from './../pages/About';
import Skills from './../pages/Skills';
import Projects from './../pages/Projects';
import Blog from './../pages/Blog';
import Contact from './../pages/Contact';

import Stage from './Stage';

export default class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <div className="scene">

          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>

{/* Should the content be repositioned? */}

          <div className="stage2">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/skills" component={Skills} />
              <Route path="/projects" component={Projects} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>

        </div>
      </Router>
    )
  }
}
