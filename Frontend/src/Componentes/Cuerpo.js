import React from "react";
import Carousel from "./Carousel";
import Carru1 from './img/carru1.jpg'
import Logo from "./img/a.jpg";

class Cuerpo extends React.Component {
  render() {
    return (
      <div>
        <div class="row justify-content-center" style={{ height: "500px", background: "#1D1D1D", color: "white" }}>
          <div class="col-10">
            <Carousel foto1={Carru1}></Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Cuerpo;
