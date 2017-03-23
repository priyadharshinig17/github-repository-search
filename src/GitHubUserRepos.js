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
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getRepos(username){
    return axios.get('https://api.github.com/users/' + username + '/repos', {
        params: {
          sort: 'pushed',
          direction: this.state.sortDirection
        }
      });
  }

  updateRepos(response) {
    this.setState({
      repos: response.data
    })
  }

  handleSearchTextInput(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  handleSubmit() {
    this.getRepos(this.state.searchText).then(this.updateRepos.bind(this));
  }

  handleSortChange(direction) {
    this.setState({ sortDirection: direction }, () => {
      this.getRepos(this.state.searchText).then(this.updateRepos.bind(this));      
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

        <hr />
        
        <RepoList 
          repos={this.state.repos}
          top={this.props.top}
          onSortChange={this.handleSortChange}
        />
      </div>
    );
  }
}

export default GitHubUserRepos;
