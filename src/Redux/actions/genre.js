import Axios from 'axios';

export const getAllGenre = () => {
  return {
    type: 'GET_GENRE',
    payload: Axios.get('http://10.0.3.2:3001/api/v1/genre'),
  };
};
