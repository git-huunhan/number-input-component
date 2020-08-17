import React, { Component } from "react";
import PropTypes from 'prop-types';

class Input extends Component {
  render(){
    const { input } = this.props;

    return(
      <p id="numberPreview">{input}</p>
    );
  }
}

Input.propTypes = {
  input: PropTypes.number
}

export default Input;