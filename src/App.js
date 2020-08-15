import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = ({
      val : 0
    })

    this.onClickUp = this.onClickUp.bind(this);
    this.onClickDown = this.onClickDown.bind(this);
  }

  onClickDown(){
    this.setState({
      val: this.state.val - 1
    })
  }

  onClickUp(){
    this.setState({
      val: this.state.val + 1
    })
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.onClickDown} id="subBtn">-</button>
        <p id="numberPreview">{this.state.val}</p>
        <button onClick={this.onClickUp} id="plusBtn">+</button>
      </div>
    );
  }
}

export default App;
