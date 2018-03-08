import React, { Component } from 'react';
import 'whatwg-fetch';
import { Redirect } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Reducers-action
import { incrementValue, decrementValue } from '../../../../Actions/index';
import { loginAttempt, loginSuccess, loginFailure } from '../../../../Actions/authentication';


import LoginPage from '../LoginPage'

export class LoginPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    }
  }

  // this is where you get function via props of--> store --> reducers
  async attemptLogIn(userData) {
    // console.log(userData)    
    const {
      incrementValueAction, 
      decrementValueAction,
      loginAttemptAction,
      loginSuccessAction,
      loginFailureAction,

     } = this.props;

    // turn on spinner
    incrementValueAction();

    // register that login attempt is made
    // This will change isLogginIn flase->true
    loginAttemptAction();

    // const loginResponse = 
    await fetch (
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
    )
    .then((response) => {
      console.log(response)
      if (response.status === 200) {
        return response.json();
      }
      return null;
    })
    .then((json) => {
      if(json) {
        loginSuccessAction(json);
        this.setState({ redirect: true });
      } else {
        loginFailureAction(new Error('Authentication Faild'));
      }
    })
    .catch((error) => {
      loginFailureAction(new Error(error));
    });
    // console.log(loginResponse)

    // Turn off the spinner
    decrementValueAction();
  }

  render() {
    // return(
    //   <div>
    //     <LoginPage loginFunction={(credentials) =>this.attemptLogIn(credentials)} />
    //   </div>
    // )
    const { redirect } = this.state;
    if (redirect) {
      return (
        <Redirect to = "/" />
      );
    }
    else {
    return (
      <div>
        <LoginPage loginFunction={(credentials) => this.attemptLogIn(credentials)} />
      </div>
    )
  }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    incrementValueAction: incrementValue,
    decrementValueAction: decrementValue,
    loginAttemptAction: loginAttempt,
    loginSuccessAction: loginSuccess,
    loginFailureAction: loginFailure,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginPageContainer)