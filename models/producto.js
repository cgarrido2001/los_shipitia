const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  categoria: { type: mongoose.Schema.ObjectId, ref: "Categoria" },
  precio: Number,
  stock: Number,
});

module.exports = mongoose.model("Producto", productoSchema);
