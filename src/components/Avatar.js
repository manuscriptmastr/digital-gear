import React from 'react';

let defaultSrc = '/assets/icon-user.svg';

let Avatar = ({ src = defaultSrc }) =>
  <img src={src} />

export default Avatar;