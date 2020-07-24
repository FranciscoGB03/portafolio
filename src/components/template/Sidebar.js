import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {  
  const [etiqueta,setEtiqueta]=useState('');
  const handleClick=(valor)=>{
      setEtiqueta(valor);      
  }
	return (
		<div>
			<aside className=''>				
				<div className="default-color-dark text-white border-right" id="sidebar-wrapper">
					<div className="sidebar-heading">
						<div className="mx-2 mb-2 mt-0">
							<div className="">
								<img
									src="http://via.placeholder.com/160x160"
									className="rounded-circle"
									alt="User Image"
								/>
							</div>
						</div>
					</div>
          <hr className="m-0 mt-1"/>
					<div className="list-group list-group-flush">
						<Link to="#" className={`list-group-item list-group-item-action ${etiqueta==='muro'?'bg-dark':'default-color-dark'} text-white`} onClick={()=>{handleClick('muro')}}>Dashboard</Link>
						<Link to="#" className={`list-group-item list-group-item-action ${etiqueta==='configuracion'?'bg-dark':'default-color-dark'} text-white`} onClick={()=>{handleClick('configuracion')}}>Shortcuts</Link>
						{/* <Link to="#" className={`list-group-item list-group-item-action ${etiqueta==''?'bg-dark':'default-color-dark'} text-white`} onClick={()=>{handleClick(!clase)}}>Overview</Link>
						<Link to="#" className={`list-group-item list-group-item-action ${etiqueta==''?'bg-dark':'default-color-dark'} text-white`} onClick={()=>{handleClick(!clase)}}>Events</Link>
						<Link to="#" className={`list-group-item list-group-item-action ${etiqueta==''?'bg-dark':'default-color-dark'} text-white`} onClick={()=>{handleClick(!clase)}}>Profile</Link>
						<Link to="#" className={`list-group-item list-group-item-action ${etiqueta==''?'bg-dark':'default-color-dark'} text-white`} onClick={()=>{handleClick(!clase)}}>Status</Link> */}
					</div>
				</div>
			</aside>
		</div>
	);
};
export default Sidebar;
