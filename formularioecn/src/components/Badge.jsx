import React from 'react';
import "../styles/Badge.css";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../images/logoecn.jpg";

/*
const FDS = 151;
const fechaini = '2020/03/13';
const fechafin = '2020/03/15';
const NombreNovio = "Jose Jair";
const NombreNovia = "Diana Lys";
*/

class Badge extends React.Component {
    render() {
        return (

                  
            <div class-name="container" >
                <div class="row justify-content-md-center ">
                <img src={logo} alt="Logo del ECN" />
                        
                </div>
                <div class="row justify-content-md-center ">
                <label for="titulo">Fin de Semana del Encuentro Catolico para Novios </label>
                            
                            
                </div>
                <div class="row justify-content-md-center ">
                <label for="Pareja"> {this.props.NombreNovio}  &amp;  {this.props.NombreNovia} </label>
                </div>

                <div class="row justify-content-md-center ">
                <label for="solicitud"> su solicitud para participar en el fin de semana N° {this.props.FDS} esta en proceso! </label>
                </div>
                <div class="row justify-content-md-center ">
                <label for="solicitud"> el mismo se realizara en las fecha entre {this.props.fechaini} y {this.props.fechafin} </label>
                </div>
            </div>
       
        )
        }
        }

        export default Badge;