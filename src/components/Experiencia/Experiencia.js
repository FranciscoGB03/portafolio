import React from 'react';
import Template from '../template/Template';
import {Titulo} from '../educacion/Educacion';

const Experiencia=()=>{
    return(
        <Template>
            <Titulo titulo="Experiencia laboral"/>
            <hr className="text-center w-75"/>
            <div className="d-flex justify-content-center flex-wrap">
                <Contenido titulo="AYAL Soluciones Tecnológicas de Innovación S.A.S. de C.V."
                periodo="Periodo: 2018-Actualidad"
                puesto="Puesto: Desarrollador web"/>
                <Contenido titulo="Gelita México, S. De R.L. De C.V."
                periodo="Periodo: 2019-2020"
                puesto="Puesto: Desarrollador web (Residencia)"/>
                <Contenido titulo="Instituto Tecnológico de Toluca"
                periodo="Periodo: 2018-2019"
                puesto="Puesto: Soporte técnico. (Servicio Social)"/>
                <Contenido titulo="Instituto Nacional de Computación Aplicada"
                periodo="Periodo: 2015-2020"
                puesto="Puesto: Profesor de computación e inglés"/>
                 <Contenido titulo="Servicio Comercial Garis S.A. de C.V."
                periodo="Periodo: 2010-2015"
                puesto="Puesto: Técnico en sistemas"/>

            </div>
        </Template>
    );
}

const Contenido=({titulo,periodo,puesto,actividades})=>{
    return(
        <section className="mt-5 mr-5">
			<div className="card tarjeta-padre py-0 px-0">
				<div className="card-body py-0 px-0 tarjeta-hijo">
					<h5 className="card-header titulo text-center">{titulo}</h5>
					<div className="ml-1 d-flex flex-column">
                        <span>{periodo}</span>
                        <span>{puesto}</span>
                        <span>{actividades}</span>
                    </div>
				</div>
			</div>
		</section>
    );
}
export default Experiencia;