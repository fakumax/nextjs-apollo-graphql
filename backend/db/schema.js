import { gql } from 'apollo-server';

//Schema

const typeDefs = gql`
  type Curso {
    titulo: String
  }
  type Tecnologia {
    tecnologia: String
  }
  input CursoInput {
    tecnologia: String
  }
  type Query {
    obtenerCursos(input: CursoInput!): [Curso]
    obtenerTecnologias: [Tecnologia]
  }
`;

export { typeDefs };
