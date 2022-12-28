import { ApolloServer, gql } from 'apollo-server';

//Schema
const typeDefs = gql`
  type Curso {
    titulo: String
    tecnologia: String
  }
  type Query {
    obtenerCursos: Curso
  }
`;

const cursos = [
  { titulo: 'javascript', tecnologia: 'ecmascript 6' },
  { titulo: 'html', tecnologia: 'html 5' },
  { titulo: 'css', tecnologia: 'css 3' },
  { titulo: 'java', tecnologia: 'java werever' },
];

//Resolvers

const resolvers = {
  Query: {
    obtenerCursos: () => cursos[0],
  },
};

//servidor

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//arrancar servidor

// server.listen().then(({ url }) => {
//   console.log(`Servidor listo en la URL ${url}`);
// });
server.listen().then(() => {
  console.log(`
      Server is running!
      Listening on port 4000
      Explore at https://studio.apollographql.com/sandbox
    `);
});
