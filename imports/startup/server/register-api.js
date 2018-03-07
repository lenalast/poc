import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge';

import TestSchema from '../../api/test/Test.graphql.js';
import TestResolver from '../../api/test/test.resolver';


const typeDefs = [
  // Your gql schemas..
  TestSchema
]

const resolvers = merge(
  // Your resolvers
  TestResolver
)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({ schema })