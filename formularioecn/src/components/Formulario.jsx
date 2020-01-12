import React from 'react';
import "../styles/Formulario.css"
import 'bootstrap/dist/css/bootstrap.css';
import Calendar from 'react-input-calendar'




class Formulario extends React.Component {
    render() {
        return (
            <div class-name="container" >
                <button type="button" class="btn btn-primary">Primary</button>
                <div class-name="container" >
                    <div class-name="row">
                        <div class-name="col" >
                            <div id="col-title">  Información de Novio </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 col-md-4 col-lg-3" id="lbnombre">
                            <div class="form-group">
                                <div class="col-form-label-sm">
                                    <label for="exampleFormControlInput1">1er Nombre</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre"></input>
                                    <label for="exampleFormControlInput1">2do Nombre</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre2"></input>
                                    <label for="exampleFormControlInput1">1er Apellido</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Apellido"></input>
                                    <label for="exampleFormControlInput1">2do Apellido</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Apellido2"></input>

                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-4 col-lg-3" id="lbnombre">
                            <div class="form-group">
                                <div class="col-form-label-sm">

                                    <label for="exampleFormControlInput1">Edad</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Edad"></input>

                                    <label for="exampleFormControlInput1">Cédula</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Cedula"></input>
                                    <label for="exampleFormControlInput1">Fecha Nacimiento</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Fecha Nacimiento"></input>
                                    <label for="exampleFormControlInput1">Nacionalidad</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nacionalidad"></input>

                                    <Calendar format='DD/MM/YYYY' date='4-12-2014' />
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-4 col-lg-3" id="lbnombre">
                            <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
                            <div class="input-group mb-2 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                </div>
                                <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"></input>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>

                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3" id="lbnombre">2do Apellido</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Formulario;