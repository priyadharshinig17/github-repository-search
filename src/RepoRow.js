import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class RepoRow extends Component {
  render() {
    return (
      <ListGroupItem header={this.props.repo.name} href={this.props.repo.html_url}>
        {this.props.repo.description}<br />
        <span className="small">Updated {this.props.repo.lastUpdate} ago</span>
      </ListGroupItem>
    );
  }
}

export default RepoRow;
