import React from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import SearchPage from './SearchPage';
import BookListPage from './BookListPage';
import './App.css';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  render() {
    return (
        <Router>
          <div className="app">
            <Route
              exact path="/"
              component={BookListPage}
            />
            <Route
              path="/search"
              component={SearchPage}
            />
          </div>
        </Router>
    );
  }
}

export default BooksApp;
