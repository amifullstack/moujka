import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// CSS
import './Header.css'

const renderLogin = () => <Link to='/login'>Log In</Link>  

class Header extends Component {
  constructor(props) {
    super(props);
  }


logOutClick = e => {
  e.preventDefault();  
  const { logUserOut } = this.props;  
  logUserOut();
}

renderGreeting = name => {
  return(
    <li>
  <Link to="/account/profile/Sanjay">Welcome, {name}</Link>
  <a href="/logout" onClick={ (e) => this.logOutClick(e)}>Log Out</a>
  
  </li>
  )} 

  

  render() {
    const { isLoggedIn, username } = this.props.authentication;
    console.log(isLoggedIn)
    
    return(
      
        <header>           
          <h1 className="logo"><a href="/">Mouj-Ka</a></h1>            
              <ul className="main-nav">                
                <li>                  
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/account/profile/Sanjay">Profile</Link> 
                </li>
                
                  {/* <Link to="/login">Login</Link> */}
                  { isLoggedIn ? this.renderGreeting(username) : renderLogin() }
                
              </ul>         
        </header>      
    );
  }
}

export default Header;