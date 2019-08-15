import React, { Component }from 'react';
import {Input, Icon, Button,message} from 'antd'
import auth from '../router/auth'


class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
        this.handleUsernameChange=this.handleUsernameChange.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
        this.handleSignIn=this.handleSignIn.bind(this)
        
    }
    handleSignIn=()=>{
        const _this = this
        auth.login(function(){
        window.sessionStorage.username=_this.state.username
        window.sessionStorage.password=_this.state.password
      });
      message.success("登录成功")

        this.props.history.push("/")

    }
    handleUsernameChange=(event)=>{
        const target = event.target;
        const value =  target.value;
        this.setState({
          username: value
        });
    
    }
    handlePasswordChange=(event)=>{
        const target = event.target;
        const value =  target.value;
        this.setState({
          password: value
        });
    
    }
    componentDidMount() {
        // console.log("login 里的 componentDidMount函数")
        // const username = window.sessionStorage.username
        // const password = window.sessionStorage.password
        // console.log("用户名密码"+username+"  ---  "+password)

        // if(username !== undefined && password !== undefined && username !== '' && password !== '' && username === password){
        //   this.props.history.push("/");
        // }
      }
    render(){
        // console.log("login 里的render函数")

            return(
                <div   style={{textAlign:'center'}}>
                
                <p style={{textAlign:'center',marginTop:50}}>login page</p>
                <div>
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    placeholder="username"
                    style={{width:300}}
                    onChange={this.handleUsernameChange}/>
                </div>
                <div>
                <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    placeholder="password"
                    style={{marginTop:30,width:300}}
                    onChange={this.handlePasswordChange}/>
                </div>
                <div>
                    <Button 
                    type='primary'
                    style={{marginTop:30}} 
                    onClick={this.handleSignIn}>sign in</Button>
                    <Button 
                    style={{marginLeft:30,marginTop:30}} >sign up</Button>
                </div>
                </div>
            )
    }
        
            
        
    
}
export default Login