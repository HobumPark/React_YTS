import '../../css/util/MemberWrap.css';
import {Component} from 'react';
import Login from '../../components/util/Login.js';
import Register from '../../components/util/Register.js';

class MemberWrap extends Component{
    constructor(props){
        super(props)
        this.state={
            isLogin:true,
            isRegister:false,
        }
    }

    loginPage=()=>{
        this.setState({
            isLogin:true,isRegister:false
        })
    }

    registerPage=()=>{
        this.setState({
            isLogin:false,isRegister:true
        })
    }

    render(){
        const {isLogin}=this.state
        return(
            <div id='member-wrap'>
                <div id='tab-btn'>
                    <button onClick={this.loginPage}>Login</button>
                    <button onClick={this.registerPage}>Register</button>
                </div>
                <div id='contents'>
                    {
                        isLogin==true? <Login/>:<Register/>
                    }
                    <span>
                        Forgot your password?
                    </span>
                </div>
            </div>
        )
    }
}

export default MemberWrap;