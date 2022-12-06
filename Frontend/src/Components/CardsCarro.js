import { useState } from "react";
import { BsFillBagDashFill } from "react-icons/bs";
import { BsFillBagPlusFill } from "react-icons/bs";
import { BsFillBagXFill } from "react-icons/bs";
import { Modal, Button } from "react-bootstrap";


// onClick={(e) => setValor(valor - 1)}
// onClick={(e) => setValor(valor + 1)}
export default function CardsCarro(props) {
  const [valor, setValor] = useState(1);

  const Delete2 = (id,setLargoCarro,largoCarro) => {
    let data = sessionStorage.getItem("Usuario");
    data = JSON.parse(data);
    setLargoCarro(largoCarro - 1);
    
    const nuevaData = data.carro.filter(obj => obj.id !== id)

    let todo = { id: data.id + 1, email: data.email, password: data.password, nombre: data.nombre, apellido: data.apellido, rut: data.rut, telefono: data.telefono, sexo: data.sexo, fecha_nacimiento: data.fecha_nacimiento, carro: nuevaData, compras: data.compras };
    sessionStorage.setItem("Usuario", JSON.stringify(todo));
  };

  return (
    <div>
      <div class="card col-12">
        <div className="card" style={{ background: "#202020", margin: "0vw", width: "100%", height: "18vw" }}>
          <img class="card-img" src={props.foto} alt="Card" height={"60%"} width={"10%"} />
          <div class="card-body justify-content-center" style={{ padding: 16 }}>
            <div class="row col-12 justify-content-center">
              <h6 className="col-6 justify-content-center">{props.nombre}</h6>
              <h6 className="col-6 justify-content-center">{props.precio} $</h6>
            </div>

            <div class="row col-12 justify-content-center" style={{ margin: 0 }}>
              <div className="col-4 justify-content-center">
                <button className="btn btn-primary" style={{ background: "#323232", border: 0, width: "4vw" }} onClick={(e) => setValor(valor - 1)}>
                  <BsFillBagDashFill></BsFillBagDashFill>
                </button>
              </div>
              <div className="col-4 justify-content-center">
                <button className="btn btn-primary" style={{ background: "#323232", border: 0, width: "4vw" }} onClick={(e) => setValor(valor + 1)}>
                  <BsFillBagPlusFill></BsFillBagPlusFill>
                </button>
              </div>
              <div className="col-4 justify-content-center">
                <Button className="btn btn-primary" style={{ background: "#323232", border: 0, width: "4vw" }} onClick={(e) => Delete2(props.id,props.set,props.largo)}>
                  <BsFillBagXFill></BsFillBagXFill>
                </Button>
              </div>
            </div>
            <div class="row col-12 justify-content-center" style={{ margin: 0 }}>
              <div className="col-4 justify-content-center">Cantidad:</div>
              <div className="col-4 justify-content-center">{valor}</div>
              <div className="col-4 justify-content-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
