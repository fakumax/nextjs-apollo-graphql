import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

const conectarDB = async () => {
  mongoose.set('strictQuery', false); //[MONGOOSE] DeprecationWarning
  try {
    await mongoose.connect(process.env.DB_MONGO, {});

    console.log('DB Conectada');
  } catch (error) {
    console.log('Hubo un error');
    console.log(error);
    process.exit(1); //detener la app
  }
};

export { conectarDB };
