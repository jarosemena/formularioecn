import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../images/logoecn.jpg'

class navbar extends React.Component {
    render() {
        return (
            <div className = "container-fluid" >
                <a href="/">
                    <img src={Logo} height="35" alt="Logo Ecn"/>
                    <label className ="font_weight_light">Encuentro <span className ="font-weight-bold"> Catolico </span> para Novios</label>
                    
                </a>

            </div>

        )
    }
}

export default navbar;