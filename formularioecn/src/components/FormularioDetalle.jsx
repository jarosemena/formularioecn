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
              
        if (this.state.TipoPesrona === undefined) {
            
            this.setState({ TipoPesrona: this.props.TipoPesrona});
            this.setState({ cedula: this.props.Cedula});
            }else 
            {console.log("estado " + this.state.TipoPesrona)}
    }


    render() {
        this.handleLoad(); 
        return (
            <form  onSubmit={this.handleSubmit} >
                <div class-name="container" >


                    <div class-name="container" >
                        <div class-name="row">
                            <div class-name="col" >
                                <div id="col-title">  Información Detallada de {this.state.TipoPesrona} </div>
                            </div>
                        </div>
                       <div className="row">
                            <hr></hr>

                        </div>
                        <div className="row">
                            <div className="col-form-label-sm col-6 col-md-6 col-lg-4" id="lbnombre">
                                <label >Religión</label>
                                <input onChange={this.handleChange} type="Text" className="form-control" name="Religión" value={this.state.Religión} placeholder="Religión"></input>

                            </div>
                            <div className="col-form-label-sm col-6 col-md-6 col-lg-4" id="lbnombre">

                                <label >Parroquia a la que pertenece</label>
                                <input onChange={this.handleChange} type="Number" className="form-control" name="Parroquia" value={this.state.Parroquia} placeholder="Parroquia"></input>

                            </div>

                            <div className="col-form-label-sm col-12 col-md-6 col-lg-4 " id="lbnombre">
                                <label > ¿ Tiene parientes o amigos que han vivido el Encuentro de Novios ?</label>
                                <div className="form-check form-check-inline">
                                    <input onChange={this.handleChange} className="form-check-input" type="radio" name="inlineRadioOptions2" value="option1"></input>
                                    <label className="form-check-label" for="inlineRadio1">Sí</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={this.handleChange} className="form-check-input" type="radio" defaultChecked name="inlineRadioOptions2"  value="option2"></input>
                                    <label className="form-check-label" for="inlineRadio2">No</label>
                                </div>

                            </div>

                        </div>

                        <div className="row">
                            <hr></hr>

                        </div>
                        <div className="row">
                            <div className="col-form-label-sm col-6 col-md-6 col-lg-3" id="lbnombre">
                                <label > ¿ Ha estado casado por la iglesia ?</label>
                                <div className="form-check form-check-inline">
                                    <input onChange={this.handleChange} className="form-check-input" type="radio" name="inlineRadioOptions4"  value="option1"></input>
                                    <label className="form-check-label" for="inlineRadio1">Sí</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={this.handleChange} className="form-check-input" type="radio" defaultChecked name="inlineRadioOptions4" value="option2"></input>
                                    <label className="form-check-label" for="inlineRadio2">No</label>
                                </div>

                            </div>


                            <div className="col-form-label-sm col-6 col-md-6 col-lg-3" id="lbnombre">

                                <label >Cuantos tiempo <input type="Number" className="form-control" name="TiempoCasdoIglesia" value={this.state.TiempoCasdoIglesia} placeholder="..."></input></label>


                            </div>
                            <div className="col-form-label-sm col-6 col-md-6 col-lg-3 " id="lbnombre">
                                <label > ¿    Mantiene union de Hecho     ?</label>
                                <div className="form-check form-check-inline">
                                    <input onChange={this.handleChange} className="form-check-input" type="radio" name="inlineRadioOptions"  value="option1"></input>
                                    <label className="form-check-label" for="inlineRadio1">Sí</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={this.handleChange} className="form-check-input" type="radio" defaultChecked name="inlineRadioOptions"  value="option2"></input>
                                    <label className="form-check-label" for="inlineRadio2">No</label>
                                </div>

                            </div>


                            <div className="col-form-label-sm col-6 col-md-6 col-lg-3" id="lbnombre">

                                <label >Cuanto Tiempo <input onChange={this.handleChange} type="Number" className="form-control" name="TiempoUnion" value={this.state.TiempoUnion} placeholder="..."></input></label>


                            </div>

                        </div>

                       
                        <div className="row">

                            <div className="col-form-label-sm col-12 " id="lbnombre">
                                <label for="colFormLabelSm">En Caso de Emergencia Contactar a:</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-form-label-sm col-4 col-md-4 " id="lbnombre">

                                <label >Nombre</label>
                                <input onChange={this.handleChange} type="Text" className="form-control" name="ERNombre" value={this.state.ERNombre} placeholder="Nombre"></input>

                            </div>
                            <div className="col-form-label-sm col-4 col-md-4 " id="lbnombre">

                                <label >Parentensco</label>
                                <input onChange={this.handleChange} type="Text" className="form-control" name="ERparentesco" value={this.state.ERparentesco} placeholder="Parentesco"></input>

                            </div>
                            <div className="col-form-label-sm col-4 col-md-4 " id="lbnombre">

                                <label >Celular</label>
                                <input onChange={this.handleChange} type="Number" className="form-control" name="ERCelular" value={this.state.ERCelular} placeholder="Celular"></input>

                            </div>

                        </div>
                        <div className="row">
                            <div className="col-form-label-sm col-8 col-md-6 col-lg-5 col-xl-4" id="lbnombre">
                                <label >Alérgico (a) a algún alimentación/Medicamento </label>
                                <div className="form-check form-check-inline">
                                    <input onChange={this.handleChange} className="form-check-input" type="radio" name="inlineRadioOptions0"  value="option1"></input>
                                    <label className="form-check-label" for="inlineRadio1">Sí</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={this.handleChange} className="form-check-input" type="radio" defaultChecked name="inlineRadioOptions0" value="option2"></input>
                                    <label className="form-check-label" for="inlineRadio2">No</label>
                                </div>

                            </div>
                            <div className="col-form-label-sm col-4 col-md-6 col-lg-7 col-xl-8" id="lbnombre">
                                <label >Detalle</label>
                                <input onChange={this.handleChange} type="text" className="form-control" name="Alergias" value={this.state.Alergias} placeholder="Alergias"></input>

                            </div>

                        </div>
                        <div className="row">
                            <hr></hr>

                        </div>
                        <div className="row">

                            <div className="col-form-label-sm col-12 " id="lbnombre">
                                <label for="colFormLabelSm">Constancia</label>
                            </div>
                        </div>
                        <div className="row">


                            <div className="col-form-label-sm col-12 col-md-6 col-lg-6 " id="lbnombre">
                                <label > ¿ Necesita constancia de asistencia para la empresa en la que labora ?</label>
                                <div className="form-check form-check-inline">
                                    <input onChange={this.handleChange} className="form-check-input" type="radio" name="inlineRadioOptions6"  value="option1"></input>
                                    <label className="form-check-label" for="inlineRadio1">Sí</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={this.handleChange} className="form-check-input" type="radio" defaultChecked name="inlineRadioOptions6"  value="option2"></input>
                                    <label className="form-check-label" for="inlineRadio2">No</label>
                                </div>

                            </div>

                            <div className="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">

                                <label >Nombre de la Empresa</label>
                                <input onChange={this.handleChange} type="Text" className="form-control" name="Empresa" value={this.state.Empresa} placeholder="Empresa"></input>

                            </div>
                            <div className="col-form-label-sm col-6 col-md-3 col-lg-3" id="lbnombre">

                                <label >a quien va dirigida</label>
                                <input onChange={this.handleChange} type="text" className="form-control" name="Dirigidoa" value={this.state.Dirigidoa} placeholder="Sr."></input>

                            </div>


                        </div>

                        <button type="button" onClick={this.handleClick} className="btn btn-primary btn-block">Guardar</button>
                    </div >
                </div >
            </form>


        )
    }
}

export default Formulario;