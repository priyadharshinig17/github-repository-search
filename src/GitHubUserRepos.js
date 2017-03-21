import React, { Component } from 'react';
import SearchBar from './SearchBar';
import RepoList from './RepoList';
import axios from 'axios';

class GitHubUserRepos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      repos: [],
      sortDirection: 'desc'
    };

    this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleSearchTextInput(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  handleSubmit() {
    axios.get('https://api.github.com/users/' + this.state.searchText + '/repos', {
        params: {
          sort: 'pushed',
          direction: this.state.sortDirection
        }
      })
      .then(function (response) {
        this.setState({
          repos: response.data
        })
    }.bind(this));
  }

  handleSortChange(direction) {
    this.setState({
      sortDirection: direction
    });
  }

  render() {
    return (
      <div>
        <SearchBar 
          searchText={this.state.searchText}
          sortOrder={this.state.sortOrder}
          onSearchTextInput={this.handleSearchTextInput}
          onSubmit={this.handleSubmit}
        />
        <RepoList 
          repos={this.state.repos}
          top={this.props.top}
          searchText={this.state.searchText}
          sortOrder={this.state.sortOrder}
          onSortChange={this.handleSortChange}
        />
      </div>
    );
  }
}

export default GitHubUserRepos;
