import './App.css';
import React from "react";
import Person from "./Person/Person"

class Section05 extends React.Component {
  state = {
    persons: [
      {id: 1, name: "Jhon", age: 34},
      {id: 2, name: "Laura", age: 14},
      {id: 3, name: "Blanca", age: 56}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    })

    const personToUpdate = {
      ...this.state.persons[personIndex]
    }

    personToUpdate.name = event.target.value;

    const updatedPersonsArray = [...this.state.persons];
    updatedPersonsArray[personIndex] = personToUpdate;

    this.setState({
      persons: updatedPersonsArray
    })
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  render() {
    const myButtonStyle = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                  name={person.name}
                  age={person.age}
                  clickEventHandler={this.deletePersonHandler.bind(this, index)}
                  key={person.id}
                  nameChangeHandler={(event) => this.nameChangedHandler(event, person.id)}
              />
            })}
          </div>
      )

      // Lecture 66 - Setting Styles Dynamically
      myButtonStyle.backgroundColor = "red";
    }

    // Lecture 67 - Setting Class Names Dynamically
    const titleClasses = [];
    if (this.state.persons.length <= 2) {
      titleClasses.push("red");
    }
    if (this.state.persons.length <= 1) {
      titleClasses.push("bold");
    }


    return (
        <div className="App">
          <h1>Section 05</h1>
          <p className={titleClasses.join(" ")}>Styling React Components & Elements</p>

          <button
              style={myButtonStyle}
              onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
}

export default Section05;
