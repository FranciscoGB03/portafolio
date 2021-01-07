import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
//import Sidebar from './Sidebar';

function Template(props) {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="ml-2">
				{/*<Sidebar />*/}
				{props.children}
			</div>
			<Footer />
		</div>
	);
}
export default Template;