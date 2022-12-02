import React from "react";

export default function Cards(props) {
  return (
    <div>
      <div className="col-4">
        <div className="card" style={{ background: "#202020 ", margin: "0vw", width: "18vw", height: "26vw" }}>
          {/*<img className="card-img-top" src="monster-verde.png" alt="Card image" style="width:100%">*/}
          <div className="card-body">
            <img className="card-img" src={props.foto} alt="Card" height={"55%"} width={"10%"}></img>
            <h5 className="card-title" style={{ color: "white" }}>
              {props.titulo}
            </h5>
            <h6 className="card-text" style={{ color: "white" }}>
              {props.descripcion}
            </h6>
            <h6 className="card-text" style={{ color: "white" }}>
              {props.valor} $
            </h6>
            {props.boton}
          </div>
        </div>
      </div>
    </div>
  );
}
