import React from 'react';

const SearchBar = (props) => {
    console.log('searchBar props', props);
  return (
      <div>
          <form>
              <label htmlFor="searchword"> Search: 
              <input type="text" id="searchword" onChange={props.handleChange}></input>
              </label>
              <button onClick={props.handleSubmit}>Submit</button>
          </form>
      </div>
  )
}

export default SearchBar;