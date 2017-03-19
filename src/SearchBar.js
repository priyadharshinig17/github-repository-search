import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Github username</label>
          <input type="text" placeholder="Enter username here" />
          <button>GO</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
