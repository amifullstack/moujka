import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };    
  }

  // Update state as e-mail value change
  handleEmailChange(e) {
    this.setState({ email: e.target.value });    
  }

  // Update value as password value change
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });    
  }

  compileFormData(e) {
    e.preventDefault();    
    const { loginFunction } = this.props;    
    const formData = this.state;
    // pass state to loginfunction
    loginFunction(formData);
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
          <form>
            <ul className="flex-outer">
              <li>
                <label>User Name</label>
                <input 
                  type="text"
                  name="email"
                  placeholder="Enter username"
                  id="exampleEmail"
                  value={this.state.email}
                  onChange={(e) => this.handleEmailChange(e)}
                />
              </li>
              <li>              
                <label>Password</label>
                <input 
                  type="password" 
                  placeholder="Enter password"
                  name="password"
                  id="examplepassword"
                  value={this.state.password}
                  onChange={(e) => this.handlePasswordChange(e)}
                />
              </li>
              <li>
                <button type="submit" onClick={(e) => this.compileFormData(e)}>Log In</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage;