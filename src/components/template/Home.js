import React from 'react';
import Template from './Template';
import Contenedor from './Contenedor';
import Foto from '../img/foto.jpg'
const Home = () => {
	const valores = ['Honestidad', 'Responsabilidad', 'Empatía', 'Lealtad', 'Confianza', 'Tolerancia'];
	const pasatiempos = ['Tocar guitarra', 'Escuchar música', 'Ver películas', 'Jugar ajedrez'];
	const idiomas = ["Inglés intermedio"];

	return (
		<Template>
			<div className="jumbotron">
				<div className="">
					<div className="d-flex justify-content-center">
						<img
							src={Foto}
							className="rounded-circle"
							alt="Foto personal"
						/>
					</div>
				</div>
				<div className="mt-3 text-center">
					<h1>Francisco González Bobadilla</h1>
					<h3 className="">Ingeniero en Tecnologías de la Información y Comunicaciones</h3>
					<h5>(Título en proceso)</h5>
					<div className="card mt-5 tarjeta-objetivo">
						<div className="card-body p-0 tarjeta-hijo">
							<h5 className="card-header titulo text-center text-wrap">Objetivo Profesional</h5>
							<ul>
								<li>
									Mi objetivo es formar parte de un equipo de trabajo, donde el logro de cada uno sea reconocido, y el ambiente de trabajo sea óptimo y agradable, así como crecer profesionalmente y mostrar mi compromiso con la empresa en la que esté laborando.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="d-flex justify-content-around flex-wrap mb-5">
					<Contenedor titulo="Valores" valores={valores} />
					<Contenedor titulo="Pasatiempos" valores={pasatiempos} />
					<Contenedor titulo="Idiomas" valores={idiomas} />
				</div>
			</div>
		</Template>
	);
}

export default Home;