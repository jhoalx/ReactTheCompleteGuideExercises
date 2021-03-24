// Lecture 32 - Creating a Functional Component

// by convention, each component should be in it's own folder,
// within the src folder, also, it's name should start with a capital letter.
// this file is an example by itself

/*
https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108

ʺyou should use functional components if you are writing a presentational 
component which doesn’t have its own state or needs to access a lifecycle hook.
Otherwise you can stick to class components or take a look into the library
'recompose' which allows you to write functional components and enhance them
with a state or lifecycle hooks with HOCs!ʺ
*/

import React from 'react'

const person = () => {
  // Lecture 35 - Outputting Dynamic Content
  // The curly braces are a special syntax to let the JSX parser know that it needs to
  // interpret the contents in between them as JavaScript instead of a string
  return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
};

export default person;