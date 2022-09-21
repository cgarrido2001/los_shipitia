const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  rut: { type: String, required: true, unique: true },
  telefono: String,
  sexo: String,
  fechaNacimiento: String,
  compras: [{ type: mongoose.Schema.ObjectId, ref: "Compra" }],
  carro: [{ type: mongoose.Schema.ObjectId, ref: "ProductoCarro" }],
});

module.exports = mongoose.model("Usuario", usuarioSchema);
