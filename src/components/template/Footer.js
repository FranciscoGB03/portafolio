import React from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';
import moment from "moment";
const Footer = () => {
	return (
		<div className="d-flex justify-content-center pie">
			<div className="d-flex flex-column">
				<div className="text-center"><span>Elaborado por Francisco González Bobadilla</span></div>				
				<div className="text-center small">
					<span><AiOutlineCopyright /> {moment().year()}. Todos los derechos reservados.</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
