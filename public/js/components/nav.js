import React, {Component} from "react";
import { browserHistory } from 'react-router'

const Nav = React.createClass({
    Login(){
        browserHistory.push("/login")
    },
    Sign(){
        browserHistory.push('/sign')
    },
    render: function () {
        return <div id="navStyle">
            <button onClick={this.Login.bind(this)}>登录</button>
            <button onClick={this.Sign.bind(this)}>注册</button>
        </div>

    }
});
export default Nav;