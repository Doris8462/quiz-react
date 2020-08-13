import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./calculator.less";
export default class Calculator extends Component {
  state = {
    buttons: [
      "+",
      "-",
      "*",
      "7",
      "8",
      "9",
      "4",
      "5",
      "6",
      "1",
      "2",
      "3",
      "0",
      "clear",
      "=",
    ],
    result: 0,
    inputString: "",
  };

  handleChange = () => {
    const symbol = String(event.target.id);
    if (symbol === "clear")
      this.setState({
        inputString: "",
      });
    else if (symbol === "=") {
      this.setState({
        inputString: eval(this.state.inputString),
      });
    } else
      this.setState({
        inputString: this.state.inputString + symbol,
      });
  };

  render() {
    return (
      <div className="content">
        <h1>在线计算器</h1>
        <div className="calculator">
          <input
            className="display"
            type="text"
            value={this.state.inputString}
          />
          <div className="buttons">
            {console.log(this.state.buttons)}
            {this.state.buttons.map((item) => {
              return (
                <button id={item} onClick={this.handleChange}>
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <Link className="homeLink" to="/">
          回到主页
        </Link>
      </div>
    );
  }
}
