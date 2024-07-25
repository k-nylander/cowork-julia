// Logo Import
import LogoSimples from './assets/Logos/Logo Clara.svg'
import LogoSimplesN from './assets/Logos/Logo Clara + Escrita.svg'
import LogoEscura from './assets/Logos/Logo Escura.svg'
import LogoPreta from './assets/Logos/Logo Preta.svg'
import LogoPretaN from './assets/Logos/Logo Preta + Escrita.svg'

// Image Import
import ImgSala_1 from './assets/Salas/Sala1.jpg'
import ImgSala_2 from './assets/Salas/Sala2.jpg'

export const presentation = {
    logos: {LogoSimples, LogoSimplesN, LogoEscura, LogoPreta, LogoPretaN},
    images: { ImgSala_1, ImgSala_2}
}

export const information = {
    linkIG: 'https://www.instagram.com/julialautens_costa/',
    linkMaps: 'https://www.google.com.br/maps/preview',
    whatsapp: {
        msg: "Olá, gostaria de saber mais informaçõs sobre os espaços disponíveis!",
        numero: "5511961260556"
    }
}

export const AlertaDeProducao = () => alert(
    "Entre em contato para mais informações!!\nEm breve teremos mais infromações aqui no site!"
);
