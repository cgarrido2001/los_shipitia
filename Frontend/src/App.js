//? React
import { useState } from "react";
import './App.css'

//? Boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

//? Components, utils, etc..
import Footer from "./Components/Footer";
import Formregister from "./Components/FormRegister";
import Formlogin from "./Components/FormLogin";
import Cuerpo from "./Components/Cuerpo";
import Productos from "./Components/Productos";
import Contacto from "./Components/Contacto";
import Cuenta from "./Components/Cuenta";
import Barra from "./utils/Barra";
import Navbar from "./Components/Navbar";

//? Datos
import datos from "./mocking/perfiles";


import {obtenerUsuarios} from './apollo/Obtener';
import {obtenerProductos} from './apollo/Obtener'
import { useQuery } from "@apollo/client";

import { BsFillPersonLinesFill } from "react-icons/bs";

function Usuarios(){
  const{loading,error,data} = useQuery(obtenerUsuarios);
  if(loading) return (<p>Loading...</p>);
  if(error) return (<p>Error.</p>);
  return data.obtenerUsuarios;
}





export default function App() {

  const [ModalProductos, setModalProductos] = useState(false);
  const [ModalPromociones, setModalPromociones] = useState(false);
  const [ModalRegistro, setModalRegistro] = useState(false);
  const [ModalLogin, setModalLogin] = useState(false);
  const [ModalContacto, setModalContacto] = useState(false);
  const [ModalCuenta, setModalCuenta] = useState(false);
  const [Estado, setEstado] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const Todos3 = Usuarios();
  const [Actualizar, setActualizar] = useState(1);
  const [contador, setContador] = useState(0);

  // Funcion que muestra navbar
  const barra = () => {
    return <Navbar
            Logged={Estado}
            funcionLogged={setEstado}
            Datos={datos}
            usuario={sessionStorage.getItem("sesion")}
            boton1={
              <Button variant="primary" onClick={(e) => {setModalProductos(true)}} style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}>
                Productos
              </Button>
            }
            boton3={
              <Button variant="primary" onClick={(e) => {setModalRegistro(true)}} style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}>
                Registrarse
              </Button>
            }
            boton4={
              <Button variant="primary" onClick={(e) => {setModalLogin(true)}} style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}>
                Iniciar sesion
              </Button>
            }
            boton5={
              <Button variant="primary" onClick={(e) => {setModalCuenta(true)}} style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}>
                <BsFillPersonLinesFill></BsFillPersonLinesFill> Cuenta
              </Button>
            }
          ></Navbar>
  };

  // funcion Login
  const Login2 = () => {
    // setActualizar(0);
    setModalLogin(false);
    let email2 = document.getElementById("email");
    let pwd = document.getElementById("pwd");
    Todos3.map((obj) => {
      if (obj.email === email2.value && obj.password === pwd.value) {
        sessionStorage.setItem("Usuario", JSON.stringify(obj));
        let data2 = sessionStorage.getItem("Usuario");
        data2 = JSON.parse(data2);
        console.log(data2.email);
        setEstado(true);
        sessionStorage.setItem('sesion', true);
        return alert("Inicio de sesion exitoso");
      } else {
        if(Estado===true){
          return 0;
        }else{ return 0
          // return alert("Error al intentar iniciar sesion");
        } 
      }
    });
  };


  const CerrarSesion = () => {
    alert("Sesion cerrada con exito.");
    sessionStorage.setItem('sesion', false);
    setIsLogin(false);
    setModalCuenta(false);
    setEstado(false);
  };



  return (
    <div>
      {/* <Button onClick={(e) => {setContador(contador+1)}}>hola</Button>
      <h1>{contador}</h1> */}
      {barra()}
      {/* <Barra openProductos={setModalProductos} openRegistro={setModalRegistro} openLogin={setModalLogin} openCuenta={setModalCuenta}></Barra> */}
      <Cuerpo></Cuerpo>
      <Footer setter1={setModalContacto} setter2={setModalCuenta} setter3={setModalProductos} setter4={setModalLogin}></Footer>

      {/* Modal 1 Productos */}
      <Modal animation={true} backdrop="static" show={ModalProductos} onHide={(e) => setModalProductos(false)} fullscreen={true}>
        <Modal.Header closeButton style={{ background: "#1A1919", color: "red", borderColor: "red" }}>
          {barra(setModalProductos,setModalRegistro,setModalLogin,setModalCuenta)}
        </Modal.Header>
        <Modal.Body style={{ background: "#1A1919", color: "red", borderColor: "red" }}>
          <div>
            <Productos openModalA={setModalProductos} openModalB={setModalRegistro} openModalC={setModalLogin} openModalD={setModalCuenta} estado={Estado}></Productos>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ background: "#DB0404", color: "red" }}>
          <Button variant="secondary" onClick={(e) => setModalProductos(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/*Modal 3 Registro*/}
      <Modal animation={true} backdrop="static" show={ModalRegistro} onHide={(e) => setModalRegistro(false)} fullscreen={true}>
        <Modal.Header closeButton style={{ background: "#1A1919", border: "#1A1919", color: "red" }}>
          {barra()}
        </Modal.Header>
        <Modal.Body style={{ background: "#1A1919", color: "red" }}>
          <div>
            <Formregister cerrar={setModalRegistro}></Formregister>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ background: "#DB0404", color: "red" }}>
          <Button variant="secondary" onClick={(e) => setModalRegistro(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal 4 Login*/}
      <Modal animation={true} backdrop="static" show={ModalLogin} onHide={(e) => setModalLogin(false)} fullscreen={true}>
        <Modal.Header closeButton style={{ background: "#1A1919", border: "#1A1919", color: "red" }}>
         {barra()}
        </Modal.Header>
        <Modal.Body style={{ background: "#1A1919", color: "red" }}>
          <div>
            <Formlogin
              boton1={
                <Button variant="primary" onClick={(e) => Login2()}>
                  Log in
                </Button>
              }
            ></Formlogin>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ background: "#DB0404", color: "red", border: "0" }}>
          <Button variant="secondary" onClick={(e) => setModalLogin(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal 5 Contacto */}
      <Modal animation={true} backdrop="static" show={ModalContacto} onHide={(e) => setModalContacto(false)} fullscreen={true}>
        <Modal.Header closeButton style={{ background: "#1A1919", border: "#1A1919", color: "red" }}>
          {barra()}
        </Modal.Header>
        <Modal.Body style={{ background: "#1A1919", color: "red" }}>
          <div>
            <Contacto></Contacto>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ background: "#DB0404", color: "red", border: "0" }}>
          <Button variant="secondary" onClick={(e) => setModalContacto(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal 6 Cuenta */}
      <Modal animation={true} backdrop="static" show={ModalCuenta} onHide={(e) => setModalCuenta(false)} fullscreen={true}>
        <Modal.Header closeButton style={{ background: "#1A1919", border: "#1A1919", color: "red" }}>
          {barra()}
        </Modal.Header>
        <Modal.Body style={{ background: "#1A1919", color: "red" }}>
          <div>
            <Cuenta
              boton1={
                <Button variant="danger" style={{ background: "#262525", width: "24vw", height: "3vw" }} onClick={(e) => CerrarSesion()}>
                  Cerrar sesion
                </Button>
              }
            ></Cuenta>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ background: "#DB0404", color: "red", border: "0" }}>
          <Button variant="secondary" onClick={(e) => setModalCuenta(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}