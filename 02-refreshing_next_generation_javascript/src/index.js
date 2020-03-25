import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Section02 extends React.Component {
  render() {
    return (
      <div>
        <h1>Checkout Console</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Section02 />,
  document.getElementById('root')
);

//#############################################################################

// Lecture 13 - Understanding "let" and "const"

/* Variables declared by var keyword are scoped to the
Immediate function body (hence the function scope) */
var myName = "John";
console.log(myName);


/* let variables are scoped to the immediate enclosing
block denoted by { } (hence the block scope). */
let mySecondName = "Alejandro";
console.log(mySecondName);


// const for Constant
const myLastName = "Zapata";
//myLastName = "Roldan"; // Uncaught TypeError: Assignment to constant variable
//previous line stops script execution if uncommented
console.log(myLastName); //execution wont make it here



//#############################################################################

// Lecture 14 - Arrow Functions

// Normal function
function printMyName(name) {
  console.log(name)
}

printMyName(); //undefined
printMyName("John");



// Arrow function
const printMyNameArrow = (name, age) => {
  console.log(name, age);
}

printMyNameArrow("Alejandro", 33);

// alternative syntax for simple functions (1 line)
const timesTwo = (number) => number * 2;

console.log(timesTwo(4));