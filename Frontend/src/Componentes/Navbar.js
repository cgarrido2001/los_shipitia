import React from "react";

class Navbar extends React.Component {
  evaluar() {
    if (sessionStorage.getItem("sesion") === "false") {
      return <li style={{ color: "red" }}>{this.props.boton3}</li>;
    } else {
      return <></>;
    }
  }

  evaluar2() {
    if (sessionStorage.getItem("sesion") === "false") {
      return <li style={{ color: "red" }}>{this.props.boton4}</li>;
    } else {
      return <></>;
    }
  }

  sesionIniciada() {
    if (sessionStorage.getItem("sesion") === "true") {
      return <li style={{ color: "red" }}>{this.props.boton5}</li>;
    } else {
      return <></>;
    }
  }

  getEstado() {
    let data = sessionStorage.getItem("sesion");
    return data;
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm" style={{ background: "#1A1919" }}>
          <div class="container-fluid">
            <div class="navbar-brand">
              <img class="img-fluid" src={"https://res.cloudinary.com/dywcwaf57/image/upload/v1669739510/a_ew8nyf.jpg"} alt="New York" width="200" height="100" />
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">{this.props.boton1}</li>

                {this.evaluar()}
                {this.evaluar2()}
                {this.sesionIniciada()}
              </ul>
            </div>
          </div>
        </nav>

        <div class="modal" id="myModal">
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Modal Heading</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div class="modal-body">Modal body..</div>

              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal" id="myModal2">
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Modal Heading 2 </h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div class="modal-body">Modal body 2</div>

              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal" id="myModal3">
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Modal Heading 3</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div class="modal-body">Modal body 3</div>

              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal" id="myModal4">
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Modal Heading 4</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div class="modal-body">Modal body 4</div>

              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
