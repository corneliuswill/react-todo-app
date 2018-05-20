import React, { Component } from 'react';
import logo from './todo-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './css/app.css';
import {Route, Switch} from 'react-router-dom';
import Login from './routes/login.jsx';
import ForgetPasswd from './routes/forget-passwd.jsx';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/forget-passwd' component={ForgetPasswd}/>
      
    </Switch>
    );
  }
}

export default App;
