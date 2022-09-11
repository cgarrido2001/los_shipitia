const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  email: String,
  password: String,
  nombre: String,
  apellido: String,
  rut: String,
  telefono: String,
  sexo: String,
  fechaNacimiento: String,
  compras: [{ type: mongoose.Schema.ObjectId, ref: "Compra" }],
  carro: [{ type: mongoose.Schema.ObjectId, ref: "ProductoCarro" }],
});

module.exports = mongoose.model("Usuario", usuarioSchema);
