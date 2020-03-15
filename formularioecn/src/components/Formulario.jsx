import React from 'react';
import "../styles/Formulario.css"
import 'bootstrap/dist/css/bootstrap.css';




class Formulario extends React.Component {

    state = {};

    handleChange = (e) => {
        console.log({ name: e.target.name, value: e.target.value, });
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = (e) => {
        console.log(this.state);

    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("se preevino el submit");
    }
    handleLoad()  
    {
       console.log("tipopersona=" + this.props.TipoPesrona)
            this.setState({ TipoPesrona: this.props.TipoPesrona, cedula: this.props.Cedula});
    }

    render() {
        this.handleLoad(); 
        return (
            <form  onSubmit={this.handleSubmit} >
                <div class-name="container" >


                    <div class-name="container" >
                        <div class-name="row">
                            <div class-name="col" >
                              
                                <div id="col-title">  Información de {this.state.TipoPesrona} </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                                <label for="exampleFormControlInput1">1er Nombre</label>
                                <input onChange={this.handleChange} type="text" className="form-control" name="Nombre" value={this.state.Nombre} placeholder="Nombre"></input>
                            </div>
                            <div className="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                                <label for="exampleFormControlInput1">2do Nombre</label>
                                <input onChange={this.handleChange} type="text" className="form-control" name="Nombre2" value={this.state.Nombre2} placeholder="Nombre2"></input>
                            </div>
                            <div className="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                                <label for="exampleFormControlInput1">1er Apellido</label>
                                <input onChange={this.handleChange} type="text" className="form-control" name="apellido" value={this.state.apellido} placeholder="Apellido"></input>
                            </div>
                            <div className="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                                <label for="exampleFormControlInput1">2do Apellido</label>
                                <input onChange={this.handleChange} type="text" className="form-control" name="apellido2" value={this.state.apellido2} placeholder="Apellido2"></input>
                            </div>

                        </div>
                        <div className="row">
                            <hr></hr>

                        </div>
                        <div className="row">
                            <div className="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                                <label for="exampleFormControlInput1">Edad</label>
                                <input onChange={this.handleChange} type="text" className="form-control" name="edad" value={this.state.edad} placeholder="Edad"></input>

                            </div>
                            <div className="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                                <label for="exampleFormControlInput1">Cédula</label>
                                <input onChange={this.handleChange} type="text" className="form-control" name="cedula" value={this.state.cedula} placeholder="Cedula"></input>

                            </div>
                            <div className="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                                <label for="exampleFormControlInput1">Fecha Nacimiento</label>
                                <input onChange={this.handleChange} type="date" className="form-control" name="nacimiento" value={this.state.nacimiento} placeholder="Fecha Nacimiento"></input>

                            </div>
                            <div className="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                                <label for="exampleFormControlInput1">Nacionalidad</label>
                                <input onChange={this.handleChange} type="text" className="form-control" name="nacionalidad" value={this.state.nacionalidad} placeholder="Nacionalidad"></input>

                            </div>

                        </div>



                        <div className="row" >
                            <div className="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                                <label for="exampleFormControlInput1">Celular</label>
                                <input onChange={this.handleChange} type="Number" className="form-control" name="Celular" value={this.state.Celular} placeholder="Celular"></input>

                            </div>
                            <div className="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">
                                <label for="exampleFormControlInput1">Tel. Casa</label>
                                <input onChange={this.handleChange} type="Number" className="form-control" name="Tel" value={this.state.Tel} placeholder="Telefono"></input>

                            </div>
                            <div className="col-form-label-sm col-12 col-md-6 col-lg-6" id="lbnombre">
                                <label for="exampleFormControlInput1">Dirección</label>
                                <input onChange={this.handleChange} type="text" className="form-control" name="Dirección" value={this.state.Dirección} placeholder="Direccion"></input>

                            </div>
                        </div>
                        <div className="row" >



                            <div className="col-form-label-sm  col-8 col-md-6 col-lg-6" id="lbnombre">
                                <label for="exampleFormControlInput1">Correo Electronico</label>
                                <div className="input-group mb-2 mr-sm-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">@</div>
                                    </div>
                                    <input onChange={this.handleChange} type="email" className="form-control" name="Correo" value={this.state.Correo} placeholder="email@example.com"></input>
                                </div>
                            </div>
                            <div className="col-form-label-sm col-4 col-md-6 col-lg-6" id="lbnombre">
                                <label for="exampleFormControlInput1">Ocupación</label>
                                <input onChange={this.handleChange} type="text" className="form-control" name="Ocupación" value={this.state.Ocupación} placeholder="Ocupación"></input>

                            </div>

                        </div>
                        <div className="row">
                            <div className="col-form-label-sm col-12" id="lbnombre">
                                <label for="exampleFormControlInput1">Contacto Familiar Padre o Madre</label>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-form-label-sm col-5 col-md-5 col-lg-3" id="lbnombre">
                                <label for="exampleFormControlInput1">Nombre</label>
                                <input onChange={this.handleChange} type="Text" className="form-control" name="Contacto" value={this.state.Contacto} placeholder="Nombre"></input>

                            </div>
                            <div className="col-form-label-sm col-6 col-md-6 col-lg-2" id="lbnombre">

                                <label for="exampleFormControlInput1">Celular</label>
                                <input onChange={this.handleChange} type="Number" className="form-control" name="CelularContacto" value={this.state.CelularContacto} placeholder="Celular"></input>

                            </div>
                            <div className="col-form-label-sm  col-6 col-md-6 col-lg-3" id="lbnombre">
                                <label for="exampleFormControlInput1">Correo Electronico</label>
                                <div className="input-group mb-2 mr-sm-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">@</div>
                                    </div>
                                    <input onChange={this.handleChange} type="email" className="form-control" name="EmailContacto" value={this.state.EmailContacto} placeholder="email@example.com"></input>
                                </div>

                            </div>
                            <div className="col-form-label-sm col-6 col-md-6 col-lg-3 " id="lbnombre">
                                <label for="exampleFormControlInput1">   Vive en El extranjero o en el Interior del país </label>
                                <div className="form-check form-check-inline">
                                    <input onChange={this.handleChange} className="form-check-input" type="radio" name="inlineRadioOptions1" id="extranjeroRadio1" value="option1"></input>
                                    <label className="form-check-label" for="inlineRadio1">Sí</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={this.handleChange} className="form-check-input" type="radio" defaultChecked name="inlineRadioOptions1" id="extranjeroRadio2" value="option2"></input>
                                    <label className="form-check-label" for="inlineRadio2">No</label>
                                </div>

                            </div>
                        </div>
                        <div className="row justify-contend-md-center"  >
                            <div className="col col-2">
                            </div>
                            <div className="col col-8">
                                <button onClick={this.handleClick} type="button" className="btn btn-primary btn-block">Guardar</button>
                            </div>
                            <div className="col col-2">
                            </div>
                        </div>
                  

                

                       
                    </div >
                </div >
            </form>


        )
    }
}

export default Formulario;