import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Foto from '../img/foto.jpg'

const Sidebar = () => {
	const [etiqueta, setEtiqueta] = useState('');
	const handleClick = (valor) => {
		setEtiqueta(valor);
	}
	return (
		<div className="sidebar">
			<aside className='d-flex justify-content-center border-right mt-4'>
				<div className=" text-white" >
					<div className="sidebar-heading">
						<div className="mx-2 mb-2 mt-0">
							<div className="">
								<img
									src={Foto}
									className="rounded-circle"
									alt="Foto personal"
								/>
							</div>
						</div>
						<hr className="" />{/*list-group-item list-group-item-action */}
						<div className="">
							<Link to="/portafolio" className={` ${etiqueta === 'muro' ? '' : ''} text-white`} onClick={() => { handleClick('muro') }}>Redes Sociales</Link>
							{/*<Link to="#" className={`${etiqueta==='configuracion'?'':''} text-white`} onClick={()=>{handleClick('configuracion')}}>Shortcuts</Link>*/}
						</div>
					</div>
				</div>
			</aside>			
		</div>
	);
};
export default Sidebar;
