import React, { Component } from 'react';
import { ListGroupItem, Grid, Row, Col } from 'react-bootstrap';

class RepoRow extends Component {
  render() {
    return (
      <ListGroupItem header={this.props.repo.name} href={this.props.repo.url}>
        <Grid>
          <Row>
            <Col md={12}>{this.props.repo.description}</Col>
          </Row>
          <Row>
            <Col md={6} mdPush={6}><small>Updated {this.props.repo.lastUpdate} ago</small></Col>
          </Row>
        </Grid>
      </ListGroupItem>
    );
  }
}

export default RepoRow;
