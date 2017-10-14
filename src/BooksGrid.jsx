import React from 'react';
import Book from './Book';

const BooksGrid = (props) => {
  return (
    <ol className="books-grid">
      {props.books.map(book => (
        <li key={book.id}>
          <Book
            info={book}
            onUpdateBook={props.onUpdateBook}
          />
        </li>
      ))}
    </ol>
  );
};

export default BooksGrid;
