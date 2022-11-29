import React from "react";
import Carousel from "./Carousel";

class Cuerpo extends React.Component {
  render() {
    return (
      <div>
        <div class="row justify-content-center" style={{ height: "500px", background: "#1D1D1D", color: "white" }}>
          <div class="col-10">
            <Carousel foto1={"https://res.cloudinary.com/dywcwaf57/image/upload/v1669739511/carru1_pyctyb.jpg"} ></Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Cuerpo;
