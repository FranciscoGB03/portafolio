import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Template(props) {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="d-flex justify-content-start">
				<Sidebar />
				<div>
					<div className="d-flex justify-content-center">{props.children}</div>
					<Footer />
				</div>
			</div>
		</div>
	);
}
export default Template;