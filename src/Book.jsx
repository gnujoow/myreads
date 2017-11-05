import React from 'react';

const BOOK_STYLE = {
  width: 128,
  height: 192,
};

const Book = (props) => {
  const backgroundImage = `url(${props.info.imageLinks.smallThumbnail})`;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{...BOOK_STYLE, backgroundImage: backgroundImage}}
        />
        <div className="book-shelf-changer">
          <select
            value={props.info.shelf || 'none'}
            onChange={(e) => props.onUpdateBook(props.info, e.target.value)}
          >
            <option value="null" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.info.title}</div>
      <div className="book-authors">{props.info.authors && props.info.authors.join(', ')}</div>
    </div>
  );
};

export default Book;
