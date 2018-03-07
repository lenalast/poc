import gql from 'graphql-tag';

export default gql`
 
  type Test {
      _id: String
      name: String
  }
  
  type Query {
      test: [Test]
  }
`