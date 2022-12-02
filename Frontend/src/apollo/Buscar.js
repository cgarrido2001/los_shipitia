import React from "react";
import { useQuery, gql } from "@apollo/client";

const buscarCompra = gql`
  query BuscarCompra($idCompra: ID!) {
    buscarCompra(idCompra: $idCompra) {
      fecha
      id
      items {
        cantidad
        id
        producto {
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
        }
      }
      pago {
        monto
        tipo
        id
        fecha
        estado
      }
    }
  }
`;

const buscarUsuario = gql`
  query BuscarUsuario($correo: String!) {
    buscarUsuario(correo: $correo) {
      apellido
      email
      id
      nombre
      rut
      password
      sexo
      telefono
      fechaNacimiento
      carro {
        id
        cantidad
        producto {
          imagen
          descripcion
          id
          precio
        }
      }
      compras {
        id
        pago {
          tipo
          monto
          id
          fecha
          estado
        }
        fecha
        valor
      }
    }
  }
`;

const buscarDespacho = gql`
  query BuscarDespacho($idDespacho: ID!) {
    buscarDespacho(idDespacho: $idDespacho) {
      destino
      estado
      fechaSalida
      id
      compra {
        id
        fecha
        valor
      }
    }
  }
`;
