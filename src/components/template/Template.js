import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
//import Sidebar from './Sidebar';

function Template(props) {
	return (
		<div className="container-fluid">
			<div className="mb-4">
			<Navbar />
			</div>
			<div className="">
				{/*<Sidebar />*/}
				{props.children}
			</div>
			<Footer />
		</div>
	);
}
export default Template;