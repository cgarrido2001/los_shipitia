import Prueba from "../mocking/perfiles";
import { TbUser } from "react-icons/tb";
import { IoMaleFemaleSharp } from "react-icons/io5";
import { BsTelephone, BsCalendar2Date } from "react-icons/bs";
import { HiOutlineIdentification } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const ADD_USUARIO = gql`
  mutation AgregarUsuario(
    $email: String!
    $nombre: String!
    $password: String!
    $apellido: String!
    $rut: String!
    $telefono: String!
    $sexo: String!
    $fechaNacimiento: String!
  ) {
    agregarUsuario(input: {email: $email, nombre:$nombre, password: $password, apellido: $apellido, rut: $rut, telefono: $telefono, sexo: $sexo, fechaNacimiento: $fechaNacimiento}) {
      email
      nombre
      password
      apellido
      id
      rut
      telefono
      sexo
      fechaNacimiento
    }
  }
`




export default function FormRegister(props) {
  const [addU, {data,loading,error}] = useMutation(ADD_USUARIO);
  const [formState, setFormState] = useState({
    email: String,
    password: String,
    nombre: String,
    apellido: String,
    rut: String,
    telefono: String,
    sexo: String,
    fechaNacimiento: String
  });


  const Registro = (funcion) => {
    if(error){
      alert('Error al registrarse');
    }else{
      alert("Registrado con exito, ya puedes cerrar esta pagina.");
      funcion(false);
    }
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
        <form className="row g-3" onSubmit={ e => {
          e.preventDefault();
          addU({
            variables:{
              email: formState.email,
              password: formState.password,
              nombre: formState.nombre,
              apellido: formState.apellido,
              rut: formState.rut,
              telefono: formState.telefono,
              sexo: formState.sexo,
              fechaNacimiento: formState.fechaNacimiento
            }
          })
        }}>
          <div className="col-sm-6">
            <label htmlFor="input-para-nombre" className="form-label">
              <b>Nombre</b>
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <TbUser></TbUser>
              </span>
              <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" autoFocus value={formState.nombre} onChange={e => setFormState({...formState,nombre:e.target.value})}/>
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
              <input type="text" className="form-control" id="lastname" placeholder="Enter Lastname" name="lastname" value={formState.apellido} onChange={e => setFormState({...formState,apellido:e.target.value})}/>
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
              <select id="sexo" className="form-select" value={formState.sexo} onChange={e => setFormState({...formState,sexo:e.target.value})}>
                <option defaultValue>Sexo</option>
                <option value="HOMBRE">Masculino</option>
                <option value="MUJER">Femenino</option>
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
              <input type="text" className="form-control" id="rut" placeholder="Enter Rut" name="rut" value={formState.rut} onChange={e => setFormState({...formState,rut:e.target.value})}/>
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
              <input type="text" className="form-control" id="phonenumber" placeholder="Enter Phone number" name="phonenumber" value={formState.telefono} onChange={e => setFormState({...formState,telefono:e.target.value})}/>
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
              <input type="date" className="form-control" id="fecha" placeholder="Enter Birthday" name="fecha" defaultValue={new Date()} min="1950-01-01" max="2030-01-01" value={formState.fechaNacimiento} onChange={e => setFormState({...formState,fechaNacimiento:e.target.value})}/>
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
              <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={formState.email} onChange={e => setFormState({...formState,email:e.target.value})}/>
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
              <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" value={formState.password} onChange={e => setFormState({...formState,password:e.target.value})}/>
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
            <button type="submit" className="btn btn-primary" onClick={(e) => Registro(props.cerrar)}>
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
