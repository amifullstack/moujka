import React, { Component } from 'react';

class ProgressDispatch extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { incrementValue, decrementValue } = this.props;
    return(
      <div>        
          <button onClick={incrementValue}>Increment</button>
          <button onClick={decrementValue}>Decrement</button>
        
      </div>
    )
  }
}

export default ProgressDispatch;