
import React, { Component } from 'react'
import './App.css';
import Tooltip from './Tooltip'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            hover: false,
            // position:"top",
         }
    }


    // newPosition = () => {
    //     this.setState({ position: document.getElementById("position").value });
    //     console.log(this.state.position);

    // }


    handleMouseIn() {
        this.setState({ hover: true })
    }

    handleMouseOut() {
        this.setState({ hover: false })
    }

 

    render() {
        const tooltipStyle = {
            display: this.state.hover ? 'block' : 'none'
        }
        
     

        return (

            <div className="buttonClass" >
                {/* <select id="position" defaultValue="this.state.position" onChange={this.newPosition}>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>

                </select> */}
            
                <input type="button" class="button" onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}value="on hover "></input>
                <div style={tooltipStyle}  ><Tooltip position={this.props.pos}/></div>


            </div>
        );
    }
}

export default Button