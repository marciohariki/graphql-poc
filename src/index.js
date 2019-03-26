import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

// Create an express server and a GraphQL endpoint
const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'))
