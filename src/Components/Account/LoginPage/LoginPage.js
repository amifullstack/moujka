import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="login-form">
          <h1>Login</h1>
          <form>
            <label>User Name</label>
            <input type="text" placeholder="Enter username"/>
            <label>Password</label>
            <input type="password" placeholder="Enter password"/>
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage;