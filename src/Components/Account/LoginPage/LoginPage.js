import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("We're workign hard to make you as our user!! Once we Go live in production Get back to you. Thnx")
  }

  render() {
    return(
      <div>
        <div className="container">
          <h1>Login</h1>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <ul className="flex-outer">
              <li>
                <label>User Name</label>
                <input type="text" placeholder="Enter username"/>
              </li>
              <li>              
                <label>Password</label>
                <input type="password" placeholder="Enter password"/>
              </li>
              <li>
                <button type="submit">Log In</button>
              </li>              
            </ul>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage;