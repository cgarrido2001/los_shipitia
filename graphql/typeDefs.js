//= MODULOS
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String
    obtenerUsuarios: [Usuario]
    buscarUsuario(id: ID!): Usuario

    revisarCarro(id: ID!): [ProductoCarro]

    revisarCompras(id: ID!): [Compra]

    obtenerProductos: [Producto]

    obtenerCategorias: [Categoria]
  }

  type Mutation {
    agregarUsuario(input: UsuarioInput): Usuario
    actualizarUsuario(id: ID!, input: UsuarioInput): Usuario
    eliminarUsuario(id: ID!): Alert

    agregarCliente(input: ClienteInput): Cliente
    eliminarCliente(id: ID!): Alert

    HacerCompra(id: ID!): Compra
    BorrarHistorialCompra(id: ID!): Alert

    agregarAlCarro(id: ID!, input: ProductoCarroInput): ProductoCarro
    eliminarDelCarro(id: ID!, productoCarro: ID!): Alert

    agregarProducto(input: ProductoInput): Producto
    eliminarProducto(id: ID!): Alert

    agregarCategoria(input: CategoriaInput): Categoria
    eliminarCategoria(id: ID!): Alert
  }

  type Alert {
    mensaje: String
  }

  """
  //= CLIENTE
  """
  type Cliente {
    id: ID!
    nombre: String!
    apellido: String!
    email: String!
    password: String!
  }

  input ClienteInput {
    nombre: String
    apellido: String
    email: String
    password: String
  }

  """
  //= USUARIO
  """
  type Usuario {
    id: ID!
    email: String!
    password: String!
    nombre: String!
    apellido: String!
    rut: String!
    telefono: String!
    sexo: String!
    fechaNacimiento: String!
    compras: [Compra]
    carro: [ProductoCarro]
  }

  input UsuarioInput {
    email: String
    password: String
    nombre: String
    apellido: String
    rut: String
    telefono: String
    sexo: String
    fechaNacimiento: String
  }

  """
  //= PRODUCTO
  """
  type Producto {
    id: ID!
    nombre: String!
    descripcion: String!
    categoria: Categoria!
    precio: Int!
    stock: Int!
  }

  input ProductoInput {
    nombre: String
    descripcion: String
    categoria: String
    precio: Int
    stock: Int
  }

  """
  //= CATEGORIA
  """
  type Categoria {
    id: ID!
    nombre: String!
    productos: [Producto]
  }

  input CategoriaInput {
    nombre: String
  }

  """
  //= COMPRA
  """
  type Compra {
    id: ID!
    usuario: Usuario!
    fecha: String!
    valor: Int!
    pago: [Pago]
    despacho: [Despacho]
    items: [ProductoCarro!]!
  }

  """
  //= PRODUCTO CARRO
  """
  type ProductoCarro {
    id: ID!
    producto: Producto!
    cantidad: Int!
  }

  input ProductoCarroInput {
    producto: String
    cantidad: Int
  }

  """
  //= PRODUCTO MENU
  """
  type ProductoMenu {
    id: ID!
    producto: Producto
    cantidad: Int
  }

  input ProductoMenuInput {
    producto: String
    cantidad: Int
  }

  """
  //= MENU
  """
  type Menu {
    id: ID!
    producto: [ProductoMenu!]!
  }

  """
  //= DESPACHO
  """
  type Despacho {
    id: ID!
    fechaSalida: String
    compra: Compra
    destino: String
  }

  type DespachoInput {
    fechaSalida: String
    compra: String
    destino: String
  }

  """
  //= PAGO
  """
  type Pago {
    id: ID!
    compras: [Compra]
    tipo: String
    estado: Boolean
  }
`;

module.exports = { typeDefs };
