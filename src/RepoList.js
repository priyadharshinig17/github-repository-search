import React, { Component } from 'react';
import RepoListHeader from './RepoListHeader';
import RepoRow from './RepoRow';

class RepoList extends Component {
  render() {
    var rows = [];
    this.props.repos.forEach(function(repo) {
      rows.push(<RepoRow repo={repo} key={repo.name} />);
    });
    return (
      <div>
        <h4>Repositories</h4>

        <select>
          <option>Most recent first</option>
          <option>Oldest first</option>
        </select>

        <p>Found {this.props.repos.length} repositories. Showing top {this.props.top}.</p>
        
        <div>
          {rows}
        </div>
      </div>
    );
  }
}

export default RepoList;
