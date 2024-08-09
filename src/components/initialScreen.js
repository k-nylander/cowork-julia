import React, { useState} from 'react';
// Import styles
import '../styles/initialScreen.css';
// Import data
import { information} from '../data';
// Import Pop Up Feature
import ImagesPopUp from './imagesPopUp';

const icons = {
    instagram: null
};


const InitialScreen = () => {

    const [popUp, setPopUp] = useState(false); 
    
    return (
        <section
            className='h-full'
            id='information'>
            <div className="information">

                <ul className='menu'>
                    {/* Links de Contato e Informativos carregados do Data.js */}
                    {Object.keys(information.links).map(key => (
                        <li key={key}>
                            <a
                                className=''
                                href={information.links[key].link != null ? information.links[key].link : null}
                                target="_blank"
                            >
                                {information.links[key].texto}
                                {icons[information.links[key].icon]}
                            </a>
                        </li>
                    ))}

                    {/* Botão do PopUp */}
                    <li>
                        <button onClick={() => setPopUp(true)}>
                            Nosso espaço
                        </button>
                    </li>

                    {/* Botão de contato */}
                    <button
                        href={''}
                        target='_blank'
                        onClick={null}
                        className='availability-button'
                    >
                        Verifique a<br />
                        disponibilidade!
                    </button>
                </ul>
            </div>
            {popUp && <ImagesPopUp onClose={() => setPopUp(false)}/>} 
        </section>
    );
};

export default InitialScreen;
