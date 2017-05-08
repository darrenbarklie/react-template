import React from 'react';

export default class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <span className="label">This is a single project</span>
        <span className="name">Name:</span>
        <span className="date">Date:</span>
        <span className="blurb">Blurb:</span>
      </div>
    )
  }
}
