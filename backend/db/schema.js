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
    obtenerUsuario(token: String!): Usuario
  }

  # mutation
  type Usuario {
    id: ID
    nombre: String
    apellido: String
    email: String
    creado: String
  }
  type Token {
    token: String
  }
  input AutenticarInput {
    email: String!
    password: String!
  }
  input UsuarioInput {
    nombre: String!
    apellido: String!
    email: String!
    password: String!
  }
  type Mutation {
    nuevoUsuario(input: UsuarioInput): Usuario
    autenticarUsuario(input: AutenticarInput): Token
  }
`;

export { typeDefs };
