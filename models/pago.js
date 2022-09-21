const mongoose = require("mongoose");

const pagoSchema = new mongoose.Schema({
  compra: { type: mongoose.Schema.ObjectId, ref: "Compra", required: true },
  monto: { type: Number, required: true },
  tipo: { type: String, required: true },
  estado: { type: Boolean, required: true },
  fecha: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Pago", pagoSchema);
