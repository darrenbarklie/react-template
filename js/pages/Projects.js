import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import ProjectsIndex from './projects/ProjectsIndex';
import Project from './projects/Project';
import ProjectsData from './projects/ProjectsData';

export default class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <span className="label">This is the Projects master component</span>
        {/*
        <Switch>
          <Route exact path='/projects' component={ProjectsIndex}/>
          <Route path='/projects/:project' component={Project}/>
        </Switch>
        */}
      </div>
    )
  }
}
