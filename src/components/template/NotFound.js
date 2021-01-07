import React from 'react';
import {Link} from 'react-router-dom'

const NotFound =()=>{
    return(
        <div className="text-center text-wrap mt-5">
            <p>La ruta que coloco no se encuentra disponible
                De clic <Link to="/portafolio">aquí</Link> para regresar
                a la pantalla principal
            </p>
        </div>
    );
}
export default NotFound;