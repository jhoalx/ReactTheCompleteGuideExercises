import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Section03 extends React.Component {
  render() {
    return (
      <div>
        <h1>Check Out The Console</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Section03 />,
  document.getElementById('root')
);

//#############################################################################

// Lecture 26 - The Build Workflow

/*
  Recommended for SPAs and MPAs

  ¿WHY?
  - Optimize Code
  - Use Next-Gen JavaScript Features
  - Be More Productive

  ¿HOW?
  - Use Dependency Management Tool like npm or yarn
  - Use Bundler: Reccommended: Webpack
  - Use Compiler (Next-Gen Javascript): Babel + Presets
  - Use a Development Server: Local
  */