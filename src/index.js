import { GraphQLServer } from 'graphql-yoga'
import {typeDefs} from '../graphql/typeDef'
import {resolvers} from '../graphql/resolver'



const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))