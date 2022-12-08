import React from 'react';

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    props.onSearch(searchQuery);
  };

  return (
    <input
      type="text"
      placeholder='Search...'
      value={searchQuery}
      onChange={handleSearch}
    />
  );
};


export default SearchBar