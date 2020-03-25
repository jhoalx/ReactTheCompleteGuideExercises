import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class GettingStarted extends React.Component {
  render() {
    return (
      <div>
        <h1>¡Hello World!</h1>

        <hr></hr>

        <Person name="Omar" age="25"/>
        <Person name="Laura" age="12"/>
        

      </div>
    );
  }
}

//person component
function Person(props) {
  return (
    <div class="person">
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}


ReactDOM.render(
  <GettingStarted />,
  document.getElementById('root')
);