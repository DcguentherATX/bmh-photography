import React from 'react';
import Button from 'react-bootstrap/Button';

const SearchBar = (props) => {
    // console.log('searchBar props', props);
  return (
      <div className="searchbar-container">
          <form>
              <label htmlFor="searchword" className="search"> Search: 
              <input type="text" id="searchword" onChange={props.handleChange} className="search-input"></input>
              </label>
              <Button onClick={props.handleSubmit} variant="primary">Submit</Button>
          </form>
      </div>
  )
}

export default SearchBar;