import React, { Component } from "react";
import plusImg from './plus.svg';
import minusImg from './minus.svg';
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
        <div className="subBtn">
          <img onClick={this.onClickDown} src={minusImg} alt="minusImg"></img>
        </div>
        <p id="numberPreview">{this.state.val}</p>
        <div className="plusBtn">
          <img onClick={this.onClickUp} src={plusImg} alt="plusImg"></img>
        </div>
      </div>
    );
  }
}

export default App;
