const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema({
  nombre: String,
  productos: [{ type: mongoose.Schema.ObjectId, ref: "Producto" }],
});

module.exports = mongoose.model("Categoria", categoriaSchema);
