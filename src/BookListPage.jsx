import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './BookShelf';
import BooksGrid from './BooksGrid';
import { getAll, update } from './BooksAPI';

class BookListPage extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    this.handleGetBooks();
  }
  handleGetBooks = () => {
    getAll().then(books => {
      this.setState({ books });
    });
  }
  handleUpdateBook = (book, shelf) => {
    update(book, shelf).then(ret => {
      this.handleGetBooks();
    });
  }
  render = () => {
    const { books } = this.state;
    const currentlyReading = books.filter(book => (
      book.shelf === 'currentlyReading'
    ));
    const wantToRead = books.filter(book => (
      book.shelf === 'wantToRead'
    ));

    const read = books.filter(book => (
      book.shelf === 'read'
    ));
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf title={'Currently Reading'}>
              <BooksGrid
                books={currentlyReading}
                onUpdateBook={this.handleUpdateBook}
              />
            </Bookshelf>
            <Bookshelf title={'Want to Read'}>
              <BooksGrid
                books={wantToRead}
                onUpdateBook={this.handleUpdateBook}
              />
            </Bookshelf>
            <Bookshelf title={'Read'}>
              <BooksGrid
                books={read}
                onUpdateBook={this.handleUpdateBook}
              />
            </Bookshelf>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    );
  }
};

export default BookListPage;
