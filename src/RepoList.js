import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import RepoRow from './RepoRow';
import RepoListHeader from './RepoListHeader';

class RepoList extends Component {
  render() {
    if (!this.props.repos) {
      return null;
    }

    var rows = [];
    this.props.repos.slice(0, this.props.top).forEach(function(repo) {
      rows.push(<RepoRow repo={repo} key={repo.name} />);
    });
    return (
      <div>
        <RepoListHeader repos={this.props.repos} top={this.props.top} />

        <ListGroup className="text-left">
          {rows}
        </ListGroup>
      </div>
    );
  }
}

export default RepoList;
