import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, FormControl, ListGroup } from 'react-bootstrap';
import RepoRow from './RepoRow';

class RepoList extends Component {
  constructor(props) {
    super(props);

    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleSortChange(event) {
    this.props.onSortChange(event.target.value);
  }

  render() {
    if (!this.props.repos) {
      return null;
    }

    var rows = [];
    this.props.repos.forEach(function(repo) {
      rows.push(<RepoRow repo={repo} key={repo.name} />);
    });
    return (
      <Grid>
        <Row>
          <Col md={8}>Repositories</Col>
          <Col md={4}>
            <FormGroup>
              <FormControl componentClass="select" placeholder="select" onChange={this.handleSortChange}>
                <option value="desc">Most recent first</option>
                <option value="asc">Oldest first</option>
              </FormControl>
            </FormGroup>
          </Col>
        </Row>

        <p>Found {this.props.repos.length} repositories.
          {this.props.top && 
            <span>{' '}Showing top {this.props.top}.</span>
          }
        </p>
        
        <ListGroup className="text-left">
          {rows}
        </ListGroup>
      </Grid>
    );
  }
}

export default RepoList;
