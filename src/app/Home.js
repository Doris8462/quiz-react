import React from "react";

import "./home.less";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="section1">
        <div className="title">在线实用工具</div>
      </div>
      <div className="section2">
        <div className="calculatorIcon">
          <img src={require("../images/calculator.png")} className="icon"></img>
          <Link to="/calculator">计算器</Link>
        </div>
        <div className="timerIcon">
          <img src={require("../images/timer.png")} className="icon"></img>
          <Link to="/timer">倒计时器</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
