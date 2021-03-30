import './App.css';
import React from "react";
import Person from "./Person/Person"

class Section04 extends React.Component {
  state = {
    persons: [
      {id: 1, name: "Jhon", age: 34},
      {id: 2, name: "Laura", age: 14},
      {id: 3, name: "Blanca", age: 56}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // Lecture 58 - Updating State Immutably
    // const persons = this.state.persons.slice();
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
            {/* Lecture 59 - Lists & Keys */}
            {/* Lecture 60 - Flexible Lists */}
            {this.state.persons.map((person, index) => {
              return <Person
                  name={person.name}
                  age={person.age}
                  clickEventHandler={this.deletePersonHandler.bind(this, index)}
                  key={person.id}
                  nameChangeHandler={(event) => this.nameChangedHandler(event, person.id)}
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
