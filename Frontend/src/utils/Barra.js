import { BsFillPersonLinesFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import datos from "../mocking/perfiles";
import Navbar from "../Components/Navbar";
export default function Barra(props) {
  return (
    <Navbar
      Datos={datos}
      usuario={sessionStorage.getItem("sesion")}
      boton1={
        <Button
          variant="primary"
          onClick={(e) => {
            props.openProductos(true);
            console.log("Productos");
          }}
          style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}
        >
          Productos
        </Button>
      }
      boton3={
        <Button
          variant="primary"
          onClick={(e) => {
            props.openRegistro(true);
            console.log("registro");
          }}
          style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}
        >
          Registrarse
        </Button>
      }
      boton4={
        <Button
          variant="primary"
          onClick={(e) => {
            props.openLogin(true);
            console.log("Login");
          }}
          style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}
        >
          Iniciar sesion
        </Button>
      }
      boton5={
        <Button
          variant="primary"
          onClick={(e) => {
            props.openCuenta(true);
            console.log("Cuenta");
          }}
          style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}
        >
          <BsFillPersonLinesFill></BsFillPersonLinesFill> Cuenta
        </Button>
      }
    ></Navbar>
  );
}
