export default function Carousel() {
  return (
    <div>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src="https://res.cloudinary.com/dywcwaf57/image/upload/v1669739512/carusel1_jem54c.jpg" alt="Los Angeles" className="mx-auto d-block" style={{ width: 1000, height: 470 }} />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dywcwaf57/image/upload/v1669739511/carusel2_kssycy.jpg" alt="Los Angeles" className="mx-auto d-block" style={{ width: 1000, height: 470 }} />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dywcwaf57/image/upload/v1669739512/carusel3_fb5czm.jpg" alt="Los Angeles" className="mx-auto d-block" style={{ width: 1000, height: 470 }} />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}
