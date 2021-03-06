import React from "react";
import "./style.css";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <hr className="line" />
        <h1 className="search-heading">Search for a Card</h1>
        <div className="control tile is-6 search-form ">
          <input className="input" type="name" placeholder="Search Players" />
          <button id="submit-button" type="submit" className="button">
            <strong>Search</strong>
          </button>
        </div>
        <hr className="line" />
      </div>
    );
  }
}

export default SearchForm;
