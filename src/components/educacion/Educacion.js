import React from 'react';
import Template from '../template/Template';

const Educacion = () => {
    return (
        <Template>
            <div className="container mt-5">
                <div className="">
                    <div className="mb-3">
                        <h1>Formación académica</h1>
                    </div>
                    <div className="card py-0">
                        <div className="card-body p-0">
                            <h5 className="card-header text-center">Instituto Tecnológico de Toluca</h5>
                            <div className="mx-1 d-flex flex-column">
                                <span className="card-text">Licenciatura: Ingeniería en Tecnologías de la Información y Comunicaciones</span>
                                <span className="card-text">Periodo:2015-2020 (Título en proceso)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="my-3">
                        <h1>Formación Complementaria</h1>
                    </div>
                    <div className="card py-0">
                        <div className="card-body p-0">
                            <h5 className="card-header text-center">hola</h5>
                            <div className="mx-1 d-flex flex-column">
                                <span className="card-text">Licenciatura: Ingeniería en Tecnologías de la Información y Comunicaciones</span>
                                <span className="card-text">Periodo:2015-2020 (Título en proceso)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-aroud flex-wrap mb-5">

                </div>
            </div>
        </Template>
    );
}
export default Educacion;