import React from 'react';

import '../styles/global.css'
import '../styles/initialScreen.css'

// import data
import { information, AlertaDeProducao } from '../data';
import { UserRoundSearch } from 'lucide-react';

const icons = {
    instagram: null

};

const initialScreen = () => {
    return (
        <section
            className='informationSection'
            id='information'>
            <ul className='menu'>
                {Object.keys(information.links).map(key => (
                    <li key={key}>
                        <a
                            className=''
                            onClick={information.links[key].alerta ? AlertaDeProducao : null}
                            href={information.links[key].link}
                            target='_blank'
                        >
                            {information.links[key].texto}
                            {icons[information.links[key].icon]}
                        </a>
                    </li>
                ))}

                    <button
                        href={''}
                        target='_blank'
                        onClick={null}
                        className='availability-button'
                    >
                        Verifique a<br/>
                        disponibilidade!
                    </button>
            </ul>
        </section>
    );
};

export default initialScreen;
