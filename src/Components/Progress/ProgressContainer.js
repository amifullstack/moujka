import React from 'react';
import { connect } from 'react-redux';
import Progress from './Progress';


const mapStateToProps = state => {
  return {value: state.Progress}
};

const ProgressContainer = ({ value }) => {
  return (
    <Progress value={value} />
  );
}

export default connect(mapStateToProps)(ProgressContainer);
