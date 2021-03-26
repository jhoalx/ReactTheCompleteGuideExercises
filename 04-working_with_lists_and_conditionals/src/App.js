import './App.css';
import React from "react";
import Person from "./Person/Person"

class Section04 extends React.Component {
  state = {
    persons: [
      {name: "Jhon", age: 34},
      {name: "Laura", age: 14},
      {name: "Blanca", age: 56}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 34},
        {name: "Laura", age: 14},
        {name: "Blanca", age: 56}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Jhon", age: 34},
        {name: event.target.value, age: 14},
        {name: "Blanca", age: 56}
      ]
    })
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  render() {
    const myButtonStyle = {
      backgroundColor: "aquamarine",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    return (
        <div className="App">
          <h1>Check Out The Console</h1>

          <button
              style={myButtonStyle}
              onClick={this.togglePersonsHandler}>Toggle Persons
          </button>

          {/* Lecture 53 - Rendering Content Conditionally*/}
          {
            this.state.showPersons ?
            <div>
              <Person
                  name={this.state.persons[0].name}
                  age={this.state.persons[0].age}
                  clickEventHandler={() => this.switchNameHandler("Paragraph")}/> {/* self closing, no need to nest elements right now */}
              <Person
                  name={this.state.persons[1].name}
                  age={this.state.persons[1].age}
                  nameChangeHandler={this.nameChangedHandler}/>
              <Person
                  name={this.state.persons[2].name}
                  age={this.state.persons[2].age}>Business: Heladería Blanca's
              </Person>
            </div>
            : null
          }
        </div>
    );
  }
}

export default Section04;
