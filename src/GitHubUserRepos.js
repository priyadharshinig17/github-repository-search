import React, { Component } from 'react';
import SearchBar from './SearchBar';
import RepoList from './RepoList';

class GitHubUserRepos extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <RepoList repos={this.props.repos} top={this.props.top} />
      </div>
    );
  }
}

export default GitHubUserRepos;
