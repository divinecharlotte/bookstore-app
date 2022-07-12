import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import AddBook from './AddBook';
import Book from './Book';
import { addAction, removeAction } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const StoredBook = useSelector((state) => state.booksReducer);

  const AddNewBook = (e, NewBook) => {
    e.preventDefault();
    dispatch(addAction(NewBook));
  };
  const RemoveExistingBook = (id) => {
    dispatch(removeAction(id));
  };
  return (
    <>
      {StoredBook.map((item) => (
        <Book
          title={item.title}
          key={item.id}
          author={item.author}
          id={item.id}
          RemoveExistingBook={RemoveExistingBook}
        />
      ))}
      <AddBook AddNewBook={AddNewBook} />
    </>
  );
};

export default Books;
