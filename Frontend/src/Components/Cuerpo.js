import Carousel from "./Carousel";

export default function Cuerpo() {
  return (
    <div>
      <div className="row justify-content-center" style={{ height: "500px", background: "#1D1D1D", color: "white" }}>
        <div className="col-10">
          <Carousel foto1={"https://res.cloudinary.com/dywcwaf57/image/upload/v1669739511/carru1_pyctyb.jpg"}></Carousel>
        </div>
      </div>
    </div>
  );
}
