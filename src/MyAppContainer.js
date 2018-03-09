import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import App from './App';

// Actions
import { sessionCheckFailure, sessionCheckSuccess } from './Actions/authentication';


class MyAppContainer extends Component {
  constructor(props) {
    super(props);

    this.checkSession = this.checkSession.bind(this);
  }

  componentWillMount() {
    this.checkSession();
  }

  async checkSession() {    
    const { sessionCheckSuccessAction, sessionCheckFailureAction } = this.props;    
    // Contact the API
    await fetch(
      // Where to connect 
      '/api/authentication/checksession',
      // What to send
      {
        method: 'GET',
        credentials: 'same-origin',
      },
    )
    .then ((respone) => {
      if (respone.status === 200) {
        return respone.json();
      }
      else {
        return null;
      }
    })
    .then ((json) => {
      if (json.username) {
        sessionCheckSuccessAction(json)
      } else {
        sessionCheckFailureAction()
      }
    })
    .catch((error) => {
      sessionCheckFailureAction(error)
    });
  }
  
  render() {
  // console.log(this.props)  
  return(
    <App state={this.props.state}/>
  )
}
}

const mapStateToProps = state => {  
  return {
    state: state
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    sessionCheckFailureAction: sessionCheckFailure,
    sessionCheckSuccessAction: sessionCheckSuccess,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAppContainer);
