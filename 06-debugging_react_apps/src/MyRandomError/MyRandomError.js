import React from "react";

class MyRandomError extends React.Component{
  render(){
    const rnd = Math.random();

    if(rnd > 0.7){
      throw new Error("Intentionally thrown error, 30% chance");
    }

    return(
        <div>
          <h1>Random Error did not happen</h1>
          <p>please reload the page</p>
        </div>
    )
  }
}

export default MyRandomError;