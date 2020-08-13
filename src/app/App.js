import React, {Component} from 'react';
import './app.less';
import Header from '../app/Header';
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
