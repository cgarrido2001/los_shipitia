import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiDrippingKnife } from "react-icons/gi";

class Footer extends React.Component {

  evaluar(){
    if(sessionStorage.getItem('sesion') === 'true'){
      return(
        <li style={{color: "red"}}>
          {this.props.boton2}
        </li>
      )
    }else{
      return(
        <></>
      )
    }
  }



  render() {
    return (
      <div>
        <footer className="container-fluid py-3" style={{ backgroundColor: "#1A1919"}}>
          <div className="row px-4">
            <a className="col-sm-12 d-flex align-items-center justify-content-center link-dark text-decoration-none" href="/" style={{color:"red"}}>
              <IoFastFoodOutline size={25} className="d-inline-block align-text-top text-white"></IoFastFoodOutline>
              <h4 className="m-0 ps-1" style={{color:"red"}}>Fukusuke Sushi</h4>
            </a>
          </div>
          <div className="row px-4">
            <div className="col-sm-12">
              <ul className="container d-flex justify-content-center nav p-0">
                <li className="nav-item mx-1">
                  {this.props.boton4}
                </li>
                <li className="nav-item mx-1">
                  {this.props.boton3}
                </li>
                
                {this.evaluar()}
                
                <li className="nav-item mx-1">
                  {this.props.boton1}
                </li>
              </ul>
            </div>
          </div>
          <div className="row px-4 ">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-white">
              <h6 className="mb-0 mx-2" style={{color:"red"}}>© 2022 Fukusuke Sushi.</h6>
              <p className="my-0 mx-2" style={{color:"red"}}>Todos los derechos reservados.</p>
            </div>
          </div>
          <div className="row mt-2 px-4">
            <a id="LOS_SHIPITIA" className="col-sm-12 d-flex align-items-center justify-content-center link-dark text-decoration-none" href="https://www.youtube.com/watch?v=cG1M128Vjhw">
              <h6 className="m-0 ps-1 text-white">
                <span>By:</span>
                <GiDrippingKnife size={25} className="d-inline-block align-text-top ms-1" style={{color:"red"}}></GiDrippingKnife>
                <b style={{color:"red"}}>LOS SHIPITIA</b>
              </h6>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
