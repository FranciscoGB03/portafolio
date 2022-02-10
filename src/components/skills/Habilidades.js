import React from 'react';
import { Titulo } from '../educacion/Educacion';
import Template from '../template/Template';

const Habilidades = () => {
    return (
        <Template>
            <div className="jumbotron m-0 mb-5">
                <Titulo titulo={"Habilidades"} />
                <hr className="text-center w-80" />
                <div className="d-flex justify-content-center flex-wrap">
                    <div className="d-flex justify-content-around flex-wrap w-80">
                        <Contenido titulo="Lenguajes de Programación"
                            habilidades={['Java', 'Python', 'PHP', 'JavaScript', 'HTML5', 'CSS3', 'Linux Shell Script', 'Kotlin (muy básico)']} />
                        <Contenido titulo="Frameworks"
                            habilidades={['Java Spring Boot', 'JavaServer Faces', 'Laravel', 'Flask', 'React']} />
                        <Contenido titulo="Gestores de Base de Datos"
                            habilidades={['MySQL', 'MariaDB', 'PostgreSQL', 'Oracle SQL']} />
                        <Contenido titulo="Sistemas Operativos"
                            habilidades={['Centos 6.5 y 7', 'Oracle Linux 6.5 y 7', 'Linux mint', 'Ubuntu', 'Mageia', 'Raspbian', 'Mandriva 2009 y 2010', 'Windows 7, 8, 8.1 y 10']} />
                    </div>
                    <div className="d-flex justify-content-around flex-wrap w-80">
                        <Contenido titulo="Servidores Web"
                            habilidades={['Node.js', 'Apache', 'Glassfish']} />
                        <Contenido titulo="Redes"
                            habilidades={['Diseño de topologías', 'Configuración de Modems', 'Configuración de Firewall (Fortinet-básico)', 'Configuración de Vlan en switch']} />
                        <Contenido titulo="Metodologías de trabajo"
                            habilidades={['Scrum', 'kanban', 'XP']} />
                        <Contenido titulo="Otras herramientas"
                            habilidades={['Confluence', 'Jira', 'Github', 'Microsoft teams', 'Netbeans', 'Visual Studio Code', 'SpringToolSuite4', 'Configuración de raspberry']} />
                    </div>
                </div>
            </div>
        </Template>
    );
}
const Contenido = ({ titulo, habilidades = [] }) => {
    return (
        <section className="mt-5">
            <div className="card tarjeta-padre py-0 px-0">
                <div className="card-body py-0 px-0 tarjeta-hijo">
                    <h5 className="card-header titulo text-center">{titulo}</h5>
                    <div className="ml-1 d-flex flex-column">
                        <ul>
                            {habilidades.map((habilidad, key) =>
                                <li className="pl-1 m-0" key={key}>{habilidad}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Habilidades;
