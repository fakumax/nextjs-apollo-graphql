import { ApolloServer } from 'apollo-server';
import { typeDefs } from './db/schema.js';
import { resolvers } from './db/resolvers.js';

//servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//arrancar servidor
server.listen().then(({ url }) => {
  console.log(`Servidor listo en la URL ${url}`);
});
