import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

import Cards from "./Cards";
import CardsCarro from "./CardsCarro";
import MediosPagos from "./MediosPago";

import Barra from "../utils/Barra";

import {obtenerCategorias} from '../apollo/Obtener'

import { useQuery } from "@apollo/client";

export default function Productos(props) {
  const [productos, setProductos]= useState([])
  const [largoCarro, setLargoCarro] = useState(0);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [Estado2, setEstado2] = useState(props.estado);

  // Categorias desde la base de datos
  const GetCategorias2 = (props) => {
    const{loading,error,data} = useQuery(obtenerCategorias);
    if(loading) return (<p>Loading...</p>);
    if(error) return (<p>Error.</p>);
    if(props.hola){
      return data.obtenerCategorias.map(({id,nombre, productos}) =>
        <li className="d-flex nav-item rounded-3 " style={{ height: "3.5vw" }} key={id}>
          <a
            className="d-flex list-group-item list-group-item-action align-items-center justify-content-center"
            style={{
              height: "50px",
              background: "#262525",
              color: "white",
            }}
            href={"#"+nombre}
          >{nombre}</a>
          </li> 
        );
    }  
      return data.obtenerCategorias.map(({id,nombre, productos}) => 
  
          <div className="row" id={nombre}>
            <h3>{nombre}</h3>
            <div className="row"><CrearCards productos={productos}></CrearCards></div>
          </div>  
      )
  }

  const CrearCards = ({productos}) => {
    return productos.map((produ) => 
      <div className="d-flex justify-content-center col-sm-12 col-md-6 col-xl-4" style={{ height: "27vw" }} key={produ.id}>
          <Cards
            titulo={produ.nombre}
            descripcion={produ.descripcion}
            valor={produ.precio}
            foto={produ.imagen}
            id={produ.id}
            boton={
              <Button className="d-flex btn btn-primary justify-content-center align-items-center" style={{ height: "3vw", width: "15.7vw" }} onClick={(e) => AñadirAcarro(produ)}>
                Anadir al carro
              </Button>
            }
          ></Cards>
      </div>
    );
  };

  /* se muestran los cambios en el carro instantaneamente sin tener que recargar el modal*/
  const AñadirAcarro = (produ) => {
    let data = sessionStorage.getItem("Usuario");
    data = JSON.parse(data);
    data.carro.push(produ);
    setLargoCarro(largoCarro + 1);
    let todo = { id: data.id + 1, email: data.email, password: data.password, nombre: data.nombre, apellido: data.apellido, rut: data.rut, telefono: data.telefono, sexo: data.sexo, fecha_nacimiento: data.fecha_nacimiento, carro: data.carro, compras: data.compras };
    sessionStorage.setItem("Usuario", JSON.stringify(todo));
    console.log('-------')
    console.log(data.carro);
    console.log(largoCarro);
  };

  /*recorre todos los json de productos para encontrar el id que corresponda para llamar a la funcion que crea la card del carro*/
  const FuncionCardsCarro2 = (produ) => {
    return (
        <CardsCarro
          foto={produ.imagen}
          nombre={produ.nombre}
          precio={produ.precio}
          id={produ.id}
          set={setLargoCarro}
          largo={largoCarro}
        ></CardsCarro>
    );
  };

  const CarroVacio2 = () => {
    let data = sessionStorage.getItem("Usuario");
    data = JSON.parse(data);
    if(largoCarro === 0){
      return <div>
                <div style={{ height: "8vw" }}></div>
                <h4 className="row justify-content-center" style={{ color: "white" }}>El carro esta</h4>
                <h4 className="row justify-content-center" style={{ color: "white" }}> vacio</h4>
             </div>
    }else{
      return data.carro.map((element) => {
        return <div>
                  {FuncionCardsCarro2(element)}
               </div>
      });
    }
  }

  const Carro = () => {
    if(Estado2 === false){
      return <div>
                <div style={{ height: "8vw" }}></div>
                  <h4 className="row justify-content-center" style={{ color: "white" }}>Inicia sesion</h4>
                  <h4 className="row justify-content-center" style={{ color: "white" }}>para mostrar el</h4>
                  <h4 className="row justify-content-center" style={{ color: "white" }}> contenido del carro</h4>
             </div>
    }else{
      return <div>
                {CarroVacio2()}
             </div>
    }
  }

  const EvaluarBoton = () => {
    if(largoCarro===0){
      return <></>;
    }else{
      return <Button style={{border: 0, width: '20.3vw'}} onClick={(e) => setIsOpen1(true)}>Ir al pago</Button>
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <ul name="categorias" className="sticky-top anyClass" style={{ height: "50vw" }}>
            <GetCategorias2 hola={true}></GetCategorias2>
          </ul>
        </div>
        <div className="col-7" style={{ color: "red" }}>
          <GetCategorias2 hola={false} ></GetCategorias2>
        </div>

        <div className="col-3">
          <div className="container-fluid sticky-top anyClass justify-content-center align-items-center" style={{ scrollbarColor: "red", background: "#202020", height: "30vw", scrollbar: true }}>
            <h3 className="row justify-content-center align-items-center rounded-3" style={{ background: "#323232", height: "3vw" }}>
              Carro
            </h3>
            <div className="row"><Carro></Carro></div>
            <div className="row" style={{height:10}}></div>
            <div className="row justify-content-center"><EvaluarBoton></EvaluarBoton></div>
          </div>
          <div className="container-fluid sticky-top anyClass justify-content-center align-items-center"></div>
        </div>
      </div>

      {/*Modal pagos */}
      <Modal animation={true} backdrop="static" show={isOpen1} onHide={(e) => setIsOpen1(false)} fullscreen={true}>
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
