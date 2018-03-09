import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home';

import { incrementValue, decrementValue } from '../../Actions/index';

const mapDispatchToProps = dispatch => {    
  return bindActionCreators({
    incrementValueAction: incrementValue,
    decrementValueAction: decrementValue
  }, dispatch)
};

const HomePageContainer = state => {
  const { incrementValueAction, decrementValueAction } = state;
  return(
    <Home
    incrementValue={incrementValueAction}
    decrementValue={decrementValueAction}
    />
  );
}

export default connect(null, mapDispatchToProps)(HomePageContainer);