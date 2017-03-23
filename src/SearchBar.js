import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.handleSearchTextInputChange = this.handleSearchTextInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event.target.value);
  }

  handleSearchTextInputChange(event) {
    this.props.onSearchTextInput(event.target.value);
  }

  render() {
    return (
        <Form inline onSubmit={this.handleSubmit} className="text-left container-fluid">
          <FormGroup controlId="formInlineName">
            <ControlLabel>GitHub Username</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="Enter username here" value={this.props.searchText} onChange={this.handleSearchTextInputChange} />
          </FormGroup>
          {' '}
          <Button type="submit" bsStyle="primary">GO</Button>
        </Form>
    );
  }
}

export default SearchBar;
