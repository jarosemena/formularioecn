import React from 'react';
import "../styles/Formulario.css"
import 'bootstrap/dist/css/bootstrap.css';




class Formulario extends React.Component {
    
state={};

    handleChange = (e) => {
    console.log({ name: e.target.name, value : e.target.value, });
      this.setState ({
        [e.target.name]: e.target.value
      });
    }
    handleClick = (e) => {
        console.log("el boton de guarddo fue ejecutado");
    
        }
        handleSubmit = (e) => {
            e.preventDefault();
            console.log("se preevino el submit");
            }    
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
            <div class-name="container" >
                <button onClick={this.handleClick} type="button" class="btn btn-primary">Guardar</button>
                
                <div class-name="container" >
                    <div class-name="row">
                        <div class-name="col" >
                            <div id="col-title">  Información de Novio </div>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">1er Nombre</label>
                            <input onChange={this.handleChange} type="text" class="form-control" name="Nombre" value = {this.state.Nombre} placeholder="Nombre"></input>
                        </div>
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">2do Nombre</label>
                            <input onChange={this.handleChange} type="text" class="form-control" name="Nombre2" value = {this.state.Nombre2} placeholder="Nombre2"></input>
                        </div>
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">1er Apellido</label>
                            <input onChange={this.handleChange} type="text" class="form-control" name="apellido" value = {this.state.apellido} placeholder="Apellido"></input>
                        </div>
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">2do Apellido</label>
                            <input onChange={this.handleChange} type="text" class="form-control" name="apellido2" value = {this.state.apellido2} placeholder="Apellido2"></input>
                        </div>

                    </div>
                    <div class="row">
                        <hr></hr>

                    </div>
                    <div class="row">
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">Edad</label>
                            <input onChange={this.handleChange} type="text" class="form-control" name="edad" value = {this.state.edad} placeholder="Edad"></input>

                        </div>
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">Cédula</label>
                            <input onChange={this.handleChange} type="text" class="form-control" name="cedula" value = {this.state.cedula} placeholder="Cedula"></input>

                        </div>
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">Fecha Nacimiento</label>
                            <input onChange={this.handleChange} type="date" class="form-control" name="nacimiento" value = {this.state.nacimiento} placeholder="Fecha Nacimiento"></input>

                        </div>
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">Nacionalidad</label>
                            <input onChange={this.handleChange} type="text" class="form-control" name="nacionalidad" value = {this.state.nacionalidad} placeholder="Nacionalidad"></input>

                        </div>

                    </div>
                    <div class="row" >
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">Celular</label>
                            <input onChange={this.handleChange} type="Number" class="form-control" name="Celular" value = {this.state.Celular} placeholder="Celular"></input>

                        </div>
                        <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">Tel. Casa</label>
                            <input onChange={this.handleChange} type="Number" class="form-control" name="Tel" value = {this.state.Tel} placeholder="Telefono"></input>

                        </div>
                        <div class="col-form-label-sm col-12 col-md-6 col-lg-6" id="lbnombre">
                            <label for="exampleFormControlInput1">Dirección</label>
                            <input onChange={this.handleChange} type="text" class="form-control" name="Dirección" value = {this.state.Dirección} placeholder="Direccion"></input>

                        </div>
                    </div>
                    <div class="row" >



                        <div class="col-form-label-sm  col-8 col-md-6 col-lg-6" id="lbnombre">
                            <label for="exampleFormControlInput1">Correo Electronico</label>
                            <div class="input-group mb-2 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                </div>
                                <input onChange={this.handleChange} type="email" class="form-control" name="Correo" value = {this.state.Correo} placeholder="email@example.com"></input>
                            </div>
                        </div>
                        <div class="col-form-label-sm col-4 col-md-6 col-lg-6" id="lbnombre">
                            <label for="exampleFormControlInput1">Ocupación</label>
                            <input onChange={this.handleChange} type="text" class="form-control" name="Ocupación" value = {this.state.Ocupación} placeholder="Ocupación"></input>

                        </div>

                    </div>
                    <div class="row">
                        <hr></hr>

                    </div>


