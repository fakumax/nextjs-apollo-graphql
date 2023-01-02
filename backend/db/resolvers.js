import bcryptjs from 'bcryptjs';
import Usuario from '../models/Usuario.js';

const cursos = [
  { titulo: 'javascript', tecnologia: 'ecmascript 6' },
  { titulo: 'html', tecnologia: 'html 5' },
  { titulo: 'css', tecnologia: 'css 3' },
  { titulo: 'java', tecnologia: 'java werever' },
  { titulo: 'nextjs', tecnologia: 'react' },
  { titulo: 'nestjs', tecnologia: 'react' },
];

//Resolvers

const resolvers = {
  Query: {
    obtenerCursos: (_, { input }, ctx) => {
      const resultado = cursos.filter(
        (curso) => curso.tecnologia === input.tecnologia
      );
      return resultado;
    },
    obtenerTecnologias: () => cursos,
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
  },
};

export { resolvers };
