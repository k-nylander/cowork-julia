import React from 'react';
import Slider from 'react-slick';
import { ArrowDownFromLine } from 'lucide-react';

// Import Styles
import '../styles/global.css';
import '../styles/customSlickReact.css';
import '../styles/presentation.css';

// import data
import { presentation } from '../data';

const EmptyArrow = () => <div style={{ display: "none" }}></div>;

const Presentation = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true
    };

    return (
        <section
            id='presentation'
        >
            <img src={presentation.logos.LogoColoridaW} alt='Logo Workspace' className='logo' />

            <Slider {...settings} className="sliderStyle">
                {Object.keys(presentation.carousel).map(key => (
                    <div key={key}>
                        <img
                            src={presentation.carousel[key].imagem}
                            alt={presentation.carousel[key].titulo}
                            className="carouselImagePresentation"
                        />
                        <p className='imageTitle'>{presentation.carousel[key].titulo}</p>
                    </div>
                ))}
            </Slider>
            <a className='subtitle' href='#information'>
                <h2>Venha nos conhecer melhor!!</h2><ArrowDownFromLine className='sm:hidden stroke-1'/>
            </a>
        </section>
    );
};

export default Presentation;