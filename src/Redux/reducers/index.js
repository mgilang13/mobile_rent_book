import {combineReducers} from 'redux';
import adminReducers from './admin';
import genreReducers from './genre';
import bookReducers from './book';

const reducers = combineReducers({
  admin: adminReducers,
  genre: genreReducers,
  book: bookReducers,
});

export default reducers;
