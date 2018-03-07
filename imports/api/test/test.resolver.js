import TestData from './test.collection';

export default {
  Query: {
    test: (obj, {_id}, context) => {
      return TestData.find({})
    }
  }
}