/* eslint-disable no-undef */
import React, { Component } from 'react';
import './product.less';

export default class Product extends Component {
  render() {
    return (
      <div>        
        <img
          className="productPhoto"
          src={require('../assets/product.jpg')}
          alt="productPhoto"
        ></img>
        <span className="productName">{this.props.name}</span>
        <span className="productPrice">单价：{this.props.price}元</span>
        <button className="addbtn">+</button>
      </div>
    );
  }
}
