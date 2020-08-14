import React, { Component } from 'react';
import './addproduct.less';

export default class AddProduct extends Component {
    state = {
        name: '',
        price: '',
        unit: '',
        picture: '',
    }

    handleChange = (field, event) => {
        this.setState({
            [field]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        console.log(JSON.stringify(this.state));
        event.preventDefault();
        alert(this.state.name);
    };

    render() {
        return (
            <div>
                <h2>添加商品</h2>
                <form onSubmit={this.handleSubmit} className="addProduct">
                    <ul className="addProductUl">
                        <li>
                            <label htmlFor="prname"><span>*</span>名称：</label>
                            <input id="prname" placeholder="名称" type="text"
                                value={this.state.name}
                                onChange={(event) => this.handleChange("name", event)} />
                        </li>
                        <li>
                            <label htmlFor="price"><span>*</span>价格：</label>
                            <input id="price" placeholder="价格" type="text"
                                value={this.state.price}
                                onChange={(event) => this.handleChange("price", event)} />
                        </li>
                        <li>
                            <label htmlFor="unit"><span>*</span>单位：</label>
                            <input id="unit" placeholder="单位" type="text"
                                value={this.state.unit}
                                onChange={(event) => this.handleChange("unit", event)} />
                        </li>
                        <li>
                            <label htmlFor="picture"><span>*</span>图片：</label>
                            <input id="picture" placeholder="URL" type="text"
                                value={this.state.picture}
                                onChange={(event) => this.handleChange("picture", event)} />
                        </li>
                    </ul>
                    <input
                        className="submitButtom"
                        type="submit"
                        value="提交"
                        disabled={
                            !this.state.name ||
                            !this.state.price ||
                            !this.state.unit ||
                            !this.state.picture
                        }
                    />
                </form>
            </div>
        )
    }
}
