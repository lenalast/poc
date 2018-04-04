import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge';

import ArtistsSchema from '../../api/test/Artists.graphql.js';
import ArtistsResolver from '../../api/test/Artists.resolver';


const typeDefs = [
  // Your gql schemas..
  ArtistsSchema
]

const resolvers = merge(
  // Your resolvers..
  ArtistsResolver
)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({ schema })