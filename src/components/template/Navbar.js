import React from 'react';
import { NavLink,Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbarFormat py-0">
			<Link className="navbar-brand text-white" to="/portafolio">
				Inicio
			</Link>
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
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<NavLink to="/portafolio/formacion" className="nav-link">
							Formación Academica
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/portafolio/experiencia">
							Experiencia
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;