import React from 'react';
import "../styles/Formulario.css"
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import Calendar from 'react-input-calendar'
=======

>>>>>>> master




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
<<<<<<< HEAD
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
=======

                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">1er Nombre</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre"></input>
                        </div>
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">2do Nombre</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre2"></input>
                        </div>
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">1er Apellido</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Apellido"></input>
                        </div>
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">2do Apellido</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Apellido2"></input>
                        </div>

                    </div>
                    <div class="row">
                        <hr></hr>

                    </div>
                    <div class="row">
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">Edad</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Edad"></input>

                        </div>
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">Cédula</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Cedula"></input>

                        </div>
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">Fecha Nacimiento</label>
                            <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Fecha Nacimiento"></input>
¿¿¿¿¿
                        </div>
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">Nacionalidad</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nacionalidad"></input>

                        </div>

                    </div>
                    <div class="row" >
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">Celular</label>
                            <input type="Number" class="form-control" id="exampleFormControlInput1" placeholder="Celular"></input>

                        </div>
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">Tel. Casa</label>
                            <input type="Number" class="form-control" id="exampleFormControlInput1" placeholder="Telefono"></input>

                        </div>
                        <div class="col-form-label-sm col-12 col-md-6 col-lg-6" id="lbnombre">
                            <label for="exampleFormControlInput1">Dirección</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Direccion"></input>

                        </div>
                    </div>
                    <div class="row" >



                        <div class="col-form-label-sm  col-8 col-md-6 col-lg-6" id="lbnombre">
                            <label for="exampleFormControlInput1">Correo Electronico</label>
                            <div class="input-group mb-2 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                </div>
                                <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="email@example.com"></input>
                            </div>
                        </div>
                        <div class="col-form-label-sm col-4 col-md-6 col-lg-6" id="lbnombre">
                            <label for="exampleFormControlInput1">Ocupación</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ocupación"></input>

                        </div>

                    </div>
                    <div class="row">
                        <hr></hr>

                    </div>


                    <div class="row">
                        <div class="col-form-label-sm col-8 col-md-6 col-lg-5 col-xl-4" id="lbnombre">
                            <label for="exampleFormControlInput1">Alérgico (a) a algún alimentación/Medicamento </label> <a>  </a>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions0" id="inlineRadio1" value="option1"></input>
                                <label class="form-check-label" for="inlineRadio1">Sí</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" defaultChecked name="inlineRadioOptions0" id="inlineRadio2" value="option2"></input>
                                <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>

                        </div>
                        <div class="col-form-label-sm col-4 col-md-6 col-lg-7 col-xl-8" id="lbnombre">
                            <label for="exampleFormControlInput1">Detalle</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Alergias"></input>

                        </div>

                    </div>
                    <div class="row">
                        <div class="col-form-label-sm col-1" id="lbnombre">
                            <label for="exampleFormControlInput1">Padre o Madre</label>
                        </div>
                        <div class="col-form-label-sm col-5 col-md-5 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">Nombre</label>
                            <input type="Text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre"></input>

                        </div>
                        <div class="col-form-label-sm col-6 col-md-6 col-lg-2" id="lbnombre">

                            <label for="exampleFormControlInput1">Celular</label>
                            <input type="Number" class="form-control" id="exampleFormControlInput1" placeholder="Celular"></input>

                        </div>
                        <div class="col-form-label-sm  col-6 col-md-6 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">Correo Electronico</label>
>>>>>>> master
                            <div class="input-group mb-2 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                </div>
