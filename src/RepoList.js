import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, FormControl, ListGroup } from 'react-bootstrap';
import RepoRow from './RepoRow';

class RepoList extends Component {
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
            <FormGroup controlId="formControlsSelect">
              <FormControl componentClass="select" placeholder="select">
                <option value="select">Most recent first</option>
                <option value="other">Oldest first</option>
              </FormControl>
            </FormGroup>
          </Col>
        </Row>

        

        <p>Found {this.props.repos.length} repositories. Showing top {this.props.top}.</p>
        
        <ListGroup className="text-left">
          {rows}
        </ListGroup>
      </Grid>
    );
  }
}

export default RepoList;
