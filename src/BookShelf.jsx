import React from 'react';

const Bookshelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      {props.children}
    </div>
  </div>
);

export default Bookshelf;
