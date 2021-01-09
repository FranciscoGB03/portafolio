import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import {BsList} from 'react-icons/bs';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbarFormat py-0 fixed-top">
			<Link className="navbar-brand text-white" to="/portafolio">
				Inicio
			</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				<span className="text-white"><BsList/></span>
			</button>
			<div className="collapse navbar-collapse" id="collapsibleNavbar">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<NavLink className="nav-link" to="/portafolio/formacion" >
							Formación Academica
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/portafolio/experiencia">
							Experiencia
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/portafolio/habilidades">
							Habilidades
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;