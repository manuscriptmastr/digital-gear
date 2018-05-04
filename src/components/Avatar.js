import React from 'react';
import './Avatar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let defaultImg = '/assets/icon-user.svg';

let Avatar = ({ currentUser: { profileImg = defaultImg, username } }) =>
  <Link className="avatar" to={`/users/${username}`}>
    <img src={profileImg} className="avatar-image" alt="avatar" />
  </Link>

let mapStateToProps = ({ currentUser }) => ({ currentUser });

export default connect(mapStateToProps)(Avatar);