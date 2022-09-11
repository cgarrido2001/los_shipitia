const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  rut: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("Cliente", clienteSchema);
