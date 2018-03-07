import React, { Component } from 'react';
import 'whatwg-fetch';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementValue, decrementValue } from '../../../../Actions/index';

import LoginPage from '../LoginPage'

export class LoginPageContainer extends Component {
  constructor(props) {
    super(props);
  }

  async attemptLogIn(userData) {
    // console.log(userData)    
    const { incrementValueAction, decrementValueAction } = this.props;   

    // turn on spinner
    incrementValueAction();

    const loginResponse = await fetch (
      // where to connect
      '/api/authentication/login',
      // what to send
      {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
      },
    );
    console.log(loginResponse)

    // Turn off the spinner
    decrementValueAction();
  }

  render() {
    return(
      <div>
        <LoginPage loginFunction={(credentials) =>this.attemptLogIn(credentials)} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    incrementValueAction: incrementValue,
    decrementValueAction: decrementValue,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginPageContainer)