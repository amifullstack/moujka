import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;
    return(
      <div>
        <h3>Profile Page!!! Wlelcome {match.params.id}</h3>
      </div>
    );
  }
}

export default Profile;