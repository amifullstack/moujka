import React, { Component } from 'react';

// Component
import ProgressDispatchContainer from './ProgressDispatchContainer/ProgressDispatchContainer';

class Progress extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props)
    return(
      <div>
        <ProgressDispatchContainer />
       {this.props.value}
      </div>
    )
  }
}

export default Progress;