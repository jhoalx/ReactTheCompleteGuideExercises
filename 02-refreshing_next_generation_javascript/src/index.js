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

[, num2, , num4] = threeNums;
console.log(num2, num4);



// Object Destructuring
const mother = { name: 'white', age: 50, location: 'home' }
const { name, location } = mother
console.log(name, location)



//#############################################################################

// Lecture 20 - Reference and Primitive Types Refresher

// PRIMITIVE TYPES
// The in-memory value of a primitive type is it's actual value 
// (e.g. boolean true, number 42). 
// A primitive type can be stored in the fixed amount of memory available.

// null, undefined, Boolean, Number, String

// Primitive types are also known as: scalar types or simple types.

var a = 13         // assign `13` to `a`
var b = a          // copy the value of `a` to `b`
b = 37             // assign `37` to `b`
console.log(a)     // => 13

// REFERENCE TYPES
// A reference type can contain other values. Since the contents of a
// reference type can not fit in the fixed amount of memory available for 
// a variable, the in-memory value of a reference type 
// is the reference itself (a memory address).

// Array
// Object
// Function
// Reference types are also known as: complex types or container types.

var a = { c: 13 }  // assign the reference of a new object to `a`
var b = a          // copy the reference of object inside `a` to new var `b`
b.c = 37           // modify the contents of the object `b` refers to
console.log(a)     // => { c: 37 }



//#############################################################################

// Lecture 21 - Refreshing Array Functions

// map, pop, push, shift, unshift

const moreNumbers = [10, 20, 30]

const doubleNumArray = moreNumbers.map((num) => {
  return num * 2;
});

console.log(moreNumbers);
console.log(doubleNumArray);




//#############################################################################

// Lecture 24 - JS Array Functions

// Not really next-gen JavaScript, but also important:
// JavaScript array functions like map() , filter() , reduce()  etc.

// You'll see me use them quite a bit since a lot of React concepts 
// rely on working with arrays (in immutable ways).

// The following page gives a good overview over the various methods you can 
// use on the array prototype - feel free to click through them and refresh
// your knowledge as required: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//Particularly important in this course are:

// map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
// concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
// slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice