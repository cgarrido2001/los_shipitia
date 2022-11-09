const mongoose = require("mongoose");

const compraSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.ObjectId, ref: "Usuario", required: true },
  fecha: { type: Date, default: new Date() },
  valor: { type: Number, required: true },
  pago: [{ type: mongoose.Schema.ObjectId, ref: "Pago" }],
  despacho: [{ type: mongoose.Schema.ObjectId, ref: "Despacho" }],
  items: {
    type: [mongoose.Schema.ObjectId],
    ref: "ProductoCarro",
    required: true,
    validate: [(value) => value.length > 0, "No hay productos"],
  },
});

module.exports = mongoose.model("Compra", compraSchema);