                    <div class="row">
                        <div class="col-form-label-sm col-8 col-md-6 col-lg-5 col-xl-4" id="lbnombre">
                            <label for="exampleFormControlInput1">Alérgico (a) a algún alimentación/Medicamento </label> 
                            <div class="form-check form-check-inline">
                                <input onChange={this.handleChange} class="form-check-input" type="radio" name="inlineRadioOptions0" id="inlineRadio1" value="option1"></input>
                                <label class="form-check-label" for="inlineRadio1">Sí</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input onChange={this.handleChange} class="form-check-input" type="radio" defaultChecked name="inlineRadioOptions0" id="inlineRadio2" value="option2"></input>
                                <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>

                        </div>
                        <div class="col-form-label-sm col-4 col-md-6 col-lg-7 col-xl-8" id="lbnombre">
                            <label for="exampleFormControlInput1">Detalle</label>
                            <input onChange={this.handleChange} type="text" class="form-control" name="Alergias" value = {this.state.Alergias} placeholder="Alergias"></input>

                        </div>

                    </div>
                    <div class="row">
                        <div class="col-form-label-sm col-1" id="lbnombre">
                            <label for="exampleFormControlInput1">Padre o Madre</label>
                        </div>
                        <div class="col-form-label-sm col-5 col-md-5 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">Nombre</label>
                            <input onChange={this.handleChange} type="Text" class="form-control" name="Contacto" value = {this.state.Contacto} placeholder="Nombre"></input>

                        </div>
                        <div class="col-form-label-sm col-6 col-md-6 col-lg-2" id="lbnombre">

                            <label for="exampleFormControlInput1">Celular</label>
                            <input onChange={this.handleChange} type="Number" class="form-control" name="CelularContacto" value = {this.state.CelularContacto} placeholder="Celular"></input>

                        </div>
                        <div class="col-form-label-sm  col-6 col-md-6 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1">Correo Electronico</label>
                            <div class="input-group mb-2 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                </div>
                                <input onChange={this.handleChange} type="text" class="form-control" name="EmailContacto"  value = {this.state.EmailContacto} placeholder="email@example.com"></input>
                            </div>

                        </div>
                        <div class="col-form-label-sm col-6 col-md-6 col-lg-3 " id="lbnombre">
                            <label for="exampleFormControlInput1">   Vive en El extranjero o en el Interior del país </label> 
                            <div class="form-check form-check-inline">
                                <input onChange={this.handleChange} class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1"></input>
                                <label class="form-check-label" for="inlineRadio1">Sí</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input onChange={this.handleChange} class="form-check-input" type="radio" defaultChecked name="inlineRadioOptions1" id="inlineRadio2" value="option2"></input>
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
                            <input onChange={this.handleChange} type="Text" class="form-control" name="Religión" value = {this.state.Religión} placeholder="Religión"></input>

                        </div>
                        <div class="col-form-label-sm col-6 col-md-6 col-lg-4" id="lbnombre">

                            <label for="exampleFormControlInput1">Parroquia a la que pertenece</label>
                            <input onChange={this.handleChange} type="Number" class="form-control" name="Parroquia" value = {this.state.Parroquia} placeholder="Parroquia"></input>

                        </div>

                        <div class="col-form-label-sm col-12 col-md-6 col-lg-4 " id="lbnombre">
                            <label for="exampleFormControlInput1"> ¿Ha estado Casado por la Iglesia ?</label> 
                            <div class="form-check form-check-inline">
                                <input onChange={this.handleChange} class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio1" value="option1"></input>
                                <label class="form-check-label" for="inlineRadio1">Sí</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input onChange={this.handleChange} class="form-check-input" type="radio" defaultChecked name="inlineRadioOptions2" id="inlineRadio2" value="option2"></input>
                                <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>

                        </div>

                    </div>

                    <div class="row">
                        <hr></hr>

                    </div>
                    <div class="row">
                        <div class="col-form-label-sm col-12  " id="lbnombre">
                            <label for="exampleFormControlInput1"> ¿ Tiene parientes o amigos que han vivido el Encuentro de Novios ?</label> 
                            <div class="form-check form-check-inline">
                                <input onChange={this.handleChange} class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio1" value="option1"></input>
                                <label class="form-check-label" for="inlineRadio1">Sí</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input onChange={this.handleChange} class="form-check-input" type="radio" defaultChecked name="inlineRadioOptions3" id="inlineRadio2" value="option2"></input>
                                <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>

                        </div>

                    </div>

