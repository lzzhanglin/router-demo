import React,{Component} from 'react';
import {BrowserRouter as Router,Switch, Route, Link, Redirect} from 'react-router-dom'
import Login from './page/login.js'
import AppContainer from './page/appContainer'
import {PrivateRoute} from './router/privateRoute.js'
import 'antd/dist/antd.css'

class App extends Component {
  
  
  componentDidMount(){
    const username = window.sessionStorage.username
    const password = window.sessionStorage.password
    console.log("app 里的 componentDidMount函数")
  }

  render(){
    console.log("app 里的render函数")
      return (
        <Router>
          <Switch>
          <PrivateRoute exact path="/" component={AppContainer}/>
          <Route path="/login" component={Login}/>
          {/* 标签式重定向 */}
          <Redirect from="/" to="/" component={AppContainer}/>
          </Switch>
         
        </Router>
      );
   
  }
 
}

export default App;
