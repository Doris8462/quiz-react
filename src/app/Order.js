import React, { Component } from "react";
import './order.less'

export default class Order extends Component {
    state = {
        orders: [
            { id:1,name: "可乐", price: 1, number: 2, unit: "瓶" },
            { id:2,name: "可乐2", price: 1, number: 1, unit: "瓶" },
            { id:3,name: "可乐3", price: 1, number: 5, unit: "瓶" },
        ],
    };
    handleRemode=(id)=>{
        let deletIndex=0;
        for(let i=0;i<this.state.orders.length;i++){
            if(id===this.state.orders[i].id)
            deletIndex=i;
        }
        this.setState({
            orders:this.state.orders.splice(deletIndex,1),
        });
    }
    render() {
        return (<div className="orders">
                <table className="content">
                    <thead>
                        <tr>
                            <td>名字</td>
                            <td>单价</td>
                            <td>数量</td>
                            <td>单位</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    {this.state.orders.map((item) => {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.number}</td>
                                <td>{item.unit}</td>
                                <td><button className="deletebtn" onClick={() => this.handleRemode(item.id)}>删除</button></td>
                            </tr>
                        );
                    })}
                </table>

        </div>);
    }
}