                    <div class="row">
                        <div class="col-form-label-sm col-6 col-md-6 col-lg-3" id="lbnombre">
                            <label for="exampleFormControlInput1"> ¿ Ha estado casado por la iglesia ?</label> 
                            <div class="form-check form-check-inline">
                                <input onChange={this.handleChange} class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio1" value="option1"></input>
                                <label class="form-check-label" for="inlineRadio1">Sí</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input onChange={this.handleChange} class="form-check-input" type="radio" defaultChecked name="inlineRadioOptions4" id="inlineRadio2" value="option2"></input>
                                <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>

                        </div>


                        <div class="col-form-label-sm col-6 col-md-6 col-lg-3" id="lbnombre">

                            <label for="exampleFormControlInput1">Cuantos tiempo <input type="Number" class="form-control" name="TiempoCasdoIglesia" value = {this.state.TiempoCasdoIglesia} placeholder="..."></input></label>


                        </div>
                        <div class="col-form-label-sm col-6 col-md-6 col-lg-3 " id="lbnombre">
                            <label for="exampleFormControlInput1"> ¿    Mantiene union de Hecho     ?</label> 
                            <div class="form-check form-check-inline">
                                <input onChange={this.handleChange} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                                <label class="form-check-label" for="inlineRadio1">Sí</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input onChange={this.handleChange} class="form-check-input" type="radio" defaultChecked name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                                <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>

                        </div>


                        <div class="col-form-label-sm col-6 col-md-6 col-lg-3" id="lbnombre">

                            <label for="exampleFormControlInput1">Cuanto Tiempo <input onChange={this.handleChange} type="Number" class="form-control" name="TiempoUnion" value = {this.state.TiempoUnion} placeholder="..."></input></label>


                        </div>

                    </div>

                    <div class="row">
                        <hr></hr>

                    </div>
                    <div class="row">

                        <div class="col-form-label-sm col-12 " id="lbnombre">
                            <label for="colFormLabelSm">En Caso de Emergencia Contactar a:</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-form-label-sm col-4 col-md-4 " id="lbnombre">

                            <label for="exampleFormControlInput1">Nombre</label>
                            <input onChange={this.handleChange} type="Text" class="form-control" name="ERNombre" value = {this.state.ERNombre} placeholder="Nombre"></input>

                        </div>
                        <div class="col-form-label-sm col-4 col-md-4 " id="lbnombre">

                            <label for="exampleFormControlInput1">Parentensco</label>
                            <input onChange={this.handleChange} type="Text" class="form-control" name="ERparentesco" value = {this.state.ERparentesco} placeholder="Parentesco"></input>

                        </div>
                        <div class="col-form-label-sm col-4 col-md-4 " id="lbnombre">

                            <label for="exampleFormControlInput1">Celular</label>
                            <input onChange={this.handleChange} type="Number" class="form-control" name="ERCelular" value = {this.state.ERCelular} placeholder="Celular"></input>

                        </div>

                    </div>

                    <div class="row">

                        <div class="col-form-label-sm col-12 " id="lbnombre">
                            <label for="colFormLabelSm">Constancia</label>
                        </div>
                    </div>
                    <div class="row">


                        <div class="col-form-label-sm col-12 col-md-6 col-lg-6 " id="lbnombre">
                            <label for="exampleFormControlInput1"> ¿ Necesita constancia de asistencia para la empresa en la que labora ?</label> 
                            <div class="form-check form-check-inline">
                                <input onChange={this.handleChange} class="form-check-input" type="radio" name="inlineRadioOptions6" id="inlineRadio1" value="option1"></input>
                                <label class="form-check-label" for="inlineRadio1">Sí</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input onChange={this.handleChange} class="form-check-input" type="radio" defaultChecked name="inlineRadioOptions6" id="inlineRadio2" value="option2"></input>
                                <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>

                        </div>
                    
                    <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">

                        <label for="exampleFormControlInput1">Nombre de la Empresa</label>
                        <input onChange={this.handleChange} type="Text" class="form-control" name="Empresa" value = {this.state.Empresa} placeholder="Empresa"></input>

                    </div>
                    <div class="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">

                        <label for="exampleFormControlInput1">a quien va dirigida</label>
                        <input onChange={this.handleChange} type="text" class="form-control" name="Dirigidoa" value = {this.state.Dirigidoa} placeholder="Sr."></input>

                    </div>


                    </div>

                    <button type="button" onClick={this.handleClick}  class="btn btn-primary">Guardar</button>
                </div >
            </div >
            </form>
             

        )
    }
}

export default Formulario;