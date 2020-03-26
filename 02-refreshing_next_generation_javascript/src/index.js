import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//#############################################################################

// Lecture 15 - Exports and Imports (Modules)

// Warning: imports should be at the beggining of the file 
// (hence this lecture here)
// Warning2: import statement is ES6 syntax, 
// produces 'Uncaught syntax error' in vanilla javascript

// DEFAULT EXPORT
// import will always refer to the export marked as default (see person.js)
import person from './person.js';
import personAsAlias from './person.js';

// NAMED EXPORT
// uses { } to specifically target exports from utility.js by it's name
import { baseData } from './utility.js';
import { clean } from './utility.js';

// assign aliases
import { clean as EmptyFunction } from './utility.js'

// if there's multiple named exports in the file (utility.js)
import * as bundled from './utility.js';

// can be accesed like:
console.log(bundled.baseData);
console.log(bundled.clean());

//#############################################################################



class Section02 extends React.Component {
  render() {
    return (
      <div>
        <h1>Check Out The Console</h1>
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



//#############################################################################

// Lecture 16 - Understanding Classes
// Lecture 17 - Classes, Properties and Methods (update code to ES6/Babel)


class Human {
  gender = "unset"; //setting an property

  //methods
  printGender = () => {
    console.log(this.gender);
  }
}


//inherits Human
class Person extends Human {
  name = "Omar";
  gender = "male"

  //methods
  walk = () => {
    console.log("Person is walking");
  }
}


//instantiating a class
const somePerson = new Person();

console.log(somePerson.name) //access property
somePerson.printGender();
somePerson.walk(); //run methods


//#############################################################################

// Lecture 18 - The Spread & Rest Operator ("..." three dots)

// wether is spread or rest depends where it's used

// Spread: 
// Used to split up array elements OR object properties
let oldArray = [0, 1, 2];
const newArray = [...oldArray, 3, 4];

let oldObject = new Person();
const newObject = { ...oldObject, newProp: 5 }

console.log(newArray);
console.log(newObject);

// Rest: 
// Used to merge a list of function arguments into an array

function filterOne(...argsArray) {
  return argsArray.filter(el => el === 1);
}

console.log(filterOne(1, 100, 20));


//#############################################################################

// Lecture 19 - Destructuring

// Easily extract arrtasy elements or object properties
// and store them in variables

// Array Destructuring
const threeNums = [1, 2, 3, 4];
let num1, num2, num3, num4;

[num1, num2] = threeNums;
console.log(num1, num2);

[ , num2, , num4] = threeNums;
console.log(num2, num4);



// Object Destructuring
const mother = { name: 'white', age: 50, location:'home' }
const {name, location} = mother
console.log(name, location)