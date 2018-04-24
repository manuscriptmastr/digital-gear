import React, { Component } from 'react';

let App = ({ match }) =>
  <div className="App">You asked for {match.path}</div>

export default App;
