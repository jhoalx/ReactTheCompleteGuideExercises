import React from "react";
import Person from "./Person/Person";

const persons = (props) => props.persons.map((person, index) => {
  return <Person
      name={person.name}
      age={person.age}
      // clickEventHandler={props.clickEventHandler.bind(undefined, index)}
      clickEventHandler={() => props.clickEventHandler(index)}
      key={person.id}
      nameChangeHandler={(event) => props.nameChangeHandler(event, person.id)}
  />
});

export default persons;