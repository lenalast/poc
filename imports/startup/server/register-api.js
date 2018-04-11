import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';
import merge from 'lodash/merge';

import ArtistsSchema from '../../api/Artist/Artists.graphql.js';
import ArtistsResolver from '../../api/Artist/Artists.resolver';

import InstagramSchema from '../../api/Instagram/InstagramUser.graphql.js'
import InstagramResolver from '../../api/Instagram/InstagramUser.resolver'

const typeDefs = [
  // Your gql schemas...
  ArtistsSchema
]

const resolvers = merge(
  // Your resolvers...
  ArtistsResolver
)

const localSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

// Schema stitching with Instagram
const extendedSchema = makeExecutableSchema({
  typeDefs: InstagramSchema,
  resolvers: InstagramResolver,
})

const linkTypeDefs = `
  extend type Artist {
    instagramUser: User
  }
  
`

const schema = mergeSchemas({
  schemas: [localSchema, extendedSchema, linkTypeDefs],
  resolvers: mergeInfo => ({
    Artist: {
      instagramUser: {
        // fragment: `fragment UserFragment on User { name }`,
        resolve(parent, args, context, info) {
          const name = parent.name;
          return mergeInfo.delegate(
            'query',
            'user',
            {
              name,
            },
            context,
            info,
          );
        },
      }
    }
  })
})

// TODO: Create Apollo server with merged schemas
createApolloServer({ schema })