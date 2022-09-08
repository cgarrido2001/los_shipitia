const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const { ApolloServer, gql } = require("apollo-server-express");
//const { graphql } = require("graphql");

const app = express();
app.use(cors());
app.listen(8090, function(){
    console.log("servidor iniciado en: http://localhost:8090/graphql")
})



mongoose.connect("mongodb+srv://Admin:JdKsHXM4shyuCfPa@cluster0.w86scxa.mongodb.net/Sushi",{useNewUrlParser:true, useUnifiedTopology:true});

const Persona = require("./models/persona");
//const Persona_prueba = require("./models/persona_prueba"); 
const Usuario = require("./models/usuario");
//const usuario = require("./models/usuario");

const typeDefs = gql`

 type Persona{
    id:ID!
    rut:String!
    nombre:String!
    apellido:String!
    edad:Int
 }

 input PersonaInput {
    rut:String!
    nombre:String!
    apellido:String!
    edad:Int
 }
 
 type Alert{
    message: String
 }

 type Usuario {
    id: ID!
    username: String!
    password: String!
 }

 input UsuarioInput{
    username:String!
    password:String!
 }

 type Query{
    getPersonas : [Persona]
    getPersona(id: ID!) : Persona
    getCount_Personas : Int

    getUsuarios : [Usuario]
    getUsuario(id: ID!) : Usuario
    getCount_Usuarios : Int
 }

 type Mutation{
    addPersona(input: PersonaInput) : Persona
    updatePersona(id: ID!, input:PersonaInput) : Persona
    deletePersona(id: ID!): Alert

    addUsuario(input: UsuarioInput) : Usuario
    updateUsuario(id: ID!, input: UsuarioInput) : Usuario
    deleteUsuario(id: ID!) : Alert
 }
`;

//resolvers

const resolvers ={
    Query: {
        async getPersonas(obj){
            const personas = await Persona.find();
            return personas;
        },

        async getPersona(obj,{ id }){
            const persona = await Persona.findById(id);
            return persona;
        },

        async getCount_Personas(obj){
            const cantidad = await Persona.count();
            return cantidad;
        },

        async getUsuarios(obj){
            const usuario = await Usuario.find();
            return usuario;
        },

        async getUsuario(obj, { id }){
            const usuario = await Usuario.findById(id);
            return usuario;
        },

        async getCount_Usuarios (obj){
            const cantidad = await Usuario.count();
            return cantidad;
        }
    },

    Mutation: {
        async addPersona(obj, { input }){
            const persona = new Persona(input);
            await persona.save();
            return persona;
        },

        async updatePersona(obj, { id, input }){
            const persona = await Persona.findByIdAndUpdate(id, input);
            return persona;
        },

        async deletePersona(obj, { id }){
            await Persona.findByIdAndDelete(id);
            return {
                message : "Persona eliminada"
            }
        },

        async addUsuario(obj, { input }){
            const usuario = new Usuario(input);
            await usuario.save();
            return usuario;
        },

        async updateUsuario(obj, { id, input }){
            const usuario = await Usuario.findByIdAndUpdate(id, input);
            return usuario;
        },

        async deleteUsuario(obj, { id }){
            await Usuario.findByIdAndDelete(id);
            return {
                message : "usuario eliminado"
            }
        }
        }
    }

//let apolloServer = null;

const corsOptions = {
    origin: "http://localhost:8090",
    credentials: false
}

async function startServer(){
    const apolloServer = new ApolloServer({typeDefs, resolvers, corsOptions});
    await apolloServer.start();

    apolloServer.applyMiddleware({app, cors: false});
}

startServer();