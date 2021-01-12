import React from 'react';
import { FaFacebookSquare, FaYoutube, FaWhatsappSquare } from 'react-icons/fa';
import {AiOutlinePlusCircle} from 'react-icons/ai';

const RedesSociales = () => {
    return (
        <>
            <div className="container-icons">
                <div className="row-icon icon1"><a className="row-icon" href="https://www.facebook.com/francisco.gonzalez.bobadilla" target="_blank" rel="noopener noreferrer"><span className="icon-red text-primary"><FaFacebookSquare /></span></a></div>
                <div className="row-icon icon2"><a className="row-icon" href="https://www.youtube.com/c/franciscogonzalezbobadilla/videos" target="_blank" rel="noopener noreferrer"><span className="icon-red text-danger"><FaYoutube /></span></a></div>
                <div className="row-icon icon3"><a className="row-icon" href="https://api.whatsapp.com/send?phone=527131157360" target="_blank" rel="noopener noreferrer"><span className="icon-red text-success"><FaWhatsappSquare /></span></a></div>
                <h2 className="icono mt-2"><AiOutlinePlusCircle/></h2>
            </div>
        </>
    );
}

export default RedesSociales;