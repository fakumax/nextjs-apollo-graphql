import mongoose from 'mongoose';

//Usuarios del sistema, ejemplo vendedores que van a tener clientes..
const UsuariosSchema = mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  apellido: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  creado: { type: Date, default: Date.now() },
});

export default mongoose.model('Usuario', UsuariosSchema);
