import styled from "styled-components"
import React from 'react'
// import "./Person.css"

const StyledDiv = styled.div`
        width: 60%;
        margin: 16px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;
        
        @media (min-width: 500px) {
          width: 450px;
        }
      `;

const person = (props) => {
  // // Lecture 69 - Using Radium for Media Queries
  // const componentStyle = {
  //   "@media (min-width: 500px)": {
  //     width: '450px',
  //   }
  // };
  return (
      // <div className={"Person"} style={componentStyle}>
      <StyledDiv>
        <p onClick={props.clickEventHandler}>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.nameChangeHandler} value={props.name}/>
      </StyledDiv>
  )
};

export default person;