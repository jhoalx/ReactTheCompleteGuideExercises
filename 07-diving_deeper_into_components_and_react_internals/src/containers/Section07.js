import './Section07.css';
import React from "react";
import Persons from "../components/Persons/Persons"
import Cockpit from "../components/Cockpit/Cockpit"

class Section07 extends React.Component {
  constructor(props) {
    super(props);
    console.log("[Section07.js] 1) constructor()");
    // Lecture 90 - Component Creation Lifecycle in Action
    // we could do this instead of setting state in line 22
    // this.state = {
    //   persons: [
    //     {id: 1, name: "Jhon", age: 34},
    //     {id: 2, name: "Laura", age: 14},
    //     {id: 3, name: "Blanca", age: 56}
    //   ],
    //   showPersons: false
    // }
  }

  state = {
    persons: [
      {id: 1, name: "Jhon", age: 34},
      {id: 2, name: "Laura", age: 14},
      {id: 3, name: "Blanca", age: 56}
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log("[Section07.js] 2) getDerivedStateFromProps()", props);
    return state;
  };

  componentDidMount() {
    console.log("[Section07.js] 4) componentDidMount()");
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
    console.log("[Section07.js] 3) render()");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <Persons
              persons={this.state.persons}
              clickEventHandler={this.deletePersonHandler}
              nameChangeHandler={this.nameChangedHandler}
          />
      )
    }

    return (
        <div className="App">
          <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              togglePersonsHandler={this.togglePersonsHandler}
          />
          {persons}
        </div>
    );
  }
}

export default Section07;
