import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProgressDispatch from './ProgressDispatch';


import { incrementValue, decrementValue } from '../../../Actions/index';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    incrementValueAction: incrementValue,
    decrementValueAction: decrementValue
  }, dispatch)
};

const ProgressDispatchContainer = state => {
  const { incrementValueAction, decrementValueAction } = state;
  return (
    <ProgressDispatch
      incrementValue={incrementValueAction}
      decrementValue={decrementValueAction}
      />
  );
}

export default connect(null, mapDispatchToProps)(ProgressDispatchContainer);