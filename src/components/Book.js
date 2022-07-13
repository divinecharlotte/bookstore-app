import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  category, title, author, id, RemoveExistingBook,
}) => (
  <>
    <h4>{category}</h4>
    <h3>{title}</h3>
    <h4>{author}</h4>
    <button type="button">Comment</button>
    <button type="button" onClick={() => RemoveExistingBook(id)}>Remove</button>
    <button type="button">Edit</button>
    <hr />
  </>
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
