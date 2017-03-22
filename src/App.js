import React, { Component } from 'react';
import GitHubUserRepos from './GitHubUserRepos';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GitHub User Repositories</h2>
        </div>
        <div className="container">
          <GitHubUserRepos top={10} />
        </div>
      </div>
    );
  }
}

export default App;
