import React from "react";
import { useQuery, gql } from "@apollo/client";


export const GET_PRODUCTOS = gql`
  query {
    obtenerProductos {
      id
      nombre

    }
  }
`;



export function MostrarProductos() {
  const { loading, error, data } = useQuery(GET_PRODUCTOS);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  return data.GET_PRODUCTOS;

};

export const obtenerCategorias = gql`
  query {
    obtenerCategorias {
      id
      nombre
      productos {
        id
        nombre
        imagen
        precio
        descripcion
        stock
        visibilidad
      }
    }
  }
`;

const obtenerMenu = gql`
  query {
    obtenerMenu {
      categoria {
        id
        nombre
      }
      descripcion
      id
      imagen
      nombre
      precio
      stock
      visibilidad
    }
  }
`;

export const obtenerUsuarios = gql`
  query {
    obtenerUsuarios {
      apellido
      carro {
        id
        cantidad
      }
      compras {
        items {
          cantidad
          id
          producto {
            id
            nombre
            precio
          }
        }
        fecha
        id
        valor
      }
      telefono
      sexo
      rut
      nombre
      password
      id
      fechaNacimiento
      email
    }
  }
`;
