import React from 'react';
import "../styles/Formulario.css"
import 'bootstrap/dist/css/bootstrap.css';

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
                        <div class="col-sm-12 col-md-6 col-lg-3" id="lbnombre">
                            <div class="form-group">
                            <label for="exampleFormControlInput1">1er Nombre</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre"></input>
                            <label for="exampleFormControlInput1">2do Nombre</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre"></input>
                            <label for="exampleFormControlInput1">1er Apellido</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre"></input>
                            <label for="exampleFormControlInput1">2do Apellido</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre"></input>
                            
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3" id="lbnombre">2do Nombre</div>
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