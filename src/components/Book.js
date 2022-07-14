import React from 'react';
import PropTypes from 'prop-types';
import Progress from './Progress';

const Book = ({
  category, title, author, id, RemoveExistingBook,
}) => (
  <div className="book-container">
    <div className="book-wrapper">
      <p className="normal-text darker font-bold">{category}</p>
      <h4 className="title">{title}</h4>
      <p className="normal-text darker blue-text">{author}</p>
      <div className="book-buttons">
        <button type="button">Comment</button>
        <button type="button" onClick={() => RemoveExistingBook(id)}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <Progress />
  </div>
);

Book.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.number,
  RemoveExistingBook: PropTypes.func,
};

Book.defaultProps = {
  category: '',
  title: '',
  author: '',
  id: '',
  RemoveExistingBook: null,
};
export default Book;
