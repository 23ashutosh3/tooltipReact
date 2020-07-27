 
import React, { Component } from 'react'
import './App.css';

class Tooltip extends Component {
   

    Classname(temp) {
        // const prefix = 'dialogBox'

        switch (temp) {
            case 'left': return 'box-left'
            case 'right': return 'box-right'
            case 'top': return 'box-top'
            case 'bottom': return  'box-bottom'
            default: return  'box-top'
        }
    }
    

    render() {
      
        // { this.Classname(this.props.position) }
        return (
            <div className={this.Classname(this.props.position)}>
            <h4>hii there !!</h4>
            </div>
        );
    }
}

export default Tooltip