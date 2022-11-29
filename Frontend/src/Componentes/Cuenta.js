import React from "react";
import datos from "../mocking/perfiles";

class Cuenta extends React.Component {


    constructor(props){
        super(props)
        this.state={
            estado1: false,
            estado2: true,
            estado3: false,
            Login: true
        }
    }

    funcionestado1(){
        this.setState({estado1: true})
        this.setState({estado2: false})
        this.setState({estado3: false})
        
    }
    funcionestado2(){
        this.setState({estado1: false})
        this.setState({estado2: true})
        this.setState({estado3: false})
    }
    funcionestado3(){
        this.setState({estado1: false})
        this.setState({estado2: false})
        this.setState({estado3: true})
    }

    funcionCompras(element){
        return( datos.data.getCompras.map((obj) =>{
            
            if(obj.id===element){
                return (<div className="row rounded-3 align-items-center border border-danger" style={{background: '#323232', height:'3vw'}}>
                    <div className="col-4 justify-content-center">{obj.id}</div>
                    <div className="col-4 justify-content-center">{obj.fecha}</div>
                    <div className="col-4 justify-content-center">{obj.monto} $</div>
                </div>)
            }
            return <></>
        }))
    }

    filtrar(){
        let data = sessionStorage.getItem('Usuario')
        data = JSON.parse(data)

        return (data.compras.map((element) => {
            return this.funcionCompras(element)
        }))
    }

    mapeoUsuario(){
        let data = sessionStorage.getItem('Usuario')
        data = JSON.parse(data)
        return (<div className="col-8">
                <h4 className="row rounded-3 align-items-center justify-content-center" style={{height:'3vw', background: '#323232'}}>{data.nombre}</h4>
                <h4 className="row rounded-3 align-items-center justify-content-center" style={{height:'3vw'}}>{data.apellido}</h4>
                <h4 className="row rounded-3 align-items-center justify-content-center" style={{height:'3vw', background: '#323232'}}>{data.rut}</h4>
                <h4 className="row rounded-3 align-items-center justify-content-center" style={{height:'3vw'}}>{data.email}</h4>
                <h4 className="row rounded-3 align-items-center justify-content-center" style={{height:'3vw', background: '#323232'}}>{data.fecha_nacimiento}</h4>
                <h4 className="row rounded-3 align-items-center justify-content-center" style={{height:'3vw'}}>{data.telefono}</h4>

        </div>)
    }

    

    queMostrar(){
        if(this.state.estado1 === true){
            return (<div>
                <div className="row" style={{color: 'red'}}>
                    <h4 className="col-4 justify-content-center">Id pedido</h4>
                    <h4 className="col-4 justify-content-center">Fecha pedido</h4>
                    <h4 className="col-4 justify-content-center">Monto</h4>
                </div>
                {this.filtrar()}
                
            </div>)
        }else{
            if(this.state.estado2=== true){
                return (<div className="row align-items-center">
                    <div className="col-4">
                        <h4 className="row rounded-3 align-items-center justify-content-center" style={{height:'3vw', background: '#323232'}}>Nombre</h4>
                        <h4 className="row rounded-3 align-items-center justify-content-center" style={{height:'3vw'}}>Apellido</h4>
                        <h4 className="row rounded-3 align-items-center justify-content-center" style={{height:'3vw', background: '#323232'}}>Rut</h4>
                        <h4 className="row rounded-3 align-items-center justify-content-center" style={{height:'3vw'}}>Correo</h4>
                        <h4 className="row rounded-3 align-items-center justify-content-center" style={{height:'3vw', background: '#323232'}}>Fecha de nacimiento</h4>
                        <h4 className="row rounded-3 align-items-center justify-content-center" style={{height:'3vw'}}>Telefono</h4>
                    </div>
                    
                    {this.mapeoUsuario()}

                    

                </div>)
            }else{
                if(this.state.estado3=== true){
                    return (this.cerrarSesion())
                        
                }else{
                    <></>
                }
            }
        }
        
    }

  render() {
    return (
      <div className="row p-md-5 m-0">
        <div className="col-sm-12 col-md-4 p-5 text-start text-white">
          <ul>
            <li className="d-flex nav-item justify-content-center align-items-center" style={{height:'5vw', background:"#1A1919"}}>
                <button className="btn btn-danger" style={{background:"#262525", width:'24vw', height:'3vw'}} onClick={(e) => this.funcionestado2()}>Mi perfil</button>
            </li>
            <li className="d-flex nav-item justify-content-center align-items-center" style={{height:'5vw', background:"#1A1919"}}>
                <button className="btn btn-danger" style={{background:"#262525", width:'24vw', height:'3vw'}} onClick={(e) => this.funcionestado1()}>Historial de pedidos</button>
            </li>
            <li className="d-flex nav-item justify-content-center align-items-center" style={{height:'5vw', background:"#1A1919"}}>
                {this.props.boton1}
            </li>            
          </ul>
        </div>

        <div className="col-sm-12 col-md-8 p-5 text-start text-red">
            {this.queMostrar()}
        </div>


      </div>
    );
  }
}

export default Cuenta;
