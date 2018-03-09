import React, { Component } from 'react';

// Component
import ProgressDispatchContainer from './ProgressDispatchContainer/ProgressDispatchContainer';

// CSS
import './Progress.css';

class Progress extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props)
    return(
      <div>
        <ProgressDispatchContainer />
       {/* {this.props.value} */}
       <div className="loader" style={this.props.value > 0 ? {display: 'block'}: { display: 'none'}}>
        Loading...!
       </div>
      </div>
    )
  }
}

export default Progress;