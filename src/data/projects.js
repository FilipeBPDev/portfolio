import { SiReact, SiJavascript, SiCss3, SiMysql, SiPhp, SiNodedotjs } from 'react-icons/si';


import img1 from  '../assets/img/logo-project/Logo-FinManager.png'
import img2 from  '../assets/img/logo-project/Logo-MyNotes.png'
//imagens dos projetos'

const projects = [
  {
    id: 1,
    title: 'FinManager',
    description: 'Sistema de controle financeiro pessoal que permite gerenciar suas finanças de forma simples e eficiente, desenvolvidos com as seguitnes tecnologias: React, CSS, PHP e MySQL.',
    image: img1,
    code: 'https://github.com/seurepo',
    demo: 'https://seusite.com',
    stacks: [SiReact, SiCss3, SiPhp, SiMysql]
  },
  {
    id: 2,
    title: 'MyNotes',
    description: 'Aplicativo de anotações que permite criar, editar e organizar suas notas de forma rápida e intuitiva, desenvolvidos com as seguintes tecnologias: React, CSS e Node.js.',
    image: img2,
    code: 'https://github.com/seurepo',
    stacks: [SiReact, SiCss3, SiNodedotjs]
  },
  {
    id: 3,
    title: 'Meu Portfólio',
    description: 'Portfólio pessoal para exibir meus projetos e habilidades como dev, desenvolvido com as seguintes tecnologias: React, CSS e PHP.',
    image: '/images/projeto3.png',
    code: 'https://github.com/seurepo',
    stacks: [SiReact, SiCss3, SiPhp]
  }
];

export default projects;
