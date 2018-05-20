import React,  { Component } from 'react';
import './login-form.css';
import {Link} from 'react-router-dom';

export default class LoginForm extends Component {
    render() {
        return (
            <form className="form-signin">

            

                <div className="form-input">
                <input type="email" class="form-control" name="email" placeholder="Email"/>
                </div>

                <div className="form-input">
                <input type="password" class="form-control" name="password" placeholder="Password"/>
                </div>   
               
                <div className="form-input checkbox text-center">
                <label htmlFor="remember-pwd"><input type="checkbox"/> Remember Password</label>
                </div>

                <div className="actions">
                <button type="button" className="btn btn-primary btn-lg btn-block">Sign In</button> 
                </div>

                <div className="forgot-pwd text-center">
                <Link to="/forget-passwd"> Forgot your passsword?</Link>
                </div>

                <div className="seperator"></div>

                <div className="signup text-center">
                <a href="#">Sign Up</a>
                </div>

            </form>   
        )
    }
}