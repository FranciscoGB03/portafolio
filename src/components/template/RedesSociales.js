import React from 'react';
import { FaFacebookSquare, FaYoutube, FaWhatsappSquare } from 'react-icons/fa';
import {AiOutlinePlusCircle} from 'react-icons/ai';

const RedesSociales = () => {
    return (
        <>
            <div className="container-icons">
                <div className="row-icon icon1"><a className="row-icon" href="https://www.facebook.com/francisco.gonzalez.bobadilla" target="_blank" rel="noopener noreferrer"><h4 className="mt-4 mr-1">Facebook</h4><span className="icon-red"><FaFacebookSquare /></span></a></div>
                <div className="row-icon icon2"><a className="row-icon" href="https://www.youtube.com/c/franciscogonzalezbobadilla/videos" target="_blank" rel="noopener noreferrer"><h4 className="mt-4 mr-1">Youtube</h4><span className="icon-red"><FaYoutube /></span></a></div>
                <div className="row-icon icon3"><h4 className="mt-4 mr-1">WhatsApp</h4><span className="icon-red"><FaWhatsappSquare /></span></div>
                <h2 className="icono"><AiOutlinePlusCircle/></h2>
            </div>
        </>
    );
}

export default RedesSociales;