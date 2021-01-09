import React from 'react';

const Contenedor = ({ titulo, valores }) => {
	return (
		<section className="mt-5">
			<div className="card tarjeta-padre py-0 px-0">
				<div className="card-body py-0 px-0 tarjeta-hijo">
					<h5 className="card-header titulo text-center">{titulo}</h5>
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