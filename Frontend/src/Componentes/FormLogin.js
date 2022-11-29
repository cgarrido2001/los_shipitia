import React from "react";
import { GrMail } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";

class FormLogin extends React.Component {

  render() {
    return (
      <div className="row p-md-5 m-0">
        <div className="col-sm-12 col-md-6 p-5 text-start text-white">
          <h1 className="mt-5">¡Bienvenido!</h1>
          <h1>
            Ingresa a tu cuenta y pide en <b>Fukusuke</b>.
          </h1>
        </div>

        {/* Login de registro */}
        <div className="col-sm-12 col-md-6 p-md-2">
          <h1 className="my-4 text-center">Login</h1>
          <form className="px-5 pb-5 row">
            <div className="input-group mb-3 col-sm-12 col-md-6 px-0">
              <span className="input-group-text" id="basic-addon1">
                <GrMail></GrMail>
              </span>
              <div className="form-floating">
                <input type="text" id='email' className="form-control" placeholder="Email" />
                <label htmlFor="floatingInputGroup1">Email</label>
              </div>
            </div>
            <div className="input-group mb-3 col-sm-12 col-md-6 px-0">
              <span className="input-group-text">
                <RiLockPasswordFill></RiLockPasswordFill>
              </span>
              <div className="form-floating">
                <input type="password" id='pwd' className="form-control" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto mb-4">
              {this.props.boton1}
            </div>
            <a className="col-sm-12 link-dark text-decoration-none p-2" href="/olvido-contraseña">
              <h6 className="text-center m-0" style={{color:'red'}}>¿Se te olvido la contraseña?</h6>
            </a>
            <a className="col-sm-12 link-dark text-decoration-none" href="/registro">
              <h6 className="text-center m-0" style={{color:'red'}}>¿No estás registrado?</h6>
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default FormLogin;
