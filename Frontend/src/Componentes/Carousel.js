import React from "react";

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
              <img src="https://res.cloudinary.com/dywcwaf57/image/upload/v1669739512/carusel1_jem54c.jpg" alt="Los Angeles" class="mx-auto d-block" style={{ width: 1000, height: 470 }} />
            </div>
            <div class="carousel-item">
              <img src="https://res.cloudinary.com/dywcwaf57/image/upload/v1669739511/carusel2_kssycy.jpg" alt="Los Angeles" class="mx-auto d-block" style={{ width: 1000, height: 470 }} />
            </div>
            <div class="carousel-item">
              <img src="https://res.cloudinary.com/dywcwaf57/image/upload/v1669739512/carusel3_fb5czm.jpg" alt="Los Angeles" class="mx-auto d-block" style={{ width: 1000, height: 470 }} />
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
