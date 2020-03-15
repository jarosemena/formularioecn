
import React from 'react';
import Nav from '../components/navbar'
import Formulario from '../components/Formulario'
import Formulariodet from '../components/FormularioDetalle'
import 'bootstrap/dist/css/bootstrap.css';


const Novio ="";
const Novia ="";
const FDS =0;
const NocheInfo="";

class Solicitud extends React.Component {
     state={};

     FDS = this.props.FDS;
     NocheInfo =this.props.NocheInfo;
    
    render() {
        return (
        <div class-name="container" >
            
            <Nav />
            <h1>Prueba de solicitud</h1>
           <div className="container-fluid">
               <div className="row">
                   <div className="col col-2">

                   </div>
                   <div className="col col-8">
                   <Formulario TipoPesrona="Novio" Cedula={this.state.Novio}/>
                       </div>

               </div>
               <div className="row">
                   <div className="col col-2">

                   </div>
                   <div className="col col-8">
                   <Formulariodet TipoPesrona="Novio" Cedula={this.state.Novio}/>
                       </div>

               </div>
               <div className="row">
                   <div className="col col-2">

                   </div>
                   <div className="col col-8">
                   <Formulario TipoPesrona="Novia" Cedula={this.state.Novia}/>
                       </div>

               </div>
               <div className="row">
                   <div className="col col-2">

                   </div>
                   <div className="col col-8">
                   <Formulariodet TipoPesrona="Novia" Cedula={this.state.Novia}/>
                       </div>

               </div>
           </div>
           
        </div>

        )
}
}

export default Solicitud;