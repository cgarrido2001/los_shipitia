//= MODELOS
const Categoria = require("../models/categoria");
const Cliente = require("../models/cliente");
const Compra = require("../models/compra");
const Despacho = require("../models/despacho");
const Menu = require("../models/menu");
const Pago = require("../models/pago");
const Producto = require("../models/producto");
const ProductoCarro = require("../models/productoCarro");
const ProductoMenu = require("../models/productoMenu");
const Usuario = require("../models/usuario");

const resolvers = {
  Query: {
    hello: () => "Hello World",
    obtenerUsuarios: async () => {
      const usuarios = await Usuario.find();
      return usuarios;
    },
    buscarUsuario: async (_, { id }) => {
      const usuario = await Usuario.findById(id);
      return usuario;
    },
    revisarCarro: async (_, { id }) => {
      //const usuario = await Usuario.findById(id).populate('carro').populate({ path: 'carro', populate: { path: 'producto' }});
      const usuario = await Usuario.findById(id).populate({
        path: "carro",
        populate: [
          {
            path: "producto",
            populate: {
              path: "categoria",
            },
          },
        ],
      });

      return usuario.carro;
    },
    revisarCompras: async (_, { id }) => {
      const usuario = await Usuario.findById(id).populate({
        path: "compras",
        populate: [
          {
            path: "items",
            populate: {
              path: "producto",
            },
          },
          {
            path: "pago",
            populate: {
              path: "pago",
            },
          },
          {
            path: "despacho",
            populate: {
              path: "despacho",
            },
          },
        ],
      });
      return usuario.compras;
    },
    obtenerProductos: async () => {
      const productos = await Producto.find();
      return productos;
    },
    obtenerCategorias: async () => {
      const categorias = await Categoria.find();
      return categorias;
    },
  },
  Mutation: {
    agregarUsuario: async (_, { input }) => {
      const usuario = new Usuario({
        email: input.email,
        password: input.password,
        nombre: input.nombre,
        apellido: input.apellido,
        rut: input.rut,
        telefono: input.telefono,
        sexo: input.sexo,
        fechaNacimiento: input.fechaNacimiento,
      });
      await usuario.save();
      return usuario;
    },
    actualizarUsuario: async (_, { input, id }) => {
      const usuario = await Usuario.findByIdAndUpdate(
        id,
        { $set: input },
        { new: true }
      );
      return usuario;
    },
    eliminarUsuario: async (_, { id }) => {
      await Usuario.deleteOne({ _id: id });
      return { mensaje: "Usuario eliminado" };
    },
    agregarCliente: async (_, { input }) => {
      const cliente = new Cliente({
        rol: input.rol,
        nombre: input.nombre,
        apellido: input.apellido,
        email: input.email,
        password: input.password,
      });
      await cliente.save();
      return cliente;
    },
    eliminarCliente: async (_, { id }) => {
      await Cliente.deleteOne({ _id: id });
      return { mensaje: "Cliente eliminado" };
    },
    agregarProducto: async (_, { input }) => {
      const producto = new Producto({
        nombre: input.nombre,
        descripcion: input.descripcion,
        categoria: input.categoria,
        precio: input.precio,
        stock: input.stock,
      });
      await producto.save();
      await Categoria.updateOne(
        { _id: input.categoria },
        { $push: { productos: producto._id } }
      );
      return producto;
    },
    eliminarProducto: async (_, { id }) => {
      const producto = await Producto.findById(id);
      await Categoria.updateOne(
        { _id: producto.categoria },
        { $pull: { productos: producto._id } }
      );
      await Producto.deleteOne({ _id: id });
      return { mensaje: "Producto Eliminado" };
    },
    agregarCategoria: async (_, { input }) => {
      const categoria = new Categoria({
        nombre: input.nombre,
      });
      await categoria.save();
      return categoria;
    },
    eliminarCategoria: async (_, { id }) => {
      await Categoria.deleteOne({ _id: id });
      return { mensaje: "Categoria Eliminada" };
    },
    agregarAlCarro: async (_, { id, input }) => {
      const nuevo_productoCarro = await new ProductoCarro({
        producto: input.producto,
        cantidad: input.cantidad,
      });
      await nuevo_productoCarro.save();
      await Usuario.updateOne(
        { _id: id },
        { $push: { carro: nuevo_productoCarro._id } }
      );
      return nuevo_productoCarro;
    },
    eliminarDelCarro: async (_, { id, productoCarro }) => {
      await Usuario.updateOne({ _id: id }, { $pull: { carro: productoCarro } });
      await ProductoCarro.deleteOne({ _id: productoCarro });
      return { mensaje: "Producto eliminado del Carro" };
    },
    HacerCompra: async (_, { id }) => {
      const usuario = await Usuario.findById(id);

      const nueva_compra = await new Compra({
        usuario: usuario._id,
        valor: 5999,
        items: usuario.carro,
      });

      await nueva_compra.save();
      await Usuario.updateOne(
        { _id: id },
        { $push: { compras: nueva_compra._id } }
      );
      await Usuario.updateOne(
        { _id: usuario._id },
        { $set: { carro: [] } },
        { multi: true }
      );
      return nueva_compra;
    },
    BorrarHistorialCompra: async (_, { id }) => {
      await Usuario.updateOne(
        { _id: id },
        { $set: { compras: [] } },
        { multi: true }
      );
      return { mensaje: "Borrado las compras" };
    },
  },
};

module.exports = { resolvers };
