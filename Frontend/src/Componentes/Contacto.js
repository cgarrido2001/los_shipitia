import React from "react";
import { IoStorefrontOutline } from "react-icons/io5";
import { BsFacebook, BsInstagram, BsGithub, BsTwitter } from "react-icons/bs";


class Contacto extends React.Component {

  render() {
    return (
        <div className="row d-flex justify-content-center">
        <div className="col-sm-12 mb-5">
          <div className="container-fluid d-flex justify-content-center mb-3">
            <IoStorefrontOutline size={35} style={{ color: "#ffffff" }}></IoStorefrontOutline>
            <h2 className="text-center m-0" style={{ color: "#ffffff" }}>
              UBICACION DEL LOCAL
            </h2>
          </div>
          <div className="container-fluid d-flex justify-content-center p-0">
            <iframe  className="w-75" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.553942586581!2d-70.61617329843413!3d-33.43487179999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf79590fbf55%3A0x6b45e21872ef8e02!2sAntonio%20Varas%20880%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1668123473007!5m2!1ses!2scl" height={400} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="col-sm-12">
          <h1 className="text-center text-white">Redes Sociales</h1>
          <div className="container-fluid d-flex justify-content-center">
            <a className="text-decoration-none">
              <BsFacebook style={{ color: "#1e90ff" }} size={40} className="mx-3"></BsFacebook>
            </a>
            <a className="text-decoration-none">
              <BsInstagram style={{ color: "#f944ff" }} size={40} className="mx-3"></BsInstagram>
            </a>
            <a className="text-decoration-none">
              <BsTwitter style={{ color: "#4bcffa" }} size={40} className="mx-3"></BsTwitter>
            </a>
            <a className="text-decoration-none">
              <BsGithub style={{ color: "#d2dae2" }} size={40} className="mx-3"></BsGithub>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacto;