import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// CSS
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      
        <header>           
          <h1 className="logo"><a href="/">Mouj-Ka</a></h1>            
              <ul className="main-nav">                
                <li>                  
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/account/profile/sanjay123">Profile</Link> 
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>         
        </header>      
    );
  }
}

export default Header;