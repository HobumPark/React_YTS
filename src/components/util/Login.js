import '../../css/util/Login.css';
import {Component} from 'react';

class Login extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    loginAction=()=>{
        alert('로그인 액션!')
    }

    render(){
        return(
            <div id='login-wrap'>
                <input type='text' placeholder='Username or Email'/>
                <input type='password' placeholder='Password'/>
                <button onClick={this.loginAction}>Login</button>
            </div>
        )
    }
}

export default Login;