import React, { Component } from 'react';


// Components
import Header from '../Shared/Header/Header';
import Profile from '../Account/Profile/Profile';
import Footer from '../Shared/Footer/Footer';
import ProgressContainer from '../Progress/ProgressContainer';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props)
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