import TestData from './test.collection';
import rp from 'request-promise';


export default {
  Query: {
    test: (obj, {_id}, context) => {
      return TestData.find({})
    }
  }
}