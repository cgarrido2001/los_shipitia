




export default function Navbar(props) {

  

  const Evaluar = () => {
      if (props.Logged === false) {
        return <li style={{ color: "red" }}>{props.boton3}</li>;
      } else {
        return <></>;
      }
    };


  const Evaluar2 = () => {
    if (props.Logged === false) {
      return <li style={{ color: "red" }}>{props.boton4}</li>;
    } else {
      return <></>;
    }
  };

  const SesionIniciada = () => {
    if (props.Logged === true) {
      return <li style={{ color: "red" }}>{props.boton5}</li>;
    } else {
      return <></>;
    }
  };

  const GetEstado = () => {
    let data = sessionStorage.getItem("sesion");
    return data;
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm" style={{ background: "#1A1919" }}>
        <div className="container-fluid">
          <div className="navbar-brand">
            <img className="img-fluid" src={"https://res.cloudinary.com/dywcwaf57/image/upload/v1669739510/a_ew8nyf.jpg"} alt="New York" width="200" height="100" />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">{props.boton1}</li>

              {Evaluar()}
              {Evaluar2()}
              {SesionIniciada()}
            </ul>
          </div>
        </div>
      </nav>

      <div className="modal" id="myModal">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">Modal body..</div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="myModal2">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading 2 </h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">Modal body 2</div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="myModal3">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading 3</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">Modal body 3</div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="myModal4">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading 4</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">Modal body 4</div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
