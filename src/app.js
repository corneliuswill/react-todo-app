import React, { Component } from 'react';
import logo from './todo-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './css/app.css';
import './css/core-ui.css';
import LoginForm from './components/login-form/login-form';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="main">
              <div className="product-branding text-center">
                <div className="logo">
                  <div className="app-icon">
                    <img src={logo}/>
                  </div>
                </div>
                <h1 className="product-name">My Todo</h1>
              </div>
              <LoginForm/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;