<<<<<<< HEAD
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
=======
                                <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="email@example.com"></input>
                            </div>

                        </div>
                        <div class="col-form-label-sm col-6 col-md-6 col-lg-3 " id="lbnombre">
                            <label for="exampleFormControlInput1">   Vive en El extranjero o en el Interior del país </label> <a>  </a>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1"></input>
                                <label class="form-check-label" for="inlineRadio1">Sí</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" defaultChecked name="inlineRadioOptions1" id="inlineRadio2" value="option2"></input>
                                <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <hr></hr>

                    </div>
                    <div class="row">
                        <div class="col-form-label-sm col-6 col-md-6 col-lg-4" id="lbnombre">
                            <label for="exampleFormControlInput1">Religión</label>
                            <input type="Text" class="form-control" id="exampleFormControlInput1" placeholder="Religión"></input>

                        </div>
                        <div class="col-form-label-sm col-6 col-md-6 col-lg-4" id="lbnombre">

                            <label for="exampleFormControlInput1">Parroquia a la que pertenece</label>
                            <input type="Number" class="form-control" id="exampleFormControlInput1" placeholder="Parroquia"></input>

                        </div>

                        <div class="col-form-label-sm col-12 col-md-6 col-lg-4 " id="lbnombre">
                            <label for="exampleFormControlInput1"> ¿Ha estado Casado por la Iglesia ?</label> <a>  </a>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio1" value="option1"></input>
                                <label class="form-check-label" for="inlineRadio1">Sí</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" defaultChecked name="inlineRadioOptions2" id="inlineRadio2" value="option2"></input>
                                <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>

                        </div>

                    </div>

                    <div class="row">
                        <hr></hr>

                    </div>
                    <div class="row">
                        <div class="col-form-label-sm col-12  " id="lbnombre">
                            <label for="exampleFormControlInput1"> ¿ Tiene parientes o amigos que han vivido el Encuentro de Novios ?</label> <a>  </a>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio1" value="option1"></input>
                                <label class="form-check-label" for="inlineRadio1">Sí</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" defaultChecked name="inlineRadioOptions3" id="inlineRadio2" value="option2"></input>
                                <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>

                        </div>

                    </div>

                    <div class="row">
                        <div class="col-form-label-sm col-6 col-md-6 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1"> ¿ Ha estado casado por la iglesia ?</label> <a>  </a>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio1" value="option1"></input>
                                <label class="form-check-label" for="inlineRadio1">Sí</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" defaultChecked name="inlineRadioOptions4" id="inlineRadio2" value="option2"></input>
                                <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>

                        </div>


                        <div class="col-form-label-sm col-6 col-md-6 col-lg-3" id="lbnombre">

                            <label for="exampleFormControlInput1">Cuantos tiempo <input type="Number" class="form-control" id="exampleFormControlInput1" placeholder="..."></input></label>
                            

                        </div>
                        <div class="col-form-label-sm col-6 col-md-6 col-lg-3 " id="lbnombre">
                            <label for="exampleFormControlInput1"> ¿ Mantiene union de Hecho ?</label> <a>  </a>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                                <label class="form-check-label" for="inlineRadio1">Sí</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" defaultChecked name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                                <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>

                        </div>


                        <div class="col-form-label-sm col-6 col-md-6 col-lg-3" id="lbnombre">

                            <label for="exampleFormControlInput1">Cuanto Tiempo <input type="Number" class="form-control" id="exampleFormControlInput1" placeholder="..."></input></label>
                            

                        </div>

                    </div>

                    <div class="row">
                        <hr></hr>

                    </div>
                    +ss="col-form-label-sm col-12 " id="lbnombre">
                        <label for="colFormLabelSm">En Caso de Emergencia Contactar a:</label>
                        </div>
                        </div>
                    <div class="row">
                    <div class="col-form-label-sm col-4 col-md-4 " id="lbnombre">
                    
                            <label for="exampleFormControlInput1">Nombre</label>
                            <input type="Text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre"></input>

                        </div>
                        <div class="col-form-label-sm col-4 col-md-4 " id="lbnombre">

                            <label for="exampleFormControlInput1">Parentensco</label>
                            <input type="Text" class="form-control" id="exampleFormControlInput1" placeholder="Parentesco"></input>

                        </div>
                        <div class="col-form-label-sm col-4 col-md-4 " id="lbnombre">

                            <label for="exampleFormControlInput1">Celular</label>
                            <input type="Number" class="form-control" id="exampleFormControlInput1" placeholder="Celular"></input>

                        </div>

                    </div>





                </div >
            </div >

>>>>>>> master
        )
    }
}

export default Formulario;