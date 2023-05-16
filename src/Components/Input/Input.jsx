import React from "react";
import "./Input.css"

class Input extends React.Component {
    
    render() {
        const {value, onChange} = this.props; 
        
      return(
        <input
        className="input"
        type="text"
        value={value}
        onChange={onChange} 
        />
      );
    }
  }

export default Input;