import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    return (
      <section name="Home">
        <h1>Post</h1>
        <Link to="/">Go to Home</Link>
        <Link to="/random">Go to Random</Link>
      </section>
      )
  }
}

export default Profile;
