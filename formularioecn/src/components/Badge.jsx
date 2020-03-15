import React from 'react';
import "../styles/Badge.css";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../images/logoecn.jpg";


const FDS = 151;

const NombreNovio = "Jose Jair";
const NombreNovia = "Diana Lys";


class Badge extends React.Component {
    render() {
        return (
       
            <div class-name="container" >
                <div class="row justify-content-md-center ">

                         <div class="col-form-label-sm col-12" id="lbnombre">
                           <img src={logo} alt="Logo del ECN" />
                            <label for="titulo">Fin de Semana del Encuentro Catolico para Novios N {FDS}</label>
                            <p></p>
                            <label for="Pareja"> {NombreNovio}  &amp;  {NombreNovia} </label>
                        </div>
                        
                </div>
            </div>
       
        )
        }
        }

        export default Badge;