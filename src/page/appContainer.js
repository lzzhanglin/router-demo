import React, { Component }from 'react';
import {Button, Layout, message} from 'antd'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import MySider from '../common/mySider';
import MyHeader from '../common/myHeader';
import MyFooter from '../common/myFooter';
import PageOne from '../page/pageOne'
import PageTwo from '../page/pageTwo'
import PageThree from '../page/pageThree'
import PageFour from '../page/pageFour'
import Dashboard from '../page/dashboard'
import auth from '../router/auth'

const {  Content } = Layout;
class AppContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            username:window.sessionStorage.username,
            password:window.sessionStorage.password,
        }
        this.signOut = this.signOut.bind(this)
        
    }
    signOut = ()=>{
        
        auth.logout(function() {
            window.sessionStorage.username=undefined
            window.sessionStorage.password=undefined
        })
        this.props.history.push("/login")
        message.warn("退出登录")
    }
    render(){
        console.info("appContainer 里的 render函数")
        return(
           <Router>

<Layout style={{height:900}}>
    <MySider></MySider>
     
      <Layout>
          <MyHeader signOut={this.signOut}>
          <Button type="primary" onClick={this.signOut}>sign out</Button>
          </MyHeader>

      
        <Content style={{background: 'white',color: '#fff',minHeight: 120}}>
          <p>hhh</p>
            <Route exact path="/" component={Dashboard} />
            <Route path="/pageOne"  exact component={PageOne} />
            <Route path="/pageTwo"   component={PageTwo} />
            <Route path="/pageThree"   component={PageThree} />
            <Route path="/pageFour"   component={PageFour} />
        </Content>
        <MyFooter></MyFooter>
     
      </Layout>
    </Layout>


 
              
                
                
    </Router>
        )
        }
            
        
    
}
export default AppContainer