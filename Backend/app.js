//= Variables de Entorno
require("dotenv").config();

//=  Modulos para importar
const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
//const mongoose = require('mongoose')
//const bodyParser = require('body-parser')
//const {graphqlExpress, graphiqlExpress} = require('graphql-server-express');
//const {makeExecutableSchema} = require('graphql-tools');
//const { merge } = require("lodash");

//=  Archivos importados (No modulos npm)

//=  Server Express
const app = express();

//=  MongoDB y Mongoose => models, connect, etc..
const { connectDB } = require("./database/db");
connectDB();

//=  Graphql
const { typeDefs } = require("./graphql/typeDefs");
const { resolvers } = require("./graphql/resolvers");

//=  Cors
const corsOptions = {
  origin: `http://localhost:${process.env.PORT}`,
  credentials: false,
};

//=  ApolloServer
async function startServer() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    corsOptions,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false });
}

//=  Corriendo el Servidor de Apollo
startServer();

//=  Corriendo el Servidor Express
app.use(cors());
app.listen(process.env.PORT, () => {
  console.log(`Servidor ejecutandose en el puerto ${process.env.PORT}`);
});
