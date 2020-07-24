import React from 'react';
import Home from './components/template/Home';
import { Link } from 'react-router-dom';

const ROUTES = [
    { exact: true, path: '/portafolio/', component: Home },    
    { exact:null, path:null, component: NotFound }
];

function NotFound(){
    return (
        <div>
            <p>sitio no encontrado</p>
            <Link to='/portafolio'>Click para regresar</Link>
        </div>
    )
}

export default ROUTES;