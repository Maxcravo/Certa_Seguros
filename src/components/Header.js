import React from 'react';
import Logo from '../imagens/certaseguros_logo_white.png';
import Imagem from '../imagens/img_header.png';
import Lupa from '../imagens/lupa.png';
import Styles from './Header.module.css';

export default function Header() {
    return (
        <div className={Styles.content}>
            <header className={Styles.header} id="top">
                <div className={Styles.left} >
                    <img src={Logo} alt="Logo" className={Styles.logo}></img>
                    <p className={Styles.slogan} >Negócio certo é na Certa Corretora de Seguros</p>
                    <p className={Styles.text}>"Certa Corretora de Seguros Ltda, é uma corretora consolidada no mercado segurador, contando com uma equipe especializada em excelência em atendimento a clientes."<br/>SUSEP 1020057334</p>
                    <div className={Styles.button}>
                        <a href="#title2" className={Styles.botao}>
                            <button className={Styles.button_serviços} variant="banner">                           
                                <div className={Styles.quadrado}><img src={Lupa} alt="Lupa" className={Styles.lupa}></img></div>
                                <p>
                                    Conheça nossos serviços
                                </p>
                            </button> 
                        </a>          
                    </div>  
                </div>
                <div className={Styles.right}>
                    <ol className={Styles.list}>
                        <li><a href="#title">Quem somos</a></li>
                        <li>|</li>
                        <li><a href="#title2">Serviços e Produtos</a></li>
                        <li>|</li>
                        <li  className={Styles.contato}><a href="#contato">Contato</a></li>
                    </ol>
                    <div className={Styles.imagem_header}>
                        <img src={Imagem} alt="Time" className={Styles.img_header}></img>
                    </div>
                    
                </div>
            </header>
        </div>
    );
}

