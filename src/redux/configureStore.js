import { createStore, combineReducers } from 'redux';
import BooksReducer from './books/books';
import CategoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  BooksReducer, CategoriesReducer,
});
export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
