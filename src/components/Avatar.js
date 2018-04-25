import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let defaultImg = '/assets/icon-user.svg';

let Avatar = ({ currentUser: { profileImg = defaultImg, username } }) =>
  <Link to="/profile">
    <h1>Welcome, {username}!</h1>
    <img src={profileImg} className="avatar" alt="avatar" />
  </Link>

let mapStateToProps = ({ currentUser }) => ({ currentUser });

export default connect(mapStateToProps)(Avatar);