//= MODULOS
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String

    buscarUsuario(correo: String!): Usuario
    buscarPago(idPago: ID!): Pago
    buscarCompra(idCompra: ID!): Compra
    buscarDespacho(idDespacho: ID!): Despacho

    revisarProductosCarro(idUsuario: ID!): [ProductoCarro]
    revisarCompras(idUsuario: ID!): [Compra]
    revisarDespachos(idCompra: ID!): [Despacho]

    obtenerMenu: [Producto]
    obtenerUsuarios: [Usuario]
    obtenerProductosCarros: [ProductoCarro]
    obtenerProductos: [Producto]
    obtenerCategorias: [Categoria]
    obtenerPagos: [Pago]
    obtenerDespachos: [Despacho]
  }

  type Mutation {
    agregarUsuario(input: UsuarioInput!): Usuario
    actualizarUsuario(idUsuario: ID!, input: UsuarioInput!): Usuario
    eliminarUsuario(idUsuario: ID!): Alerta

    agregarCliente(input: ClienteInput!): Cliente
    actualizarCliente(idCliente: ID!, input: ClienteInput!): Cliente
    eliminarCliente(idCliente: ID!): Alerta

    agregarProducto(input: ProductoInput!): Producto
    actualizarProducto(idProducto: ID!, input: ProductoInput!): Producto
    eliminarProducto(idProducto: ID!): Alerta

    agregarCategoria(input: CategoriaInput!): Categoria
    actualizarCategoria(idCategoria: ID!, input: CategoriaInput!): Categoria
    eliminarCategoria(idCategoria: ID!): Alerta

    agregarProductoAlCarro(idUsuario: ID!, input: ProductoCarroInput!): ProductoCarro
    actualizarProductoDelCarro(idProductoCarro: ID!, cantidad: Int!): ProductoCarro
    eliminarProductoDelCarro(idUsuario: ID!, idProductoCarro: ID!): Alerta

    generarCompra(idUsuario: ID!): Compra
    generarPago(input: PagoInput!): Pago
    generarDespacho(idPago: ID!, destino: DestinoInput!): Despacho
    actualizarEstadoDespacho(idDespacho: ID!, nuevoEstado: String!): Despacho
  }

  type Alerta {
    mensaje: String
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
    sexo: String
    fechaNacimiento: String
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
  //= CLIENTE
  """
  type Cliente {
    id: ID!
    nombre: String!
    apellido: String!
    rut: String!
    email: String!
    password: String!
  }

  input ClienteInput {
    nombre: String
    apellido: String
    rut: String
    email: String
    password: String
  }

  """
  //= PRODUCTO
  """
  type Producto {
    id: ID!
    nombre: String!
    descripcion: String!
    imagen: String!
    categoria: Categoria!
    precio: Int!
    stock: Int!
    visibilidad: Boolean!
  }

  input ProductoInput {
    nombre: String
    descripcion: String
    imagen: String
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
  //= PAGO
  """
  type Pago {
    id: ID!
    compra: Compra!
    monto: Int!
    tipo: String!
    estado: Boolean!
    fecha: String!
  }

  input PagoInput {
    compra: String
    tipo: String
    estado: Boolean
  }

  """
  //= DESPACHO
  """
  type Despacho {
    id: ID!
    compra: Compra!
    estado: String!
    destino: String!
    fechaSalida: String!
  }

  input DestinoInput {
    calle: String
    numero: Int
    domicilio: String
    numeroDomicilio: Int
    comuna: String
  }
`;

module.exports = { typeDefs };
