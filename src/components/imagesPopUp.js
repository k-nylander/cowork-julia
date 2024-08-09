import React, { useState } from 'react';
import Slider from 'react-slick';
import { Minimize2 } from 'lucide-react';
import '../styles/imagesPopUp.css';
import '../styles/customSlickReact.css';
import { popUpImages } from '../data';

function ImagesPopUp({ onClose }) {
    const [isClosing, setIsClosing] = useState(false);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: true,
    };

    const handleClickOutside = (event) => {
        if (event.target.classList.contains('PopUpSection')) {
            handleClose();
        }
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 500); // Tempo da animação
    };

    return (
        <section className='PopUpSection' onClick={handleClickOutside}>
            <div className={`Container z-99 ${isClosing ? 'exit-animation' : 'enter-animation'}`}>
                <button className="place-self-end"><Minimize2 size={25} onClick={handleClose} /></button>
                <Slider {...settings} className="sliderStyle">
                    {Object.keys(popUpImages).map(key => (
                        <div key={key}>
                            <img
                                src={popUpImages[key].imagem}
                                alt={popUpImages[key].titulo}
                                className="carouselImagePopUp"
                            />
                            <p className='imageTitle'>{popUpImages[key].titulo}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default ImagesPopUp;
