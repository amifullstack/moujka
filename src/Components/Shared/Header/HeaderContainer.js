import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { incrementValue, decrementValue } from '../../../Actions/index';
import { logoutSuccess, logoutFailure } from '../../../Actions/authentication';

import Header from './Header';


class HeaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  async logUserOut() {
    const {
      decrementValueAction,
      incrementValueAction,
      logoutFailureAction,
      logoutSuccessAction,
    } = this.props;

    // turn on spinner
    incrementValueAction();

    // contact the api
    await fetch(
      // where to connect
      '/api/authentication/logout',
      // what to send
      {
        method: 'GET',
        credentials: 'same-origin',
      },
    )
    .then((response) => {
      if (response.status === 200) {
        return logoutSuccessAction();
      }
      else {
        return logoutFailureAction(`Error: ${response.status}`);
      }
    })
    .catch ((error) => {
      logoutFailureAction(error)
    });
    // Turn off spinner
    decrementValueAction();
  }

  render() {
    const { authentication } = this.props;
    return(
      <Header authentication={authentication} logUserOut={() => this.logUserOut()} />
    )
  }
}

// Dispatch
const mapDispatchToProps = disptach => {
  return bindActionCreators ({
    incrementValueAction: incrementValue,
    decrementValueAction: decrementValue,
    logoutSuccessAction: logoutSuccess,
    logoutFailureAction: logoutFailure,
  }, disptach);
}

export default connect(null, mapDispatchToProps)(HeaderContainer);
