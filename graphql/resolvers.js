//= MODELOS
const categoria = require("../models/categoria");
const Categoria = require("../models/categoria");
const Cliente = require("../models/cliente");
const Compra = require("../models/compra");
const Despacho = require("../models/despacho");
const Menu = require("../models/menu");
const Pago = require("../models/pago");
const Producto = require("../models/producto");
const ProductoCarro = require("../models/productoCarro");
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
          { path: "pago" },
          { path: "despacho" },
        ],
      });
      return usuario.compras;
    },
    verMenu: async () => {
      const menu = await Menu.find().populate("productos");
      return menu;
    },

    obtenerProductos: async () => {
      const productos = await Producto.find().populate({ path: "categoria" });
      return productos;
    },
    obtenerCategorias: async () => {
      const categorias = await Categoria.find().populate({ path: "productos" });
      return categorias;
    },
  },
  Mutation: {
    agregarUsuario: async (_, { input }) => {
      const usuario = new Usuario(input);
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
      const cliente = new Cliente(input);
      await cliente.save();
      return cliente;
    },

    eliminarCliente: async (_, { id }) => {
      await Cliente.deleteOne({ _id: id });
      return { mensaje: "Cliente eliminado" };
    },

    agregarProducto: async (_, { input }) => {
      const producto = new Producto(input);
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
      const categoria = new Categoria(input);
      await categoria.save();
      return categoria;
    },

    eliminarCategoria: async (_, { id }) => {
      await Categoria.deleteOne({ _id: id });
      return { mensaje: "Categoria Eliminada" };
    },

    agregarProductoAlCarro: async (_, { id, input }) => {
      const nuevo_productoCarro = await new ProductoCarro(input);
      await nuevo_productoCarro.save();
      await Usuario.updateOne(
        { _id: id },
        { $push: { carro: nuevo_productoCarro._id } }
      );
      return nuevo_productoCarro;
    },

    modificarProductoDelCarro: async (_, { idProductoCarro, cantidad }) => {
      const productoCarro = await ProductoCarro.findByIdAndUpdate(
        idProductoCarro,
        { $set: { cantidad: cantidad } },
        { new: true }
      );
      return productoCarro;
    },

    eliminarProductoDelCarro: async (_, { id, productoCarro }) => {
      await Usuario.updateOne({ _id: id }, { $pull: { carro: productoCarro } });
      await ProductoCarro.deleteOne({ _id: productoCarro });
      return { mensaje: "Producto eliminado del Carro" };
    },

    hacerCompra: async (_, { id }) => {
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

      let valor = null;

      for await (const item of usuario.carro) {
        valor += item.cantidad * item.producto.precio;
      }

      const nueva_compra = await new Compra({
        usuario: usuario._id,
        valor: valor,
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

    borrarHistorialCompra: async (_, { id }) => {
      await Usuario.updateOne(
        { _id: id },
        { $set: { compras: [] } },
        { multi: true }
      );
      return { mensaje: "Borrado las compras" };
    },

    generarPago: async (_, { input }) => {
      const pago = await new Pago(input);
      await pago.save();
      await Compra.updateOne(
        { _id: input.compra },
        { $push: { pago: pago._id } }
      );
      return pago;
    },

    agendarDespacho: async (_, { pagoid, destino }) => {
      const pago = await Pago.findById(pagoid);

      const direccion = `${destino.calle} ${destino.numero}, ${destino.comuna}, Región Metropolitana`;

      const despacho = await new Despacho({
        compra: pago.compra,
        destino: direccion,
      });

      await despacho.save();

      await Compra.updateOne(
        { _id: pago.compra },
        { $push: { despacho: despacho._id } }
      );

      return despacho;
    },

    cambiarEstadoDespacho: async (_, { id, nuevoestado }) => {
      const despacho = await Despacho.findByIdAndUpdate(
        id,
        { $set: { estado: nuevoestado } },
        { new: true }
      );
      return despacho;
    },

    crearMenu: async (_, { nombre }) => {
      const nuevoMenu = await new Menu({ nombre });
      await nuevoMenu.save();
      return nuevoMenu;
    },

    agregarProductoAlMenu: async (_, { menu, producto }) => {
      const menuActualizado = await Menu.findByIdAndUpdate(
        menu,
        { $push: { productos: producto } },
        { new: true }
      );
      await menuActualizado.populate("productos");
      return menuActualizado;
    },
  },
};

module.exports = { resolvers };
