import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Foto from '../img/foto.jpg'

const Sidebar = () => {  
  const [etiqueta,setEtiqueta]=useState('');
  const handleClick=(valor)=>{
      setEtiqueta(valor);      
  }
	return (
		<div className="">
			<aside className=''>				
				<div className=" text-white border-right" >
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
					</div>
         	<hr className=""/>{/*list-group-item list-group-item-action */}
					<div className="list-group list-group-flush">
						<Link to="/portafolio" className={` ${etiqueta==='muro'?'':''} text-white`} onClick={()=>{handleClick('muro')}}>Redes Sociales</Link>
						{/*<Link to="#" className={`${etiqueta==='configuracion'?'':''} text-white`} onClick={()=>{handleClick('configuracion')}}>Shortcuts</Link>*/}
					</div>
				</div>
			</aside>
		</div>
	);
};
export default Sidebar;
