import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Products from "./Products";
import Order from "./Order";
import AddProduct from "./AddProduct";
import "./header.less";
export default class Nav extends Component {
  render() {
    return (
      <div>
       <div className="header">
          <Link to="/products">商城</Link>
          <Link to="/order">订单</Link>
          <Link to="/addProducts">+添加商品</Link>
        </div>
        <Switch>
          <Route path="/order" component={Order} />
          <Route path="/addProducts" component={AddProduct} />
          <Route path="/products" component={Products} />
          <Redirect from='*' to='/products'></Redirect>
        </Switch>
      </div>
    );
  }
}
