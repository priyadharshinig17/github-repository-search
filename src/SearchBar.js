import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTextInputChange = this.handleSearchTextInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleSearchTextInputChange(event) {
    this.props.onSearchTextInput(event.target.value);
  }

  render() {
    return (
        <Form inline onSubmit={this.handleSubmit}>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Github username</ControlLabel>
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
