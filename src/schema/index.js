import { merge } from 'lodash'
import { makeExecutableSchema } from 'graphql-tools'
import { importSchema } from 'graphql-import'
import courseResolver from './courses/resolver'
import usersResolver from './users/resolver'
import postsResolver from './posts/resolver'

const typeDefs = importSchema('src/schema/root.graphql')
const resolvers = merge(
  courseResolver,
  postsResolver,
  usersResolver
)

export default makeExecutableSchema({ typeDefs, resolvers })
