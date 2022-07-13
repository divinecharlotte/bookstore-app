const ADD_BOOK = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK';
const books = [
  {
    id: 1,
    author: 'ROBERT',
    title: 'Rich dad',
  },
  {
    id: 2,
    author: 'KIOSAKI',
    title: 'Poor dad',
  },
  {
    id: 3,
    author: 'JIM RHON',
    title: 'The secret',
  },
  {
    id: 4,
    author: 'BOSS BABY ',
    title: 'Babys day out',
  },
];
export const addAction = (NewBook) => ({
  type: ADD_BOOK,
  payload: NewBook,
});
export const removeAction = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const BooksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default BooksReducer;
