import React from 'react';
import Styles from './Seguradoras.module.css';
import Bradesco from '../imagens/bradesco.png'
import Hdi from '../imagens/hdi_seguros.png';
import Porto from '../imagens/porto_seguro.png';
import Sompo from '../imagens/sompo_seguros.png';
import SulAmerica from '../imagens/sulamerica.png';


export default function Seguradoras() {
    return (
        <div className={Styles.content}>
            <h1 className={Styles.title}>Seguradoras</h1>
            <div className={Styles.logos}>
                <ol className={Styles.list}>
                    <li><img src={Bradesco} alt="Bradesco" className={Styles.bradesco}></img></li>
                    <li><img src={Hdi} alt="Hdi" className={Styles.hdi}></img></li>
                    <li><img src={Porto} alt="Porto" className={Styles.porto}></img></li>
                    <li><img src={Sompo} alt="Sompo" className={Styles.sompo}></img></li>
                    <li><img src={SulAmerica} alt="SulAmerica" className={Styles.sulamericana}></img></li>
                </ol> 
            </div>
        </div>
    )
}