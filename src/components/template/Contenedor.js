import React from 'react';

const Contenedor = ({ titulo, valores }) => {
	return (
		<section className="mt-5 mr-5">
			<div className="card tarjeta-padre">
				<div className="card-body tarjeta-hijo">
					<h5 className="card-title text-center">{titulo}</h5>
					<hr />
					<ul>
						{valores.map((valor, idx) =>
							<li key={idx}>{valor}</li>
						)}
					</ul>
				</div>
			</div>
		</section>
	);
}
export default Contenedor;