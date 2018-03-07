import React, { Component } from 'react';


// Components
import ProgressContainer from '../Progress/ProgressContainer';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    const { incrementValue, decrementValue } = this.props;
    return(
      <div>
        <ProgressContainer />
        <button onClick={ incrementValue}>Increment</button>
        <button onClick={ decrementValue}>Decrement</button>
      </div>
    )
  }
}

export default Home;