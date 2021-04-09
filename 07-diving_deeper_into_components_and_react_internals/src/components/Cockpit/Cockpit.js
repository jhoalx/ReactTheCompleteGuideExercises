import React from "react";

const Cockpit = (props) => {
  const myButtonStyle = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  }

  if (props.showPersons) {
    myButtonStyle.backgroundColor = "red"
    myButtonStyle[":hover"] = {
      backgroundColor: 'salmon',
      color: 'white',
    }
  }


  const titleClasses = [];
  if (props.persons.length <= 2) {
    titleClasses.push("red");
  }
  if (props.persons.length <= 1) {
    titleClasses.push("bold");
  }

  return (
      <div>
        <h1>Section 07</h1>
        <h3>AppTitle: {props.title}</h3>
        <p className={titleClasses.join(" ")}>Diving Deeper into Components &
          React Internals</p>

        <button
            style={myButtonStyle}
            onClick={props.togglePersonsHandler}>Toggle Persons
        </button>
      </div>
  );
}

export default Cockpit;