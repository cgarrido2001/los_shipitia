const mongoose = require("mongoose");

const compraSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.ObjectId, ref: "Usuario" },
  fecha: { type: Date, default: new Date() },
  valor: Number,
  pago: [{ type: mongoose.Schema.ObjectId, ref: "Pago" }],
  despacho: [{ type: mongoose.Schema.ObjectId, ref: "Despacho" }],
  items: [{ type: mongoose.Schema.ObjectId, ref: "ProductoCarro" }],
});

module.exports = mongoose.model("Compra", compraSchema);
