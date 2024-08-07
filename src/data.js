// Logo Import
import LogoSimples from './assets/Logos/Logo Clara.svg'
import LogoSimplesN from './assets/Logos/Logo Clara + Escrita.svg'
import LogoEscura from './assets/Logos/Logo Escura.svg'
import LogoPreta from './assets/Logos/Logo Preta.svg'
import LogoColoridaW from './assets/Logos/Logo Colorida Workspace.svg'
import LogoColoridaWRC from './assets/Logos/Logo Colorida WorkspaceRC.svg'

// Image Import
import ImgSala_1 from './assets/Salas/Sala1.jpg'
import ImgSala_2 from './assets/Salas/Sala2.jpg'
import ImgSala_3 from './assets/Salas/Sala3.png'


export const presentation = {
    logos: { LogoSimples, LogoSimplesN, LogoEscura, LogoPreta, LogoColoridaW, LogoColoridaWRC },
    carousel: [
        { imagem: ImgSala_1, titulo: "Sala Jus Causa", formato: "16:9" },
        { imagem: ImgSala_2, titulo: "Sala Lex Suprema", formato: "16:9" }
    ]
};


const whatsapp = {
    msg: "Olá, gostaria de saber mais informaçõs sobre os espaços disponíveis!",
    numero: "5511961260556",

}

export const AlertaDeProducao = () => alert(
    "Entre em contato para mais informações!!\nEm breve teremos mais infromações aqui no site!"
);

export const information = {
    links: [
        {
            link: 'https://www.instagram.com/julialautens_costa/',
            texto: 'Veja nosso instagram!',
            icon: 'instagram',

        }, {
            link: 'https://www.google.com.br/maps/preview',
            texto: 'Localização'
        }, {
            link: '',
            texto: 'Nossas Salas',
            alerta:true

        }, {
            link: `https://api.whatsapp.com/send?phone=${whatsapp.numero}&text=${whatsapp.msg.replace(' ', '+')}`,
            texto: 'Entre em contato',
        },
    ]
};


