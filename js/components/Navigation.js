import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './../pages/Home';
import About from './../pages/About';
import Skills from './../pages/Skills';
import Projects from './../pages/Projects';
import Blog from './../pages/Blog';
import Contact from './../pages/Contact';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    )
  }
}
