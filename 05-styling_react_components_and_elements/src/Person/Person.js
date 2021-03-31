import Radium from "radium";
import React from 'react'
import "./Person.css"


const person = (props) => {
  return (
      <div className={"Person"}>
        <p onClick={props.clickEventHandler}>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.nameChangeHandler} value={props.name}/>
      </div>
  )
};

export default Radium(person);