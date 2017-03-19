import React, { Component } from 'react';

class RepoRow extends Component {
  render() {
    return (
      <div>
        <a href={this.props.repo.url}>
          {this.props.repo.name}
        </a>
        <br />
        <p>{this.props.repo.description}</p>
        <small>Updated {this.props.repo.lastUpdate} ago</small>
      </div>
    );
  }
}

export default RepoRow;
