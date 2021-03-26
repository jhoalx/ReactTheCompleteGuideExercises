import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Person from './Person/Person'

const Section03 = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Jhon", age: 34},
      {name: "Laura", age: 14},
      {name: "Blanca", age: 56}
    ]
  })


  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: "Alejandro", age: 34},
        {name: "Laura", age: 14},
        {name: "Blanca", age: 56}
      ]
    })
  }

  return (
      <div className="example">
        <h1>Check Out The Console</h1>

        <button onClick={switchNameHandler}>Switch Name</button>

        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>Business: Heladería Blanca's</Person>
      </div>
  );

}

ReactDOM.render(
    <Section03/>,
    document.getElementById('root')
);
