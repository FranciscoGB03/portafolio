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
			<div className="container mt-5">
				<div className="">
					<div className="d-flex justify-content-center">
						<img
							src={Foto}
							className="rounded-circle"
							alt="Foto personal"
						/>
					</div>
				</div>
				<div className="mr-5 mt-5 text-center">
					<h1>Francisco González Bobadilla</h1>
					<h3 className="">Ingeniero en Tecnologías de la Información y Comunicaciones</h3>
					<h5>(Título en proceso)</h5>
				</div>
				<div className="d-flex justify-content-aroud flex-wrap mb-5">
					<Contenedor titulo="Valores" valores={valores} />
					<Contenedor titulo="Pasatiempos" valores={pasatiempos} />
					<Contenedor titulo="Idiomas" valores={idiomas} />
				</div>
			</div>
		</Template>
	);
}

export default Home;