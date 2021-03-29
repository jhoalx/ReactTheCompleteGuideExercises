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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({ persons: persons})
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

    // Lecture 54 - Handling Dynamic Content "The Javascript Way"
    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <div>
            {/* Lecture 56 - Outputting Lists */}
            {/* Lecture 57 - Lists & State */}
            {this.state.persons.map((person, index) => {
              return <Person
                  name={person.name}
                  age={person.age}
                  clickEventHandler={this.deletePersonHandler.bind(this, index)}
              />
            })}

            {/*<Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                clickEventHandler={() => this.switchNameHandler("Paragraph")}/>
            <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                nameChangeHandler={this.nameChangedHandler}/>
            <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}>Business: Heladería Blanca's
            </Person>*/}
          </div>
      )
    }

    return (
        <div className="App">
          <h1>Check Out The Console</h1>

          <button
              style={myButtonStyle}
              onClick={this.togglePersonsHandler}>Toggle Persons
          </button>

          {/* Lecture 53 - Rendering Content Conditionally */}
          {persons}
        </div>
    );
  }
}

export default Section04;
