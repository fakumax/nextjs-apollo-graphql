import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import Usuario from '../models/Usuario.js';
import * as dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

const crearToken = (usuario, secreta, expiresIn) => {
  //console.log(usuario);
  const { id, email, nombre, apellido } = usuario;
  return jwt.sign({ id, email, nombre, apellido }, secreta, { expiresIn });
};

//Resolvers

const resolvers = {
  Query: {
    obtenerUsuario: async (_, { token }) => {
      const usuarioId = await jwt.verify(token, process.env.SECRETA);
      return usuarioId;
    },
  },

  Mutation: {
    nuevoUsuario: async (_, { input }) => {
      const { email, password } = input;
      // Revisar si el usuario ya esta registrado.
      const existeUsuario = await Usuario.findOne({ email });
      if (existeUsuario) {
        throw new Error('El usuario ya está registrado');
      }
      //console.log(existeUsuario);
      //Hashear Password
      const salt = await bcryptjs.genSalt(10);
      input.password = await bcryptjs.hash(password, salt);

      try {
        //Guardar en la DB
        const usuario = new Usuario(input);
        usuario.save(); //guardar en la DB
        return usuario;
      } catch (error) {
        console.log(error);
      }
    },
    autenticarUsuario: async (_, { input }) => {
      const { email, password } = input;
      //si el usuario existe
      const existeUsuario = await Usuario.findOne({ email });
      if (!existeUsuario) {
        throw new Error('El usuario no existe');
      }
      // Revisar si el password es correcto
      const passwordCorrecto = await bcryptjs.compare(password, existeUsuario.password);
      if (!passwordCorrecto) {
        throw new Error('El password es incorrecto');
      }
      // Crear el token
      return {
        token: crearToken(existeUsuario, process.env.SECRETA, '1d'),
      };
    },
  },
};

export { resolvers };
