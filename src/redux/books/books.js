const ADD_BOOK = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK';
const initialState = [];
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state,
        {
          id: action.id,
          titile: action.payload.title,
          author: action.payload.author,
        },
      ];
    case 'REMOVE_BOOKS':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addAcion = (NewBook) => ({
  type: ADD_BOOK,
  payload: NewBook,

});

export const removeAction = (id) => ({

  type: REMOVE_BOOK,
  id,

});
export default booksReducer;
