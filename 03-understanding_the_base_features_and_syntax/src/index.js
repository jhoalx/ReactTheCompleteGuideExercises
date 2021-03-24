import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Person from './Person/Person'

class Section03 extends React.Component {
  // Lecture 38 - Understanding & Using State
  state = {
    persons: [
      {name: "Jhon", age: 34},
      {name: "Laura", age: 14},
      {name: "Blanca", age: 56}
    ]
  }

  switchNameHandler = () => {
    console.log("Clicked");
  }

  render() {
    // Lecture 30 - Understanding JSX
    // Syntactic Sugar (JSX)
    return (
        <div className="example">
          <h1>Check Out The Console</h1>

          {/* Lecture 40 - Handling Events with Methods */}
          <button onClick={this.switchNameHandler}>Switch Name</button>

          {/* Lecture 41 - To which Events Can You Listen:
           https://reactjs.org/docs/events.html#supported-events */}
          

          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/> {/* self closing, no need to nest elements right now */}
          {/* Lecture 34 - Working with Components & Re-Using them */}
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          {/* Lecture 37 - Understanding the "children" prop */}
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Business: Heladería Blanca's</Person>
        </div>
    );

    //this is the exact equivalent to the code commented above
    return React.createElement(
        'div',
        {className: 'example'}, //configuration is a javascript object
        React.createElement(
            'h1',
            null,
            'Check Out The Console'
        )
    );
  }
}

ReactDOM.render(
    <Section03/>,
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

//#############################################################################

// Lecture 30 - JSX Restrictions

// must use className attribute instead of reserved word class in JSX(html)
// JSX Expression must have only 1 root element.


