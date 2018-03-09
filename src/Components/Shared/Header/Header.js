import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// CSS
import './Header.css'

const renderLogin = () => {
  return(  
      
        <Link to='/login'>Log In</Link>
      
    
  )
}

const renderGreeting = name => <Link to="/account/profile/Sanjay">Welcome, {name}</Link>

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoggedIn, username } = this.props.authentication;
    console.log(username)
    
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
                <li>
                  {/* <Link to="/login">Login</Link> */}
                  { isLoggedIn ? renderGreeting(username) : renderLogin() }
                </li>
              </ul>         
        </header>      
    );
  }
}

export default Header;