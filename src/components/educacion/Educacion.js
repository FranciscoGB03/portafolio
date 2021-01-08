import React from 'react';
import Template from '../template/Template';

const Educacion = () => {
    return (
        <Template>
            <div className="container mt-3">
                <div className="">
                    <Titulo titulo="Formación Académica" />
                    <div className="">
                        <Contenido escuela="Instituto Tecnológico de Toluca"
                            curso="Licenciatura: Ingeniería en Tecnologías de la Información y Comunicaciones"
                            periodo="Periodo: 2015-2020 (Título en proceso)" />
                        <Contenido escuela="Capacítate para el trabajo, Fundación Carlos Slim"
                            curso="Técnico en Electrónica"
                            periodo="Año: 2020"
                            enlace="https://capacitateparaelempleo.org/verifica/nqi3lh7ec/"
                        />
                    </div>
                </div>
                <div className="mx-3">
                    <Titulo titulo="Formación Complementaria" />
                    <div className="">
                        <Contenido escuela=" Beca de Santander, ANUIES"
                            curso="Curso: Habilidades y competencias clave para el mundo profesional"
                            periodo="Septiembre 2020"
                            enlace="https://drive.google.com/file/d/1OxURQ8Gazp-XLrcufO8RHNJWdsMt--y9/view?usp=sharing" />
                        <Contenido escuela="Coursera"
                            curso="Curso: Java Programming: Solving Problems with Software (Con honores)"
                            periodo="Año: 2020"
                            enlace="https://coursera.org/share/361b1a74eb9a481f0dc31e4e88886807" />
                        <Contenido escuela=" Oscars International (Dublín, Irlanda)"
                            curso="Curso: Perfeccionamiento de la lengua inglesa"
                            periodo="Periodo: Julio-Agosto, 2019"
                            enlace="https://drive.google.com/file/d/1fln8BLxVELWGl8hAyqzXTSdQxHORQEkK/view?usp=sharing" />
                        <Contenido escuela="CISCO"
                            curso="Curso: Introduction to IoT"
                            periodo="Periodo: Agosto, 2020"
                            enlace="https://www.youracclaim.com/badges/25bebe55-fb1c43a9-8c86-272ee2518285/public_url" />
                        <Contenido escuela="CISCO"
                            curso="Curso:Introduction to Cibersecurity"
                            periodo="Periodo: Junio, 2020"
                            enlace="https://www.youracclaim.com/badges/983bb484-950f-407b-bdec-74356f48d793/public_url" />
                    </div>
                </div>
                <div className="d-flex justify-content-aroud flex-wrap mb-5">

                </div>
            </div>
        </Template>
    );
}

export const Titulo = ({ titulo }) => {
    return (
        <div className="my-3 text-center">
            <h1>{titulo}</h1>
        </div>
    );
}

const Contenido = ({ escuela, curso, periodo, enlace = '' }) => <div className="my-2">
    <div className="card py-0">
        <div className="card-body p-0">
            <h5 className="card-header titulo text-center">{escuela}</h5>
            <div className="mx-1 d-flex flex-column">
                <span className="card-text">{curso}</span>
                <span className="card-text">{periodo}</span>
                {enlace !== '' ? <span className="card-text text-wrap">{`Enlace: `}
                    <a href={enlace} target="_blank" rel="noopener noreferrer">
                        {enlace}</a>
                </span> : ''}
            </div>
        </div>
    </div>
</div>

export default Educacion;