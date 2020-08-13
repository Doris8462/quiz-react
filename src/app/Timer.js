import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./timer.less";
export default class Timer extends Component {
  state = {
    remainTime: "Start",
    setTime: "",
  };

  handleChange = () => {
    this.setState({
      setTime: event.target.value,
    });
  };
  handleStart = () => {
    this.setState({
      remainTime: this.state.setTime,
    });
    this.timer = setInterval(() => {
      {
        this.timeControl();
      }
    }, 1000);
  };

  timeControl = () => {
    if (Number(this.state.remainTime) > 0)
      this.setState({
        remainTime: this.state.remainTime - 1,
      });
    else
      this.setState({
        remainTime: "End",
      });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="content">
        <h1>在线倒计时器</h1>
        <div className="timer">
          <div className="setTime">
            <label htmlFor="inputTime">设置时间</label>
            <input
              type="text"
              id="inputTime"
              onChange={this.handleChange}
              value={this.state.setTime}
            />
            <button
              className="start"
              onClick={this.handleStart}
              disabled={this.state.setTime < 0}
            >
              Start
            </button>
          </div>
          <input
            type="text"
            className="displayInput"
            value={this.state.remainTime}
            onChange={this.timeControl}
          />
        </div>
        <Link className="homeLink" to="/">
          回到主页
        </Link>
      </div>
    );
  }
}
