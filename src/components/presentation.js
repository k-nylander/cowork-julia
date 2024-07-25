import React from 'react';
import Slider from 'react-slick';

// Import Styles
import '../styles/global.css'
import '../styles/customSlickReact.css'

// import data
import { presentation } from '../data'

const Presentation = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
    };

    return (
        <section className='flex flex-col justify-center items-center'>
            <img src={presentation.logos.LogoPretaN} alt='Logo Workspace' className='w-[150px] h-[150px]'/>
            <Slider {...settings} className="w-[80%] max-h-[50%] select-none color-primary-500  " >
                <div>
                    <img src={presentation.images.ImgSala_1} alt="Sala Jus Causa" className="carouselImagePresentation"/>
                </div>
                <div>
                    <img src={presentation.images.ImgSala_2} alt="Sala Lex Suprema" className="carouselImagePresentation"/>
                </div>
            </Slider>
        </section>
    );
};

export default Presentation;                                
