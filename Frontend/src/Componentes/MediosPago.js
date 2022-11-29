import React from "react";

class MediosPagos extends React.Component {
  MandaBanco() {
    alert("Aqui redirige al banco");
  }

  render() {
    return (
      <div class="row p-md-5 m-0">
        <div class="col-sm-12 col-md-5 p-5 text-start text-white">
          <h1 class="mt-5"> Selecciona tu metodo</h1>
          <h1 class="mt-5"> de pago</h1>
        </div>

        <div class="col-sm-12 col-md-7 p-sm-5 p-md-2">
          <div className="card" style={{ background: "#1A1919" }}>
            <div className="row align-items-center">
              <img className="card-img col-6" src={"https://res.cloudinary.com/dywcwaf57/image/upload/v1669739511/webpay_uijroa.jpg"} alt="Card" style={{ height: "6vw", width: "8vw" }}></img>
              <div className="col-4" style={{ background: "#1A1919" }}></div>
              <button className="btn btn-danger col-2" type="button" style={{ height: "3vw", background: "#1A1919" }} onClick={(e) => this.MandaBanco()}>
                Ir al pago
              </button>
            </div>
          </div>
          <div className="row" style={{ height: "1vw" }}></div>
          <div className="card" style={{ background: "#1A1919" }}>
            <div className="row align-items-center">
              <img className="card-img col-6" src={"https://res.cloudinary.com/dywcwaf57/image/upload/v1669739514/Paypal_grn6lm.jpg"} alt="Card" style={{ height: "6vw", width: "8vw" }}></img>
              <div className="col-4" style={{ background: "#1A1919" }}></div>
              <button className="btn btn-danger col-2" type="button" style={{ height: "3vw", background: "#1A1919" }} onClick={(e) => this.MandaBanco()}>
                Ir al pago
              </button>
            </div>
          </div>
          <div className="row" style={{ height: "1vw" }}></div>
          <div className="card" style={{ background: "#1A1919" }}>
            <div className="row align-items-center">
              <img className="card-img col-6" src={"https://res.cloudinary.com/dywcwaf57/image/upload/v1669739513/creditcard_rhsotr.png"} alt="Card" style={{ height: "6vw", width: "8vw" }}></img>
              <div className="col-4" style={{ background: "#1A1919" }}></div>
              <button className="btn btn-danger col-2" type="button" style={{ height: "3vw", background: "#1A1919" }} onClick={(e) => this.MandaBanco()}>
                Ir al pago
              </button>
            </div>
          </div>
          <div className="row" style={{ height: "1vw" }}></div>
          <div className="card" style={{ background: "#1A1919" }}>
            <div className="row align-items-center">
              <img className="card-img col-6" src={"https://res.cloudinary.com/dywcwaf57/image/upload/v1669739510/bank_i14vho.jpg"} alt="Card" style={{ height: "6vw", width: "8vw" }}></img>
              <div className="col-4" style={{ background: "#1A1919" }}></div>
              <button className="btn btn-danger col-2" type="button" style={{ height: "3vw", background: "#1A1919" }} onClick={(e) => this.MandaBanco()}>
                Ir al pago
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MediosPagos;
