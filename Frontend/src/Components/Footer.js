import { IoFastFoodOutline } from "react-icons/io5";
import { GiDrippingKnife } from "react-icons/gi";

import { Button } from "react-bootstrap";

export default function Footer(props) {
  const Evaluar = () => {
    if (sessionStorage.getItem("sesion") === "true") {
      return (
        <li style={{ color: "red" }}>
          <Button
            variant="primary"
            onClick={(e) => {
              props.setter2(true);
              console.log("Cuenta");
            }}
            style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}
          >
            Cuenta
          </Button>
        </li>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div>
      <footer className="container-fluid py-3" style={{ backgroundColor: "#1A1919" }}>
        <div className="row px-4">
          <a className="col-sm-12 d-flex align-items-center justify-content-center link-dark text-decoration-none" href="/" style={{ color: "red" }}>
            <IoFastFoodOutline size={25} className="d-inline-block align-text-top text-white"></IoFastFoodOutline>
            <h4 className="m-0 ps-1" style={{ color: "red" }}>
              Fukusuke Sushi
            </h4>
          </a>
        </div>
        <div className="row px-4">
          <div className="col-sm-12">
            <ul className="container d-flex justify-content-center nav p-0">
              <li className="nav-item mx-1">
                <Button
                  variant="primary"
                  onClick={(e) => {
                    props.setter4(true);
                    console.log("login");
                  }}
                  style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}
                >
                  Login
                </Button>
              </li>
              <li className="nav-item mx-1">
                <Button
                  variant="primary"
                  onClick={(e) => {
                    props.setter3(true);
                    console.log("Menu");
                  }}
                  style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}
                >
                  Menu
                </Button>
              </li>

              {Evaluar()}

              <li className="nav-item mx-1">
                <Button
                  variant="primary"
                  onClick={(e) => {
                    props.setter1(true);
                    console.log("Contacto");
                  }}
                  style={{ background: "#1A1919", border: "#1A1919", color: "red", fontSize: "1.3rem" }}
                >
                  Contacto
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row px-4 ">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-white">
            <h6 className="mb-0 mx-2" style={{ color: "red" }}>
              © 2022 Fukusuke Sushi.
            </h6>
            <p className="my-0 mx-2" style={{ color: "red" }}>
              Todos los derechos reservados.
            </p>
          </div>
        </div>
        <div className="row mt-2 px-4">
          <a id="LOS_SHIPITIA" className="col-sm-12 d-flex align-items-center justify-content-center link-dark text-decoration-none" href="https://www.youtube.com/watch?v=cG1M128Vjhw">
            <h6 className="m-0 ps-1 text-white">
              <span>By:</span>
              <GiDrippingKnife size={25} className="d-inline-block align-text-top ms-1" style={{ color: "red" }}></GiDrippingKnife>
              <b style={{ color: "red" }}>LOS SHIPITIA</b>
            </h6>
          </a>
        </div>
      </footer>
    </div>
  );
}
