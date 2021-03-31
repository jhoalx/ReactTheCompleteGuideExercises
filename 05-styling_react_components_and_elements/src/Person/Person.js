import Radium from "radium";
import React from 'react'
import "./Person.css"


const person = (props) => {
  // Lecture 69 - Using Radium for Media Queries
  const componentStyle = {
    "@media (min-width: 500px)": {
      width: '450px',
    }
  };
  return (
      <div className={"Person"} style={componentStyle}>
        <p onClick={props.clickEventHandler}>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.nameChangeHandler} value={props.name}/>
      </div>
  )
};

export default Radium(person);