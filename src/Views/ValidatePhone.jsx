import React from 'react'
import '../css/ValidatePhone.css'
import back from '../img/back.png'
import { Link } from 'react-router-dom';

const ValidatePhone = () => {
    return (
        <div className="validate-container" >
            <div className="validate-header" >
                <Link to="/addphone" ><img src={back} alt="Volver atras" /></Link>
            </div>
            <div className="validate-body" >
                <p className="validate-body-title" >Valida tu celular</p>
                <p>Ingresa el código que te enviamos por SMS al +56 910101001</p>
            </div>
            <div className="validate-inputs" >
                <input type="text" maxLength="6" placeholder="código de 6 dígitos" />
            </div>
            <div className="validate-button" >
                <Link to="/address" ><button>Puedes solicitar un nuevo código en 24 seg...</button></Link>
            </div>
        </div>
    )
}

export default ValidatePhone
