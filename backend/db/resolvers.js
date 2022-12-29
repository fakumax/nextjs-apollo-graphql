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
};

export { resolvers };
