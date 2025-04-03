import '../../css/util/Register.css';
import {Component} from 'react';

class Register extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    registerAction=()=>{
        alert('회원가입 액션!')
    }

    render(){
        return(
            <div id='register-wrap'>
                <input type='text' placeholder='Username'/>
                <input type='text' placeholder='E-Mail (no confirmation needed)'/>
                <input type='password' placeholder='Password'/>
                <input type='password' placeholder='Confirm Password'/>
                <button onClick={this.registerAction}>Register</button>
            </div>
        )
    }
}

export default Register;