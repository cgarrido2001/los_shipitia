import { useState } from "react";
import { BsFillBagDashFill } from "react-icons/bs";
import { BsFillBagPlusFill } from "react-icons/bs";

export default function CardsCarro(props) {
  const [valor, setValor] = useState(1);
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
              <div className="col-4 justify-content-center">{props.boton}</div>
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
