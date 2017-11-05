import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksGrid from './BooksGrid';
import { getAll, search, update } from './BooksAPI';

import { Throttle } from 'react-throttle';


class SearchPage extends Component {
  state = {
    books: [],
    searchedBooks: [],
    query: '',
  }
  componentDidMount () {
    this.handleGetBooks();
  }

  handleChangeInput = (e) => {
    const query = e.target.value;
    if (!query) {
      this.setState({ searchedBooks: [] });
      return;
    }

    search(query, 20).then(
      res => {
        if (res.error) {
          this.setState({ searchedBooks: [] });
          return;
        }
        const searchedBooks = res.map(book => {
          const bookOnShelf = this.state.books.find(bookOnShelf => book.id === bookOnShelf.id);
          if (bookOnShelf) {
            return {...book, shelf: bookOnShelf.shelf};
          }
          return book;
        });
        this.setState({ searchedBooks });
      },
      error => {
        console.log('error ocurred');
      }
    );
  }

  handleUpdateBook = (book, shelf) => {
    update(book, shelf).then(res => {
      const searchedBooks = this.state.searchedBooks.map(eachBook => {
        return book.id === eachBook.id ? {...book, shelf} : eachBook
      });
      this.setState({ searchedBooks });
    });
  }
  handleGetBooks = () => {
    getAll().then(books => {
      this.setState({ books });
    });
  }
  render = () => {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className='close-search'
            to='/'
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <Throttle time="200" handler="onChange">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={this.handleChangeInput}
              />
            </Throttle>
          </div>
        </div>
        {this.state.searchedBooks ? (
          <div className="search-books-results">
            <BooksGrid
              books={this.state.searchedBooks}
              onUpdateBook={this.handleUpdateBook}
            />
          </div>
        ) : null}
      </div>
    );
  }
};

export default SearchPage;
