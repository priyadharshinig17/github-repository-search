import React, { Component } from 'react';
import { Grid, Row, Col, FormControl } from 'react-bootstrap';

class RepoListHeader extends Component {
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

    return (
        <Grid fluid>
          <Row>
            <Col md={8} className="text-left">
              <h4>Repositories</h4>
            </Col>

            <Col md={4}>
              <FormControl componentClass="select" placeholder="select" onChange={this.handleSortChange}>
                <option value="desc">Most recent first</option>
                <option value="asc">Oldest first</option>
              </FormControl>
            </Col>
          </Row>

          <Row className="text-left">
            <Col md={12}>
                <p>Found {this.props.repos.length} repositories.
                {this.props.top && 
                  <span>{' '}Showing top {this.props.top}.</span>
                }
              </p>

            </Col>
          </Row>
        </Grid>
    );
  }
}

export default RepoListHeader;
