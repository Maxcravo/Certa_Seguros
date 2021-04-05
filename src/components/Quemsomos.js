import React from 'react';
import Styles from './Quemsomos.module.css';

export default function Quem_somos() {
    return (
        <div className={Styles.quemsomos}>
            <div className={Styles.div_title_quemsomos}>
                <h1 className={Styles.title} id="title">Quem somos?</h1>
            </div>
            <p className={Styles.text1}>Certa Corretora de Seguros Ltda, é uma corretora consolidada no mercado segurador, contando com uma equipe especializada em excelência em atendimento a clientes.</p>
            <p className={Styles.text2}>Com ela, seus clientes não precisam preocupar-se com a data da renovação de seu seguro, com o andamento de algum sinistro que possa ocorrer eventualmente, pois temos equipes que acompanham todos esses eventos de perto e de modo personalizado, permitindo uma aproximação entre nossos clientes e a companhia de seguros.</p>
            <p className={Styles.text4}>Com a Certa Corretora de Seguros você estará protegido e terá todo o suporte de nossa consultoria especializada com agilidade e clareza. Conheça nossos serviços, faça um seguro conosco.</p>
            <div className={Styles.div_title2_quemsomos}>
                <h1 className={Styles.title2}>Nosso objetivo</h1>
            </div>
            <p className={Styles.text3}>Estabelecer parcerias com nossos clientesnas contratações junto com as companhias de seguros maiores e mais solicitadas no mercado - que oferecem custos adequados, efetiva liquidez e comprovada agilidade no pagamento do sinistro.</p>
        </div>
    )
}
