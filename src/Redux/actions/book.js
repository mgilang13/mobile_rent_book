import Axios from 'axios';

export const getAllBook = page => {
  return {
    type: 'GET_BOOK',
    payload: Axios.get('http://10.0.3.2:3001/api/v1/book/?page=' + page),
  };
};

export const getAllBookReturn = () => {
  return {
    type: 'GET_BOOK_RETURN',
    payload: Axios.get('http://10.0.3.2:3001/api/v1/book/getBookReturn'),
  };
};

export const rentBookAction = id => {
  return {
    type: 'RENT_BOOK',
    payload: Axios.patch('http://10.0.3.2:3001/api/v1/book/rentBook/' + id),
  };
};
