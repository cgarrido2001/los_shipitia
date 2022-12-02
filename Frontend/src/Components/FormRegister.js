import Prueba from "../mocking/perfiles";
import { TbUser } from "react-icons/tb";
import { IoMaleFemaleSharp } from "react-icons/io5";
import { BsTelephone, BsCalendar2Date } from "react-icons/bs";
import { HiOutlineIdentification } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

export default function FormRegister() {
  const Registro = () => {
    let nombre = document.getElementById("name");
    let apellido = document.getElementById("lastname");
    let rut = document.getElementById("rut");
    let telefono = document.getElementById("phonenumber");
    let sexo = document.getElementById("sexo");
    let cum = document.getElementById("fecha");
    let email = document.getElementById("email");
    let pass = document.getElementById("pwd");

    let todo = { id: Prueba.data.getUsuarios.length + 1, email: email.value, password: pass.value, nombre: nombre.value, apellido: apellido.value, rut: rut.value, telefono: telefono.value, sexo: sexo.value, fecha_nacimiento: cum.value, carro: [], compras: [] };
    Prueba.data.getUsuarios.push(todo);
    console.log(Prueba.data.getUsuarios);
    alert("Registrado con exito, ya puedes cerrar esta pagina.");
  };

  return (
    <div className="row p-md-5 m-0">
      <div className="col-sm-12 col-md-5 p-5 text-start text-white">
        <h1 className="mt-5">¡Hola!</h1>
        <h1>
          Registrate en <b>Fukusuke</b> y ordena tu sushi favorito.
        </h1>
      </div>
      {/* Login de registro */}
      <div className="col-sm-12 col-md-7 p-sm-5 p-md-2">
        <h1 className="my-4 text-center">Register</h1>
        <form className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="input-para-nombre" className="form-label">
              <b>Nombre</b>
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <TbUser></TbUser>
              </span>
              <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" autoFocus />
            </div>
          </div>

          <div className="col-sm-6">
            <label htmlFor="input-para-apellido" className="form-label">
              <b>Apellido</b>
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <TbUser></TbUser>
              </span>
              <input type="text" className="form-control" id="lastname" placeholder="Enter Lastname" name="lastname" />
            </div>
          </div>

          <div className="col-sm-4">
            <label htmlFor="input-para-sexo" className="form-label">
              <b>Sexo</b>
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <IoMaleFemaleSharp></IoMaleFemaleSharp>
              </span>
              <select id="sexo" className="form-select">
                <option defaultValue>Sexo</option>
                <option value="m">Masculino</option>
                <option value="F">Femenino</option>
                <option value="O">Otro</option>
              </select>
            </div>
          </div>

          <div className="col-sm-4">
            <label htmlFor="input-para-rut" className="form-label">
              <b>Rut</b>
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <HiOutlineIdentification></HiOutlineIdentification>
              </span>
              <input type="text" className="form-control" id="rut" placeholder="Enter Rut" name="rut" />
            </div>
          </div>

          <div className="col-sm-4">
            <label htmlFor="input-para-telefono" className="form-label">
              <b>Telefono</b>
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <BsTelephone></BsTelephone>
              </span>
              <input type="text" className="form-control" id="phonenumber" placeholder="Enter Phone number" name="phonenumber" />
            </div>
          </div>

          <div className="col-sm-4">
            <label htmlFor="input-para-fecha" className="form-label">
              <b>Fecha de nacimiento</b>
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <BsCalendar2Date></BsCalendar2Date>
              </span>
              <input type="date" className="form-control" id="fecha" placeholder="Enter Birthday" name="fecha" defaultValue={new Date()} min="1950-01-01" max="2030-01-01" />
            </div>
          </div>

          <div className="col-sm-8">
            <label htmlFor="input-para-email" className="form-label">
              <b>Email</b>
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <AiOutlineMail></AiOutlineMail>
              </span>
              <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
            </div>
          </div>

          <div className="col-sm-6">
            <label htmlFor="input-para-password" className="form-label">
              <b>Contraseña</b>
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <RiLockPasswordLine></RiLockPasswordLine>
              </span>
              <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
            </div>
          </div>

          <div className="col-sm-6">
            <label htmlFor="input-para-password2" className="form-label">
              <b>Repetir contraseña</b>
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <RiLockPasswordLine></RiLockPasswordLine>
              </span>
              <input type="password" className="form-control" id="pwd2" placeholder="Repetir contraseña" name="pswd2" />
            </div>
          </div>

          <div className="d-grid gap-2 col-6 mx-auto mt-5 mb-2">
            <button type="button" className="btn btn-primary" onClick={(e)=> Registro()}>
              Registrar
            </button>
          </div>
          <a className="col-sm-12 link-dark text-decoration-none" href="/login">
            <h6 className="text-center m-0">Ya tengo cuenta</h6>
          </a>
        </form>
      </div>
    </div>
  );
}
