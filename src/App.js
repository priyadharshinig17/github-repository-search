import React, { Component } from 'react';
import GitHubUserRepos from './GitHubUserRepos';
import logo from './logo.svg';
import './App.css';

var REPOS = [
  {description: 'Lorem ipsum...', url: 'http://google.ca', lastUpdate: '33 minutes', name: 'Football'},
  {description: 'All work and no play...', url: 'http://lapresse.ca', lastUpdate: '10 days', name: 'Baseball'},
  {description: 'J\'ai du bon tabac...', url: 'http://localhost', lastUpdate: '5 seconds', name: 'Basketball'},
  {description: 'Alouette, gentille alouette...', url: 'http://localhost', lastUpdate: '42 days', name: 'iPod Touch'},
  {description: 'The best phone in the entire world...', url: 'http://localhost', lastUpdate: '4 hours', name: 'iPhone 5'},
  {description: 'The best tablet in the entire world...', url: 'http://localhost', lastUpdate: '3 minutes', name: 'Nexus 7'}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <GitHubUserRepos repos={REPOS} top={10} />
      </div>
    );
  }
}

export default App;
