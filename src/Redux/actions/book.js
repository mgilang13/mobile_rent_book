import Axios from 'axios';

export const getAllBook = page => {
  return {
    type: 'GET_BOOK',
    payload: Axios.get('http://10.0.3.2:3001/api/v1/book/?page=' + page),
  };
};
