import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<NavLink className="navbar-brand" to="/portafolio">
				Inicio
			</NavLink>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<NavLink to="/portafolio/muro" className="nav-link">
							Experiencia
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/portafolio/configuracion">
							Acerca de
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;