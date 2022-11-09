const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  productos: [{ type: mongoose.Schema.ObjectId, ref: "Producto" }],
});

module.exports = mongoose.model("Categoria", categoriaSchema);
