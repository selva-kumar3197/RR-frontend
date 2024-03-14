import React, { useState } from "react";
import axios from "axios";
import { Form, FormControl, ListGroup } from "react-bootstrap";

function SearchComponent({ image }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setLoading(true);
    setError(null);
    if (query.length > 3) {
      axios
        .get(`https://rr-api.realisticrealtors.com/api/rr/search?search=${query}`)
        .then((response) => {
          setSearchResults(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setError("An error occurred while fetching the search results.");
        });
    } else {
      setSearchResults([]);
      setLoading(false);
    }
  };

  return (
    <div className="col-md-12 rounded">
      <Form>
        <FormControl
          type="text"
          id="searchQuery"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <ListGroup className="mt-1">
          {searchResults.map((result) => (
            <ListGroup.Item
              key={result}
              action
              className="d-flex justify-content-between mv-header-link "
              onClick={(event) => {
                event.preventDefault();
                window.location.href = `/${result}`;
              }}
            >
              <span className="link-container">{result}</span>
              <a className="mv-header-link">
                <img alt="search-icon" src={image} />
              </a>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Form>
    </div>
  );
}

export default SearchComponent;
