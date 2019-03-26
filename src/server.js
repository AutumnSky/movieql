import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers
});

server.start(() => console.log('Graphql Server Running http://localhost:4000'));
