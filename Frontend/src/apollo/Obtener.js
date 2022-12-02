import React from "react";
import { useQuery, gql } from "@apollo/client";

const obtenerProductos = gql`
  query {
    obtenerProductos {
      id
      nombre
      descripcion
      categoria {
        id
        nombre
      }
      imagen
      precio
      stock
      visibilidad
    }
  }
`;

export function MostrarProductos() {
  const { loading, error, data } = useQuery(obtenerProductos);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  return data.obtenerProductos;

};

const obtenerCategorias = gql`
  query {
    obtenerCategorias {
      id
      nombre
      productos {
        id
        nombre
        categoria {
          id
          nombre
        }
        imagen
        precio
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

const obtenerUsuarios = gql`
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
