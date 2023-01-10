import React from 'react';

const SearchBox = ({ searchValue, setSearchValue }) => {
  const onSubmit = e => {
    e.preventDefault();

    if (searchValue !== '') {
      setSearchValue('');
    }
  };
  return (
    <div className="search-section">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={searchValue}
          placeholder="Search a movie..."
          id="search-box"
          onChange={e => setSearchValue(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default SearchBox;
