import React, { memo } from 'react';

interface SearchChangeProp {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = memo(({ searchChange }: SearchChangeProp) => {
  return (
    <>
      <input
        data-testid="search-field"
        className="mb-6 inline-flex p-3 rounded-lg text-gray-300 border-2 border-gray-800 w-full md:w-2/3 lg:w-1/3 focus:outline-none focus:ring focus:border-gray-900 bg-dark-secondary"
        type="search"
        placeholder="Search for a kitty..."
        onChange={searchChange}
      />
    </>
  );
});

SearchBox.displayName = 'SearchBox';

export default SearchBox;
