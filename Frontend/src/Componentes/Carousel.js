import React from "react";
import Foto1 from './img/carusel1.jpeg'
import Foto2 from './img/carusel2.jpeg'
import Foto3 from './img/carusel3.jpeg'


class Carousel extends React.Component {
  render() {
    return (
      <div>
        <div id="demo" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          </div>

          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img src={Foto1} alt="Los Angeles" class="mx-auto d-block" style={{width: 1000, height:470}} />
            </div>
            <div class="carousel-item">
              <img src={Foto2} alt="Los Angeles" class="mx-auto d-block" style={{width: 1000, height:470}} />
            </div>
            <div class="carousel-item">
              <img src={Foto3} alt="Los Angeles" class="mx-auto d-block" style={{width: 1000, height:470}} /> 
            </div> 
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
