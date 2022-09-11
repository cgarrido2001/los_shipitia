const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  productos: [{ type: mongoose.Schema.ObjectId, ref: "ProductoMenu" }],
});

module.exports = mongoose.model("Menu", menuSchema);