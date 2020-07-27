import React, { Component } from 'react';
// import Tooltip from './Tooltip';
import Button from './Button'
import './App.css';

class  App extends Component {


  constructor(props)
  {
    super(props);
    this.state =
    {
      position:"top",
    }
  }

    newPosition=()=>
    {
      this.setState({ position: document.getElementById("position").value });

    }
  

  
  render()
  {
    

    return (
      <div className="buttonClass" >
         <select id="position" defaultValue="this.state.position" onChange={this.newPosition}>
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>

        </select>

        <div class="showToolTip"><Button  pos={this.state.position} /></div>



      </div>
    );
  }
  
}

export default App;
