import React from "react";
import Cards from "./Componentes/cards";
import Footer from "./Componentes/footer";
import Navbar from "./Componentes/Navbar";
import Formregister from "./Componentes/FormRegister";
import Formlogin from "./Componentes/FormLogin";
import Cuerpo from "./Componentes/Cuerpo";
import Productos from "./Componentes/Productos";
import Contacto from "./Componentes/Contacto";
import Cuenta from './Componentes/Cuenta';
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import datos from "./mocking/perfiles";

import { BsFillPersonLinesFill } from "react-icons/bs";

let Estado;

class App extends React.Component {
  openModal1 = () => this.setState({ isOpen1: true });
  closeModal1 = () => this.setState({ isOpen1: false });

  openModal2 = () => this.setState({ isOpen2: true });
  closeModal2 = () => this.setState({ isOpen2: false });

  openModal3 = () => this.setState({ isOpen3: true });
  closeModal3 = () => this.setState({ isOpen3: false });

  openModal4 = () => this.setState({ isOpen4: true });
  closeModal4 = () => this.setState({ isOpen4: false });

  openModal5 = () => this.setState({ isOpen5: true });
  closeModal5 = () => this.setState({ isOpen5: false });

  openModal6 = () => this.setState({ isOpen6: true });
  closeModal6 = () => this.setState({ isOpen6: false });

  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      isOpen5: false,
      isOpen6: false,
      contador: 0,
      fila: 0,
      Login: true
    };

    this.setData();
  }

  setData() {
    Estado = false;
    sessionStorage.setItem("sesion", Estado);
  }

  getData() {
    let data = sessionStorage.getItem("Usuario");
    console.log(data);
    return sessionStorage.getItem("Usuario");
  }

  filaProducto(obj) {
    return (
      <div className="d-flex justify-content-center col-sm-12 col-md-6 col-xl-4" style={{ height: "27vw" }}>
        <Cards titulo={obj.nombre} descripcion={obj.descripcion} valor={obj.precio} foto={obj.foto}></Cards>
      </div>
    );
  }

  barra() {
    return (
      <Navbar
        Datos={datos}
        usuario={sessionStorage.getItem("sesion")}
        boton1={
          <Button variant="primary" onClick={this.openModal1} style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}>
            Productos
          </Button>
        }
        boton3={
          <Button variant="primary" onClick={this.openModal3} style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}>
            Registrarse
          </Button>
        }
        boton4={
          <Button variant="primary" onClick={this.openModal4} style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}>
            Iniciar sesion
          </Button>
        }
        boton5={
          <Button variant="primary" onClick={this.openModal6} style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}>
            <BsFillPersonLinesFill></BsFillPersonLinesFill> Cuenta
          </Button>
        }
      ></Navbar>
    );
  }

  cerrarSesion(){
    alert('Sesion cerrada con exito.')
    this.setState({Login: false});
    this.setState({ isOpen6: false });
    sessionStorage.setItem('sesion', false)
  }

  login(){
    this.setState({ isOpen4: false });
    let email = document.getElementById('email');
    let pwd = document.getElementById('pwd');

    
    datos.data.getUsuarios.map((obj) =>{
      if (obj.email===email.value && obj.password === pwd.value){


        
        sessionStorage.setItem('Usuario', JSON.stringify(obj));

        let data2 = sessionStorage.getItem('Usuario');
        data2 = JSON.parse(data2);
        console.log(data2.carro)
        
        let Estado=true;
        sessionStorage.setItem('sesion', Estado);
        return (alert('Inicio de sesion exitoso'))
      }else{
        return <></>
      }
    })
  }

  render() {
    return (
      <div>
        {this.barra()}

        <Cuerpo></Cuerpo>
        <Footer
          boton1={
            <Button variant="primary" onClick={this.openModal5} style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}>
              Contacto
            </Button>
          }
          boton2={
            <Button variant="primary" onClick={this.openModal6} style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}>
              Cuenta
            </Button>
          }
          boton3={
            <Button variant="primary" onClick={this.openModal1} style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}>
              Menu
            </Button>
          }
          boton4={
            <Button variant="primary" onClick={this.openModal4} style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}>
              Login
            </Button>
          }
        ></Footer>

        {/* <button onClick={ () => this.setData()}>set data</button>
        <button onClick={ () => this.getData()}>get data</button> */}
        {/* Modal 1 Productos */}
        <Modal animation={true} backdrop="static" show={this.state.isOpen1} onHide={this.closeModal1} fullscreen={true}>
          <Modal.Header closeButton style={{ background: "#1A1919", color: "red", borderColor: "red" }}>
            {this.barra()}
          </Modal.Header>
          <Modal.Body style={{ background: "#1A1919", color: "red", borderColor: "red" }}>
            <div>
              <Productos Navbar={this.barra()}></Productos>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ background: "#DB0404", color: "red" }}>
            <Button variant="secondary" onClick={this.closeModal1}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal 2 Promociones */}
        <Modal animation={true} backdrop="static" show={this.state.isOpen2} onHide={this.closeModal2} fullscreen={true}>
          <Modal.Header closeButton style={{ background: "#1A1919", border: "#1A1919", color: "red" }}>
            {this.barra()}
          </Modal.Header>
          <Modal.Body style={{ background: "#1A1919", color: "red" }}>Hola Mundo</Modal.Body>
          <Modal.Footer style={{ background: "#DB0404", color: "red" }}>
            <Button variant="secondary" onClick={this.closeModal2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/*Modal 3 Registro*/}
        <Modal animation={true} backdrop="static" show={this.state.isOpen3} onHide={this.closeModal3} fullscreen={true}>
          <Modal.Header closeButton style={{ background: "#1A1919", border: "#1A1919", color: "red" }}>
            {this.barra()}
          </Modal.Header>
          <Modal.Body style={{ background: "#1A1919", color: "red" }}>
            <div>
              <Formregister></Formregister>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ background: "#DB0404", color: "red" }}>
            <Button variant="secondary" onClick={this.closeModal3}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal 4 Login*/}
        <Modal animation={true} backdrop="static" show={this.state.isOpen4} onHide={this.closeModal4} fullscreen={true}>
          <Modal.Header closeButton style={{ background: "#1A1919", border: "#1A1919", color: "red" }}>
            {this.barra()}
          </Modal.Header>
          <Modal.Body style={{ background: "#1A1919", color: "red" }}>
            <div>
              <Formlogin boton1={
                    <Button variant="primary" onClick={(e) => this.login()} >
                      Log in
                    </Button>
              }></Formlogin>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ background: "#DB0404", color: "red", border: "0" }}>
            <Button variant="secondary" onClick={this.closeModal4}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal 5 Contacto */}
        <Modal animation={true} backdrop="static" show={this.state.isOpen5} onHide={this.closeModal5} fullscreen={true}>
          <Modal.Header closeButton style={{ background: "#1A1919", border: "#1A1919", color: "red" }}>
            {this.barra()}
          </Modal.Header>
          <Modal.Body style={{ background: "#1A1919", color: "red" }}>
            <div>
              <Contacto></Contacto>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ background: "#DB0404", color: "red", border: "0" }}>
            <Button variant="secondary" onClick={this.closeModal5}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal 6 Cuenta */}
        <Modal animation={true} backdrop="static" show={this.state.isOpen6} onHide={this.closeModal6} fullscreen={true}>
          <Modal.Header closeButton style={{ background: "#1A1919", border: "#1A1919", color: "red" }}>
            {this.barra()}
          </Modal.Header>
          <Modal.Body style={{ background: "#1A1919", color: "red" }}>
            <div>
              <Cuenta boton1={
            <Button variant="danger" style={{background:"#262525", width:'24vw', height:'3vw'}} onClick={(e) => this.cerrarSesion()}>
              Cerrar sesion
            </Button>
          }></Cuenta>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ background: "#DB0404", color: "red", border: "0" }}>
            <Button variant="secondary" onClick={this.closeModal6}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
