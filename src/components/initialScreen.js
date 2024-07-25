import React from 'react';
import '../styles/global.css'

// import data
import { information, AlertaDeProducao } from '../data';

const initialScreen = () => {
    const wppLink = `https://api.whatsapp.com/send?phone=${information.whatsapp.numero}&text=${information.whatsapp.msg.replace(' ','+')}`

    return (
        <section
            className='bg-primary-500 h-full w-full text-center flex flex-col spaceInnerItens text-primary-100 text-lg p-default py-[15%]' 
            id='information'>
                <a className='' href='https://www.instagram.com/julialautens_costa/' target='_blank'>Veja nosso instagram!!🌐</a>
                <hr/>
                <a className='' href='https://www.google.com.br/maps/preview' target='_blank'>Localização</a>
                <hr/>
                <a className='' href='' target='_self' onClick={AlertaDeProducao}>Nossas Salas</a>
                <hr/>
                <a className='' href={wppLink} target='_blank'>Entre em contato</a>
                <hr/>
                <button
                    href={''} target='_blank'>
                    Verifique a disponibilidade!
                </button>
        </section>
    );
};

export default initialScreen;
