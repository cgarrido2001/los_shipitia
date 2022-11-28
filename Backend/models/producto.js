const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  descripcion: { type: String, required: true },
  imagen: {type: String, required: true, unique: true},
  categoria: {
    type: mongoose.Schema.ObjectId,
    ref: "Categoria",
    required: true,
  },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  visibilidad: { type: Boolean, default: false },
});

module.exports = mongoose.model("Producto", productoSchema);
