import React from "react";
import { useQuery, gql } from "@apollo/client";

const revisarCompras = gql`
  query RevisarCompras($idUsuario: ID!) {
    revisarCompras(idUsuario: $idUsuario) {
      id
      valor
      fecha
      despacho {
        destino
        estado
        fechaSalida
        id
      }
      items {
        cantidad
        id
        producto {
          nombre
          imagen
          precio
          descripcion
          categoria {
            nombre
            id
          }
        }
      }
    }
  }
`;

const revisarProductosCarro = gql`
  query RevisarProductosCarro($idUsuario: ID!) {
    revisarProductosCarro(idUsuario: $idUsuario) {
      cantidad
      id
      producto {
        id
        imagen
        nombre
        precio
        stock
        categoria {
          id
          nombre
        }
        descripcion
      }
    }
  }
`;

const revisarDespachos = gql`
  query RevisarProductosCarro($idCompra: ID!) {
    revisarDespachos(idCompra: $idCompra) {
      id
      fechaSalida
      estado
      destino
      compra {
        id
      }
    }
  }
`;
