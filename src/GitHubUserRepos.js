import React, { Component } from 'react';
import SearchBar from './SearchBar';
import RepoList from './RepoList';

class GitHubUserRepos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      sortOrder: false
    };
    this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
  }

  handleSearchTextInput(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  render() {
    return (
      <div>
        <SearchBar 
          searchText={this.state.searchText}
          sortOrder={this.state.sortOrder}
          onSearchTextInput={this.handleSearchTextInput}
        />
        <RepoList 
          repos={this.props.repos}
          top={this.props.top}
          searchText={this.state.searchText}
          sortOrder={this.state.sortOrder}
        />
      </div>
    );
  }
}

export default GitHubUserRepos;
