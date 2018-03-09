import React, { Component } from 'react';

// CSS
class Spinner extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
   const { Progress } = this.props
    return(
      <div className="loader" style={Progress > 0 ? {display: 'block'} : { display: 'none'}}>
      ...Loading
      </div>
    )
  }
}

export default Spinner;
