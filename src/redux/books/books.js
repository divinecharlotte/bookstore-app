import axios from 'axios';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';
const books = [];

export const addAction = (NewBook) => async (dispatch) => {
  try {
    await axios.post(`${process.env.REACT_APP_BASE_URL}`, NewBook);
    return dispatch({ type: ADD_BOOK, payload: NewBook });
  } catch (err) { return err; }
};

export const removeAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`${process.env.REACT_APP_BASE_URL}/${id}`);
    return dispatch({ type: REMOVE_BOOK, id });
  } catch (err) { return err; }
};

export const getBooksFunc = () => async (dispatch) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}`);
    return dispatch({ type: GET_BOOKS, payload: response.data });
  } catch (err) { return err; }
};

const BooksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.payload.item_id,
          title: action.payload.title,
          author: action.payload.author,
          category: action.payload.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOKS:
      return Object.keys(action.payload)
        .map((el) => ({ ...action.payload[el][0], id: el }));
    default:
      return state;
  }
};

export default BooksReducer;
