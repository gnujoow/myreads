import React from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import SearchPage from './SearchPage';
import BookListPage from './BookListPage';
import './App.css';

class BooksApp extends React.Component {

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
