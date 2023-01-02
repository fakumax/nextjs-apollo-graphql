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

  # mutation
  type Usuario {
    id: ID
    nombre: String
    apellido: String
    email: String
    creado: String
  }
  input UsuarioInput {
    nombre: String!
    apellido: String!
    email: String!
    password: String!
  }
  type Mutation {
    nuevoUsuario(input: UsuarioInput): Usuario
  }
`;

export { typeDefs };
