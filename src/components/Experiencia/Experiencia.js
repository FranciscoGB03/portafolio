import React from 'react';
import Template from '../template/Template';
import { Titulo } from '../educacion/Educacion';

const Experiencia = () => {
    return (
        <Template>
            <div className="jumbotron m-0">
                <Titulo titulo="Experiencia laboral" />
                <hr className="text-center w-75" />
                <div className="d-flex justify-content-around flex-wrap">
                    <Contenido titulo="AYAL Soluciones Tecnológicas de Innovación S.A.S. de C.V."
                        periodo="Periodo: 2018-Actualidad"
                        puesto="Puesto: Desarrollador web"
                        actividades={true}
                        acciones={['Analisis, Diseño, Desarrollo, Pruebas e Implementacion de aplicaciones.',
                            'Consultas a bases de datos',
                            'Configuración de servidores linux']} />
                    <Contenido titulo="Gelita México, S. De R.L. De C.V."
                        periodo="Periodo: 2019-2020"
                        puesto="Puesto: Desarrollador web (Residencia)"
                        actividades={true}
                        acciones={['WFPEDIDOS: Aplicación web para el levantamiento de pedidos de productos que genera la empresa.',
                            'CONTROL_PROCESO: Aplicación web para registrar los diferentes datos obtenidos durante la producción de grenetina.',
                            'Configuración de equipos Raspberry.']} />
                    <Contenido titulo="Instituto Tecnológico de Toluca"
                        periodo="Periodo: 2018-2019"
                        puesto="Puesto: Soporte técnico. (Servicio Social)"
                        actividades={true}
                        acciones={['Configuración de antenas, switches y firewall (fortinet).',
                            'Configuración de equipos para que se conectarán a la red de la Institución.',
                            'Instalación de Linux para los equipos de la Biblioteca de la Institución.']} />
                    <Contenido titulo="Instituto Nacional de Computación Aplicada"
                        periodo="Periodo: 2015-2020"
                        puesto="Puesto: Profesor de computación e inglés"
                        actividades={true}
                        acciones={['Impartía cursos de informática tales como: MySQL, PHP(básico), After Effects, Excel, entre otros.',
                            'Clases de Matemáticas, Química e Inglés para preparatoria abierta.',
                            'Clases de Inglés (básico-intermedio) para niños y adolescentes.']} />
                    <Contenido titulo="Servicio Comercial Garis S.A. de C.V."
                        periodo="Periodo: 2010-2015"
                        puesto="Puesto: Técnico en sistemas"
                        actividades={true}
                        acciones={['Reparación de equipos de computo como: teclados, ratones, impresoras (láser, térmica, de inyección y de punto), tarjetas madre(reemplazo de capacitores en mal estado), monitores',
                            'Configuración de antenas y modems (modo brigde).',
                            'Instalación de Linux en las computadoras para cobro.',
                            'Configuración de sistema Alaro para cobro.',
                            'Instalación de Libre Office para equipos de contabilidad con sistema operativo Linux Oracle 6.5 y 7.'
                        ]} />
                </div>
            </div>
        </Template>
    );
}

const Contenido = ({ titulo, periodo, puesto, actividades = false, acciones }) => {
    return (
        <section className="mt-5">
            <div className="card tarjeta-padre py-0 px-0">
                <div className="card-body py-0 px-0 tarjeta-hijo">
                    <h5 className="card-header titulo text-center">{titulo}</h5>
                    <div className="ml-1 d-flex flex-column">
                        <span>{periodo}</span>
                        <span>{puesto}</span>
                        {actividades ?
                            <div>
                                <span>Actividades:</span>
                                <ul>
                                    {acciones.map((accion, key) =>
                                        <li className="pl-1 m-0" key={key}>{accion}</li>
                                    )}
                                </ul>
                            </div> : ''}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Experiencia;