import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Section03 extends React.Component {
  render() {

    // Lecture 30 - Understanding JSX

    // Syntactic Sugar (JSX)
    return (
      <div className="example">
        <h1>Check Out The Console</h1>
      </div>
    );

    //this is the exact equivalent to the code commented above
    return React.createElement(
      'div',
      {className: 'example'},
      React.createElement(
        'h1',
         null,
         'Check Out The Console'
      )
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