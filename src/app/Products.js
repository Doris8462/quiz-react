/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import Product from './Product';
import './products.less'

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
          {
              name:'可乐',
              price:10
          },
          {
            name:'可乐',
            price:10
        }
        , {
            name:'可乐',
            price:10
        }
      ],
 
    };
  }

  addCategory(list) {
    return (
        <div className="productsList">
          {list.map((value, key) => {
            return (
              <div className="productItem">
                <Product
                  key={key}
                  category={value.price}
                  price={value.price}
                  name={value.name}
                ></Product>
              </div>
            );
          })}
        </div>
    );
  }

  componentDidMount() {
    fetchJsonp('http://localhost:3000/products')
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        this.setState({
          list: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="Products">
        {this.addCategory(this.state.productList)}
      </div>
    );
  }
}


export default Products;
