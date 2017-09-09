import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './BookShelf';
import BooksGrid from './BooksGrid';

const BookListPage = (props) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <Bookshelf title={'Currently Reading'}>
          <BooksGrid />
        </Bookshelf>
        <Bookshelf title={'Want to Read'}>
          <BooksGrid />
        </Bookshelf>
        <Bookshelf title={'Read'}>
          <BooksGrid />
        </Bookshelf>
      </div>
    </div>
    <div className="open-search">
      <Link to='/search'>Add a book</Link>
    </div>
  </div>
);

export default BookListPage;
