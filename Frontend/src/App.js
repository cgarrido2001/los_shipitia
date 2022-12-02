//? React
import { useState } from "react";

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

//? Datos
import datos from "./mocking/perfiles";

export default function App() {
  const [ModalProductos, setModalProductos] = useState(false);
  const [ModalPromociones, setModalPromociones] = useState(false);
  const [ModalRegistro, setModalRegistro] = useState(false);
  const [ModalLogin, setModalLogin] = useState(false);
  const [ModalContacto, setModalContacto] = useState(false);
  const [ModalCuenta, setModalCuenta] = useState(false);
  const [Estado, setEstado] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [Session, setSession] = useState(sessionStorage.setItem("sesion", Estado));
  const [isUsuario, setIsUsuario] = useState(sessionStorage.getItem("Usuario"));

  const CerrarSesion = () => {
    alert("Sesion cerrada con exito.");
    setIsLogin(false);
    setModalCuenta(false);
    sessionStorage.setItem("sesion", false);
  };

  const Login = () => {
    setModalLogin(false);
    let email = document.getElementById("email");
    let pwd = document.getElementById("pwd");

    datos.data.getUsuarios.map((obj) => {
      if (obj.email === email.value && obj.password === pwd.value) {
        sessionStorage.setItem("Usuario", JSON.stringify(obj));

        let data2 = sessionStorage.getItem("Usuario");
        data2 = JSON.parse(data2);
        console.log(data2.carro);

        setEstado(true);
        sessionStorage.setItem("sesion", Estado);
        return alert("Inicio de sesion exitoso");
      } else {
        return <></>;
      }
    });
  };

  return (
    <div>
      <Barra openProductos={setModalProductos} openRegistro={setModalRegistro} openLogin={setModalLogin} openCuenta={setModalCuenta}></Barra>
      <Cuerpo></Cuerpo>
      <Footer setter1={setModalContacto} setter2={setModalCuenta} setter3={setModalProductos} setter4={setModalLogin}></Footer>

      {/* Modal 1 Productos */}
      <Modal animation={true} backdrop="static" show={ModalProductos} onHide={(e) => setModalProductos(false)} fullscreen={true}>
        <Modal.Header closeButton style={{ background: "#1A1919", color: "red", borderColor: "red" }}>
          <Barra openProductos={setModalProductos} openRegistro={setModalRegistro} openLogin={setModalLogin} openCuenta={setModalCuenta}></Barra>
        </Modal.Header>
        <Modal.Body style={{ background: "#1A1919", color: "red", borderColor: "red" }}>
          <div>
            <Productos openModalA={setModalProductos} openModalB={setModalRegistro} openModalC={setModalLogin} openModalD={setModalCuenta}></Productos>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ background: "#DB0404", color: "red" }}>
          <Button variant="secondary" onClick={(e) => setModalProductos(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal 2 Promociones */}
      <Modal animation={true} backdrop="static" show={ModalPromociones} onHide={(e) => setModalPromociones(false)} fullscreen={true}>
        <Modal.Header closeButton style={{ background: "#1A1919", border: "#1A1919", color: "red" }}>
          <Barra openProductos={setModalProductos} openRegistro={setModalRegistro} openLogin={setModalLogin} openCuenta={setModalCuenta}></Barra>
        </Modal.Header>
        <Modal.Body style={{ background: "#1A1919", color: "red" }}>Hola Mundo</Modal.Body>
        <Modal.Footer style={{ background: "#DB0404", color: "red" }}>
          <Button variant="secondary" onClick={(e) => setModalPromociones(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/*Modal 3 Registro*/}
      <Modal animation={true} backdrop="static" show={ModalRegistro} onHide={(e) => setModalRegistro(false)} fullscreen={true}>
        <Modal.Header closeButton style={{ background: "#1A1919", border: "#1A1919", color: "red" }}>
          <Barra openProductos={setModalProductos} openRegistro={setModalRegistro} openLogin={setModalLogin} openCuenta={setModalCuenta}></Barra>
        </Modal.Header>
        <Modal.Body style={{ background: "#1A1919", color: "red" }}>
          <div>
            <Formregister></Formregister>
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
          <Barra openProductos={setModalProductos} openRegistro={setModalRegistro} openLogin={setModalLogin} openCuenta={setModalCuenta}></Barra>
        </Modal.Header>
        <Modal.Body style={{ background: "#1A1919", color: "red" }}>
          <div>
            <Formlogin
              boton1={
                <Button variant="primary" onClick={(e) => Login()}>
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
          <Barra openProductos={setModalProductos} openRegistro={setModalRegistro} openLogin={setModalLogin} openCuenta={setModalCuenta}></Barra>
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
          <Barra openProductos={setModalProductos} openRegistro={setModalRegistro} openLogin={setModalLogin} openCuenta={setModalCuenta}></Barra>
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
