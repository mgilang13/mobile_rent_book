import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// const config = {
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//   },
// };

export const login = formdata => ({
  type: 'POST_LOGIN',
  payload: Axios.post('http://10.0.3.2:3001/api/v1/admin/login', formdata).then(
    result => {
      console.log('result', result);
      if (result.data.status === 200) {
        alert('Login Success');
        try {
          AsyncStorage.setItem('KEY_TOKEN', result.data.data.token);
          AsyncStorage.setItem('id', JSON.stringify(result.data.data.id));
          AsyncStorage.setItem('fullname', result.data.data.fullname);
        } catch (error) {
          console.log(error);
          alert('Oops something went wrong!');
        }
      }
    },
  ),
});
