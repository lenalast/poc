// import TestData from './test.collection';
import axios from 'axios';

export default {
  Query: {
      users: () => {
         return axios.get(
          'http://localhost:3000/user/'
        ).then(res => res.data)
          .catch(err => console.error(err))
      }
  }
}