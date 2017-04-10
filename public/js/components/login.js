import React from "react";

class Login extends React.Component{
    render(){
        console.log('sussed');
       return <div>
            <form>
                用户名：<input type="text"/><br/>
                密码：<input type="text"/><br/>
                <button>登录</button>
            </form>
        </div>
    }
}

export default Login;