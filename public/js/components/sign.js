import React from "react";
import Nav from './nav'

class Sign extends React.Component {
    render() {
        return <div>
            <Nav/>
            <div id="signStyle">
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="glyphicon glyphicon-user" ></i></span>
                    <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                </div>
                <br/>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="glyphicon glyphicon-eye-close" ></i></span>
                    <input type="password" className="form-control" placeholder="Password" aria-describedby="basic-addon1"/>
                </div>
                <br/>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="glyphicon glyphicon-eye-close" ></i></span>
                    <input type="password" className="form-control" placeholder="Confirm Password" aria-describedby="basic-addon1"/>
                </div>
                <br/>
                <button type="button" class="btn btn-default" aria-label="Left Align">
                    <span class="glyphicon glyphicon-align-left" aria-hidden="true">注册</span>
                </button>
                <button type="button" class="btn btn-default" aria-label="Left Align">
                    <span class="glyphicon glyphicon-align-left" aria-hidden="true">取消</span>
                </button>
            </div>
        </div>
    }
}

export default Sign;