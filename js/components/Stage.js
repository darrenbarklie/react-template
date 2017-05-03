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



export default class Stage extends React.Component {
  render() {
    return (
      <div className="stage">
        <h1>This is the Stage component!</h1>
      </div>
    )
  }
}
