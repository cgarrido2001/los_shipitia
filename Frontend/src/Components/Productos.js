import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { BsFillBagXFill } from "react-icons/bs";

import Cards from "./Cards";
import CardsCarro from "./CardsCarro";
import MediosPagos from "./MediosPago";

import Barra from "../utils/Barra";

import {MostrarProductos} from "../apollo/Obtener"

import datos from "../mocking/perfiles";

export default function Productos(props) {
  const [productos, setProductos]= useState([])
  const [largoCarro, setLargoCarro] = useState(0);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const HandleData = () => {
    setProductos(MostrarProductos())
    console.log(productos)
  }

  /* se muestran los cambios en el carro instantaneamente sin tener que recargar el modal*/
  const AñadirAcarro = (valor) => {
    let data = sessionStorage.getItem("Usuario");
    data = JSON.parse(data);
    data.carro.push(valor);
    setLargoCarro(largoCarro + 1);
    let todo = { id: data.id + 1, email: data.email, password: data.password, nombre: data.nombre, apellido: data.apellido, rut: data.rut, telefono: data.telefono, sexo: data.sexo, fecha_nacimiento: data.fecha_nacimiento, carro: data.carro, compras: data.compras };
    sessionStorage.setItem("Usuario", JSON.stringify(todo));
    console.log(data.carro);
  };

  /*se eliminan los productos del carro sin tener que recargar el modal*/
  const Delete = (id) => {
    const data = sessionStorage.getItem("Usuario");
    data = JSON.parse(data);
    setLargoCarro(largoCarro - 1);
    datos.data.getProductos.map((obj) => {
      if (obj.id === id) {
        data.carro = data.carro.filter((value) => {
          return value !== id;
        });
        let todo = { id: data.id + 1, email: data.email, password: data.password, nombre: data.nombre, apellido: data.apellido, rut: data.rut, telefono: data.telefono, sexo: data.sexo, fecha_nacimiento: data.fecha_nacimiento, carro: data.carro, compras: data.compras };
        sessionStorage.setItem("Usuario", JSON.stringify(todo));
      } else {
        return <></>;
      }
      return <></>;
    });
  };

  /*
  crea cada una de las cards de cada producto en la base de 
  datos/mocking---nota personal: lo mas importante es que se le pasa el boton 
  como props a la card con la funcion asignada en este mismo componente ya que funciona cons states
  */
  const FilaProducto = (obj) => {
    return (
      <div className="d-flex justify-content-center col-sm-12 col-md-6 col-xl-4" style={{ height: "27vw" }}>
        <Cards
          titulo={obj.nombre}
          descripcion={obj.descripcion}
          valor={obj.precio}
          foto={obj.imagen}
          id={obj.id}
          boton={
            <Button className="d-flex btn btn-primary justify-content-center align-items-center" style={{ height: "3vw", width: "15.7vw" }} onClick={(e) => AñadirAcarro(obj.id)}>
              Anadir al carro
            </Button>
          }
        ></Cards>
      </div>
    );
  };

  /*evalua que la categoria del produto es la misma de la fila que se esta creando para solo añadir los productos que corresponden en esta categoria*/
  const CrearCards = (categoria) => {
    return datos.data.getProductos.map((produ) => {
      if (categoria === produ.categoria) {
        return FilaProducto(produ);
      } else {
        return <></>;
      }
    });
  };

  /*
  crea cada una de las cards que van en container 
  del carro---nota personal: lo mas importante es que se le pasa el boton 
  como props a la card con la funcion asignada en este mismo
  */
  const CardCarro = (obj) => {
    return (
      <div>
        <CardsCarro
          foto={obj.imagen}
          nombre={obj.nombre}
          precio={obj.precio}
          id={obj.id}
          boton={
            <Button className="btn btn-primary" style={{ background: "#323232", border: 0, width: "4vw" }} onClick={(e) => Delete(obj.id)}>
              <BsFillBagXFill></BsFillBagXFill>
            </Button>
          }
        ></CardsCarro>
      </div>
    );
  };

  /*recorre todos los json de productos para encontrar el id que corresponda para llamar a la funcion que crea la card del carro*/
  const FuncionCardsCarro = (element) => {
    return datos.data.getProductos.map((obj) => {
      if (obj.id === element) {
        return CardCarro(obj);
      } else {
        return <></>;
      }
    });
  };

  /*funcion que agrega los contenidos que correspondan en el carro*/

  const FuncionCarro = () => {
    let data = sessionStorage.getItem("Usuario");
    data = JSON.parse(data);
    if (sessionStorage.getItem("sesion") === "false") {
      return (
        <div>
          <div style={{ height: "8vw" }}></div>
          <h4 className="row justify-content-center" style={{ color: "white" }}>
            Inicia sesion
          </h4>
          <h4 className="row justify-content-center" style={{ color: "white" }}>
            para mostrar el
          </h4>
          <h4 className="row justify-content-center" style={{ color: "white" }}>
            contenido del carro
          </h4>
        </div>
      );
    } else {
      return data.carro.map((element) => {
        console.log("hola");
        console.log(element);
        return FuncionCardsCarro(element);
      });
    }
  };

  /*muestra si el carro esta vacio o el boton para ir a pagar*/
  const CarroVacio = () => {
    if (largoCarro === 0) {
      return (
        <div>
          <div style={{ height: "12vw" }}></div>
          <h4 className="row justify-content-center" style={{ color: "white" }}>
            El carro esta
          </h4>
          <h4 className="row justify-content-center" style={{ color: "white" }}>
            Vacio
          </h4>
        </div>
      );
    } else {
      return (
        <Button className="d-flex btn btn-primary justify-content-center align-items-center" onClick={(e) => setIsOpen1(true)} style={{ height: "3vw" }}>
          Ir al pago
        </Button>
      );
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <ul name="categorias" className="sticky-top anyClass" style={{ height: "50vw" }}>
            {datos.data.getCategoria.map((obj) => {
              return (
                <li className="d-flex nav-item rounded-3 " style={{ height: "3.5vw" }}>
                  <a
                    className="d-flex list-group-item list-group-item-action align-items-center justify-content-center"
                    style={{
                      height: "50px",
                      background: "#262525",
                      color: "white",
                    }}
                    href={obj.ref}
                  >
                    {obj.nombre}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-7" style={{ color: "red" }}>
          {datos.data.getCategoria.map((cate) => {
            return (
              <div className="row" id={cate.nombre}>
                <h3>{cate.nombre}</h3>
                <div className="row">{CrearCards(cate.nombre)}</div>
              </div>
            );
          })}
        </div>

        <div className="col-3">
          <div className="container-fluid sticky-top anyClass justify-content-center align-items-center" style={{ scrollbarColor: "red", background: "#202020", height: "30vw", scrollbar: true }}>
            <h3 className="row justify-content-center align-items-center rounded-3" style={{ background: "#323232", height: "3vw" }}>
              Carro
            </h3>
            <div className="row">{FuncionCarro()}</div>
            <div className="row">{CarroVacio()}</div>
          </div>
          <div className="container-fluid sticky-top anyClass justify-content-center align-items-center"></div>
        </div>
      </div>

      {/*Modal pagos */}
      <Modal animation={true} backdrop="static" show={(e) => setIsOpen1(true)} onHide={(e) => setIsOpen1(false)} fullscreen={true}>
        <Modal.Header closeButton style={{ background: "#1A1919", color: "red", borderColor: "red" }}>
          <Barra openModalA={props.openModalA} openModalB={props.openModalB} openModalC={props.openModalC} openModalD={props.openModalD}></Barra>
        </Modal.Header>
        <Modal.Body style={{ background: "#1A1919", color: "red", borderColor: "red" }}>
          <div>
            <MediosPagos></MediosPagos>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ background: "#DB0404", color: "red" }}>
          <Button variant="secondary" onClick={(e) => setIsOpen1(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
