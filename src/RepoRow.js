import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import TimeAgo from 'react-timeago';

class RepoRow extends Component {
  render() {
    return (
      <ListGroupItem header={this.props.repo.name} href={this.props.repo.html_url}>
        {this.props.repo.description}<br />
        <span className="small">Updated <TimeAgo date={this.props.repo.pushed_at} /></span>
      </ListGroupItem>
    );
  }
}

export default RepoRow;
