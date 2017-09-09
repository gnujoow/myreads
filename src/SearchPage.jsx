import React from 'react';
import BooksGrid from './BooksGrid';

const SearchPage = (props) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={() => console.log('-')}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author"/>
        </div>
      </div>
      <div className="search-books-results">
        <BooksGrid />
      </div>
    </div>
  );
};

export default SearchPage;
